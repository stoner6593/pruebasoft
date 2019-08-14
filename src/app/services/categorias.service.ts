import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { CategoriaInterface } from '../models/categoria.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
    categoriasCollection: AngularFirestoreCollection<CategoriaInterface>;
    categorias: Observable<CategoriaInterface[]>;
    categoriasDoc: AngularFirestoreDocument<CategoriaInterface>;

    constructor( public afs: AngularFirestore, private storage: AngularFireStorage ) {
        this.categoriasCollection = afs.collection<CategoriaInterface>('categorias');
        this.categorias = this.categoriasCollection.snapshotChanges().pipe(
            map( actions => actions.map( a => {
                const data = a.payload.doc.data() as CategoriaInterface;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    // Tarea para subir archivo
    public tareaCloudStorage(nombreArchivo: string, datos: any) {
        return this.storage.upload(nombreArchivo, datos);
    }

    // Referencia del archivo
	public referenciaCloudStorage(nombreArchivo: string) {
		return this.storage.ref(nombreArchivo);
	}

	crearCategoria(categoria: CategoriaInterface){
		this.categoriasCollection.add(categoria);
	}

	readCategorias(){
		return this.categorias;
	}
	
	readCategoria(id){
		return this.categoriasCollection.doc(id);
	}

	updateEstadoCategoria(id, estado){
		this.categoriasCollection.doc(id).update({
		    "estado": estado
		})
	}

	deleteCategoria(id){
    	this.categoriasCollection.doc(id).delete();
	}
}
