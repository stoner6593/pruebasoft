import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriaInterface } from '../../../../models/categoria.interface';
import { CategoriasService } from '../../../../services/categorias.service';
import $ from 'jquery';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

	constructor( private categoriasService: CategoriasService ) { 
	}

	ngOnInit() {  
	}
}
