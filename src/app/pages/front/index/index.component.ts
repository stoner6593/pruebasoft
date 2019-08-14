import { Component, OnInit } from '@angular/core';
import { PromocionInterface } from '../../../models/promocion.interface';
import { PromocionesService } from '../../../services/promociones.service';
import { CategoriaInterface } from '../../../models/categoria.interface';
import { CategoriasService } from '../../../services/categorias.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	promociones: PromocionInterface[];
	categorias: CategoriaInterface[];
	constructor( private categoriasService: CategoriasService, 
		private promocionesService: PromocionesService ) 
	{  }

	ngOnInit() {
		this.listarCategorias();
		this.listarPromociones();
	}

	listarCategorias(){
		this.categoriasService.readCategorias().subscribe( categorias => {
	      this.categorias = categorias;
      });
	}

	listarPromociones(){
		this.promocionesService.readPromociones().subscribe( promociones => {
	      this.promociones = promociones;
      });
	}

}