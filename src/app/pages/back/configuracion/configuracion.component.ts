import { Component, OnInit } from '@angular/core';
import { ConfiguracionInterface } from '../../../models/configuracion.interface';
import { ConfiguracionService } from '../../../services/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
	configuracion: ConfiguracionInterface[];
	year = new Date;

	tipoInformacion: string = '';
	vernegocio: boolean;
	vercontacto: boolean;
	verubicacion: boolean;
	verredes: boolean;
	
	constructor( private configuracionService: ConfiguracionService ) { }

	ngOnInit() {
		this.Infonegocio();
		this.verInfo();
	}
	
	verInfo(){
		this.configuracionService.readInfoconfiguracion().subscribe( configuracion => {
	      this.configuracion = configuracion;
	  });
	}

	Infonegocio() {
		this.vernegocio = true;
		this.vercontacto = false;
		this.verubicacion = false;
		this.verredes = false;
		this.tipoInformacion = 'Datos del Negocio';	
	}

	Infocontacto(){
		this.vernegocio = false;
		this.vercontacto = true;
		this.verubicacion = false;
		this.verredes = false;
		this.tipoInformacion = 'Datos de Contacto';	
	}

	Infoubicacion(){
		this.vernegocio = false;
		this.vercontacto = false;
		this.verubicacion = true;
		this.verredes = false;
		this.tipoInformacion = 'Datos de Ubicación';	

	}

	Inforedes(){
		this.vernegocio = false;
		this.vercontacto = false;
		this.verubicacion = false;
		this.verredes = true;
		this.tipoInformacion = 'Redes del Negocio';	
	}
}
