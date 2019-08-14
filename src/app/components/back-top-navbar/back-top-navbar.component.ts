import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-top-navbar',
  templateUrl: './back-top-navbar.component.html',
  styleUrls: ['./back-top-navbar.component.css']
})
export class BackTopNavbarComponent implements OnInit {
	fecha = new Date();

  	constructor() { }

  	ngOnInit() {
  	}

}
