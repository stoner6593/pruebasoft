import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
	clase: boolean;
	urlPage = this.url.path();

  	constructor( private url:LocationStrategy ) { 
		this.activarClaseLanding();
  	}
	
	ngOnInit() {
	}

	activarClaseLanding(){
		// console.log(this.urlPage);
		if ( this.urlPage == '' || this.urlPage == '/inicio' ){
			console.log(this.urlPage);
			$(document).ready(function(){
                $("body").addClass("landing-page no-skin-config");
            });
		}
		if ( this.urlPage == '/login'){
			$(document).ready(function(){
                $("body").removeClass("landing-page no-skin-config");
                $("body").addClass("gray-bg");
            });
		}
		if ( this.urlPage == '/panel'  || this.urlPage == '/usuarios' || this.urlPage == '/categorias') {
			$(document).ready(function(){
                $("body").removeClass("landing-page no-skin-config");
            });
        }
	}
}
