import { Component, OnInit } from '@angular/core';
import { CategoriaInterface } from '../../../models/categoria.interface';
import { CategoriasService } from '../../../services/categorias.service';
import Swal from 'sweetalert2';
import $ from 'jquery';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
	categorias: CategoriaInterface[];

  	constructor( private categoriasService: CategoriasService ) {
		this.listarCategorias();
	  }

	ngOnInit() {  
		 
	}

	listarCategorias(){
		this.categoriasService.readCategorias().subscribe( categorias => {
	      this.categorias = categorias;
      });
	}

	actializarEstadoCategoria( id, estado ){
		if( estado == 1 ){
			this.categoriasService.updateEstadoCategoria(id, 0);
		}
		if( estado == 0 ){
			this.categoriasService.updateEstadoCategoria(id, 1);
		}
	}

	eliminarCategoria(id) {
		Swal.fire({
			title: '¿Va a eliminar esta categoría?',
			text: "¿Está seguro de tomar esta decisión?. ¡Esta tarea no se puede retornar!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#23c6c8',
			cancelButtonColor: '#ed5565 ',
			confirmButtonText: '¡Si, quiero eliminarla!'
		}).then((result) => {
			if (result.value) {
				Swal.fire(
					'¡Eliminada!',
					'La categoria se ha sido eliminado.',
					'success'
				)
				this.categoriasService.deleteCategoria(id);
			}
		})
	}
}
