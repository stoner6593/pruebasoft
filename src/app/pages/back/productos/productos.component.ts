import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from '../../../models/producto.interface';
import { ProductosService } from '../../../services/productos.service';
import Swal from 'sweetalert2';
import $ from 'jquery';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
	productos: ProductoInterface[];
	titularAlerta: string = '';

	constructor( private productosService: ProductosService ) {}

	ngOnInit() {
		this.listarProductos();
	}

	listarProductos(){
		this.productosService.readProducto().subscribe( productos => {
			this.productos = productos;
		});
	}
	
	eliminarProducto(id) {
		this.titularAlerta = 'hola';
		Swal.fire({
			title: '¿Va a eliminar este producto?',
			text: "¿Está seguro de tomar esta decisión?. ¡Esta tarea no se puede retornar!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#23c6c8',
			cancelButtonColor: '#ed5565 ',
			confirmButtonText: '¡Si, quiero eliminarlo!'
		}).then((result) => {
			if (result.value) {
				Swal.fire(
					'¡Eliminado!',
					'El producto ha sido eliminado.',
					'success'
				)
				this.productosService.deleteProducto(id);
			}
		})
	}

}
