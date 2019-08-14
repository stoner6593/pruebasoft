import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProductoInterface } from '../models/producto.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productosCollection: AngularFirestoreCollection<ProductoInterface>;
  productos: Observable<ProductoInterface[]>;
  productosDoc: AngularFirestoreDocument<ProductoInterface>;

    constructor( public afs: AngularFirestore ) { 
      // this.productos = afs.collection('productos').valueChanges();
      this.productosCollection = afs.collection<ProductoInterface>('productos');
      this.productos = this.productosCollection.snapshotChanges().pipe(
        map( actions => actions.map( a => {
          const data = a.payload.doc.data() as ProductoInterface;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    }

  crearProducto(producto: ProductoInterface){
    console.log("nuevo producto");
    this.productosCollection.add(producto);
  }

  readProducto(){
      return this.productos;
  }

  updateProducto(){}

  deleteProducto(id){
    this.productosCollection.doc(id).delete()
  }
  
}
