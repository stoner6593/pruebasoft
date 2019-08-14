import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UsuarioInterface } from '../models/usuario.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
	usuariosCollection: AngularFirestoreCollection<UsuarioInterface>;
	usuarios: Observable<UsuarioInterface[]>;
	usuariosDoc: AngularFirestoreDocument<UsuarioInterface>;

	constructor( public afs: AngularFirestore ) { 
		this.usuariosCollection = afs.collection<UsuarioInterface>('usuarios');
		this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
			map( actions => actions.map( a => {
				const data = a.payload.doc.data() as UsuarioInterface;
				const id = a.payload.doc.id;
				return { id, ...data };
			}))
		);
	}

	crearUsuario(usuario: UsuarioInterface){
		this.usuariosCollection.add(usuario);
	}

	readUsuarios(){
		return this.usuarios;
	}

	updateUsuario(id, estado){
		console.log('id: ' + id);
		console.log('estado:' + estado);
		this.usuariosCollection.doc(id).update({
		    "estado": estado
		})
	}
}
