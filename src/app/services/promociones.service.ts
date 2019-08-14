import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { PromocionInterface } from '../models/promocion.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})

export class PromocionesService {
	promocionesCollection: AngularFirestoreCollection<PromocionInterface>;
	promociones: Observable<PromocionInterface[]>;
	promocionesDoc: AngularFirestoreDocument<PromocionInterface>;

	constructor( public afs: AngularFirestore ) { 
		this.promocionesCollection = afs.collection<PromocionInterface>('promociones');
		this.promociones = this.promocionesCollection.snapshotChanges().pipe(
			map( actions => actions.map( a => {
				const data = a.payload.doc.data() as PromocionInterface;
				const id = a.payload.doc.id;
				return { id, ...data };
			}))
		);
	}

	crearPromocion(promocion: PromocionInterface){
		console.log("nueva promocion");
		this.promocionesCollection.add(promocion);
  	}

	readPromociones(){
		return this.promociones;
	}

	updateEstadoPromocion(id, estado){
		console.log('id: ' + id);
		console.log('estado:' + estado);
		this.promocionesCollection.doc(id).update({
		    "estado": estado
		})
	}

	updateClasePromocion(id, clase){
		console.log('id: ' + id);
		console.log('item clase:' + clase);
		this.promocionesCollection.doc(id).update({
		    "clase": clase
		})
	}

	// deletePromocion(){}

}
