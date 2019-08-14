import { Component, OnInit } from '@angular/core';
import { PromocionInterface } from '../../../models/promocion.interface';
import { PromocionesService } from '../../../services/promociones.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
	promociones: PromocionInterface[];

  	constructor( private promocionesService: PromocionesService ) {
   }

  ngOnInit() {
	this.listarPromociones();
	}

	listarPromociones(){
		this.promocionesService.readPromociones().subscribe( promociones => {
			console.log(promociones);
	      this.promociones = promociones;
      });
	}

	actializarEstadoPromocion( id, estado ){
		if( estado == 1 ){
			this.promocionesService.updateEstadoPromocion(id, 0);
		}
		if( estado == 0 ){
			this.promocionesService.updateEstadoPromocion(id, 1);
		}
	}

	actializarClasePromocion( id, clase ){
		if( clase == 'active' ){
			this.promocionesService.updateClasePromocion(id, '');
		}
		if( clase == '' ){
			this.promocionesService.updateClasePromocion(id, 'active');
		}
	}
}
