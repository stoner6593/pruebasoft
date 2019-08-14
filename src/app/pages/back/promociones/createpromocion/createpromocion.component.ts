import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PromocionInterface } from '../../../../models/promocion.interface';
import { PromocionesService } from '../../../../services/promociones.service';
import $ from 'jquery';

@Component({
  selector: 'app-createpromocion',
  templateUrl: './createpromocion.component.html',
  styleUrls: ['./createpromocion.component.css']
})
export class CreatepromocionComponent implements OnInit {
	fecha = new Date();
	fcreacion = this.fecha.toString();

	promocion: PromocionInterface = {
		titulo : '',
		titulo2  :'',
		descripcion  :'',
		descripcion_breve : '',
		imagebackground  :'',
		icono : '',
		estado: 1,
		link_mensaje : '',
		fcreacion : this.fcreacion,
		fvencimiento : ''
	};
  
	constructor( private promocionesService: PromocionesService ) { }

	ngOnInit() {
	}

	onCrearPromocion( myForm,  NgForm){
		this.promocionesService.crearPromocion(this.promocion);
		myForm.reset();
	}

}
