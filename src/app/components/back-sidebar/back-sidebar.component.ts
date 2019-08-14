import { Component, OnInit } from '@angular/core';
import { ConfiguracionInterface } from '../../models/configuracion.interface';
import { ConfiguracionService } from '../../services/configuracion.service';

@Component({
  selector: 'app-back-sidebar',
  templateUrl: './back-sidebar.component.html',
  styleUrls: ['./back-sidebar.component.css']
})
export class BackSidebarComponent implements OnInit {
	elementosMenu:any;
	elemento:any;
	configuracion: ConfiguracionInterface[];
	constructor( private configuracionService: ConfiguracionService ) { }

	ngOnInit() {
		this.mostrarSidebarElementos();
		this.verInfoConfiguracion();
	}

	verInfoConfiguracion(){
		this.configuracionService.readInfoconfiguracion().subscribe( configuracion => {
	      this.configuracion = configuracion;
	  });
	}

	mostrarSidebarElementos(){
		this.elementosMenu = [
			{ icono: 'fa fa-bar-chart', leyenda: 'Panel', ruta: '/panel'  },
			{ icono: 'fa fa-user-o', leyenda: 'Usuarios', ruta: '/usuarios'  },
			{ icono: 'fa fa-group', leyenda: 'Clientes', ruta: '/clientes'  },
			{ icono: 'fa fa-th', leyenda: 'Categorias', ruta: '/categorias'  },
			{ icono: 'fa fa-cubes', leyenda: 'Productos', ruta: '/productos'  },
			{ icono: 'fa fa-braille', leyenda: 'Mesas', ruta: '/mesas'  },
			{ icono: 'fa fa-clone', leyenda: 'Pedidos', ruta: '/pedidos'  },
			{ icono: 'fa fa-credit-card', leyenda: 'Pagos', ruta: '/pagos'  },
			{ icono: 'fa fa-shopping-basket', leyenda: 'Ventas', ruta: '/ventas'  },
			{ icono: 'fa fa-bell', leyenda: 'iBeacon', ruta: '/ibeacon'  },
			{ icono: 'fa fa-dollar', leyenda: 'Promociones', ruta: '/promociones'  },
			{ icono: 'fa fa-gear', leyenda: 'Configuración', ruta: '/configuracion'  }
		];
  		this.elemento = this.elementosMenu[0];
	  	// console.log(this.elementosMenu);
	}
	
}	