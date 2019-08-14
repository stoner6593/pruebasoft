import { Component, OnInit } from '@angular/core';

import { ConfiguracionInterface } from '../../models/configuracion.interface';
import { ConfiguracionService } from '../../services/configuracion.service';

@Component({
  selector: 'app-front-navbar',
  templateUrl: './front-navbar.component.html',
  styleUrls: ['./front-navbar.component.css']
})
export class FrontNavbarComponent implements OnInit {
	configuracion: ConfiguracionInterface[];
	
	constructor( private configuracionService: ConfiguracionService ) { }
	
	ngOnInit() {
		this.verInfoConfiguracion();
	}

	verInfoConfiguracion(){
		this.configuracionService.readInfoconfiguracion().subscribe( configuracion => {
	      this.configuracion = configuracion;
	  });
	}

}
