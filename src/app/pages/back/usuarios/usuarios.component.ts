import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../../../models/usuario.interface';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
	usuarios: UsuarioInterface[];

	constructor( private usuariosService: UsuariosService ) {
   }

   ngOnInit() {
	this.listarUsuarios();
	}

	listarUsuarios(){
		this.usuariosService.readUsuarios().subscribe( usuarios => {
	      this.usuarios = usuarios;
      });
	}

	actializarUsuario( id, estado ){
		if( estado == 1 ){
			this.usuariosService.updateUsuario(id, 0);
		}
		if( estado == 0 ){
			this.usuariosService.updateUsuario(id, 1);
		}
	}
}
