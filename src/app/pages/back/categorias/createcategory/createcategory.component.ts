import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriaInterface } from '../../../../models/categoria.interface';
import { CategoriasService } from '../../../../services/categorias.service';
import $ from 'jquery';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {
	fecha = new Date();
	fcreacion = this.fecha.toString();
	categoria: CategoriaInterface = {
		nombre: '',
		preview: '',
		estado: 1,
		fcreacion: this.fcreacion
	};
	
	constructor( private categoriasService: CategoriasService ) { 
	}
	
	ngOnInit() {  	}

	public mensajeArchivo = 'No hay un archivo seleccionado';
	public datosFormulario = new FormData();
	public nombreArchivo = '';
	public URLPublica = '';
	public porcentaje = 0;
	public finalizado = false;

	//Evento que se gatilla cuando el input de tipo archivo cambia
	public cambioArchivo(event) {
		if (event.target.files.length > 0) {
			for (let i = 0; i < event.target.files.length; i++) {
				this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
				this.nombreArchivo = event.target.files[i].name;
				this.datosFormulario.delete('archivo');
				this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
			}
		} 
		else {
			this.mensajeArchivo = 'No hay un archivo seleccionado';
		}
	}
	
	//Sube el archivo a Cloud Storage
	public subirArchivo() {
		let archivo = this.datosFormulario.get('archivo');
		let referencia = this.categoriasService.referenciaCloudStorage(this.nombreArchivo);
		let tarea = this.categoriasService.tareaCloudStorage(this.nombreArchivo, archivo);

		//Cambia el porcentaje
		tarea.percentageChanges().subscribe((porcentaje) => {
			this.porcentaje = Math.round(porcentaje);
			if (this.porcentaje == 100) {
				this.finalizado = true;
			}
		});

		referencia.getDownloadURL().subscribe((URL) => {
			this.URLPublica = URL;
		});
	}

	onCrearCategoria( myForm,  NgForm){
		this.categoriasService.crearCategoria(this.categoria);
		myForm.reset();
		let archivo = this.datosFormulario.get('archivo');
	    let referencia = this.categoriasService.referenciaCloudStorage(this.nombreArchivo);
	    let tarea = this.categoriasService.tareaCloudStorage(this.nombreArchivo, archivo);
	    referencia.getDownloadURL().subscribe((URL) => {
	      this.URLPublica = URL;
	    });
	}
	
}
