import { Component, OnInit } from '@angular/core';
import { ConfiguracionInterface } from '../../models/configuracion.interface';
import { ConfiguracionService } from '../../services/configuracion.service';

@Component({
  selector: 'app-front-copyright',
  templateUrl: './front-copyright.component.html',
  styleUrls: ['./front-copyright.component.css']
})
export class FrontCopyrightComponent implements OnInit {
	year = new Date;
	
	configuracion: ConfiguracionInterface[];

	constructor( 
		private configuracionService: ConfiguracionService
	) { }
	
	ngOnInit() {
		this.verInfoConfiguracion();
	}

	verInfoConfiguracion(){
		this.configuracionService.readInfoconfiguracion().subscribe( configuracion => {
	      this.configuracion = configuracion;
	  });
	}
}
