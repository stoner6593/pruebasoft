import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ConfiguracionInterface } from '../models/configuracion.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  configuracionCollection: AngularFirestoreCollection<ConfiguracionInterface>;
	configuracion: Observable<ConfiguracionInterface[]>;
	configuracionDoc: AngularFirestoreDocument<ConfiguracionInterface>;

    constructor( public afs: AngularFirestore ) { 
      this.configuracionCollection = afs.collection<ConfiguracionInterface>('configuracion');
      this.configuracion = this.configuracionCollection.snapshotChanges().pipe(
        map( actions => actions.map( a => {
          const data = a.payload.doc.data() as ConfiguracionInterface;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    }

  readInfoconfiguracion(){
      return this.configuracion;
  }

  updateLogo( logo ){
    this.configuracionCollection.doc('ihvipmoaZzlCknqW2kJdU').update({
        "logo": logo
    })
  }

}