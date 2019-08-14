import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductoInterface } from '../../../../models/producto.interface';
import { ProductosService } from '../../../../services/productos.service';
import { CategoriaInterface } from '../../../../models/categoria.interface';
import { CategoriasService } from '../../../../services/categorias.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
	fecha = new Date();
	fcreacion = this.fecha.toString();
	
	categorias: CategoriaInterface[];

	producto: ProductoInterface = {
		nombre: '',
		marca: '',
		categoria: '',
		presentacion: '',
		descripcion: '',
		stock: 0,
		fvencimiento: '00/00/0000',
		reginvima: '',
		iva: 0,
		vunitario: 0,
		pganancia: 0,
		foto: '',
		fcreacion: this.fcreacion
	};

	constructor( private productosService: ProductosService, private categoriasService: CategoriasService, private router: Router ) {
		this.listarCategorias();
	}

	ngOnInit() {
	}

	listarCategorias(){
		this.categoriasService.readCategorias().subscribe( categorias => {
	      this.categorias = categorias;
      });
	}

	onCrearProducto( myForm,  NgForm){
		this.productosService.crearProducto(this.producto);
		myForm.reset();
	}

}