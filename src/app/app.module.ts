import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

/* ==   Modulos de Firebase   ====================================== */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule  } from '@angular/fire/storage';

/* ==   Componentes  ====================================== */
import { AppComponent } from './app.component';
import { ClasesComponent } from './components/clases/clases.component';
import { FrontNavbarComponent } from './components/front-navbar/front-navbar.component';
import { FrontCopyrightComponent } from './components/front-copyright/front-copyright.component';
import { BackSidebarComponent } from './components/back-sidebar/back-sidebar.component';
import { BackTopNavbarComponent } from './components/back-top-navbar/back-top-navbar.component';
import { BackCopyrightComponent } from './components/back-copyright/back-copyright.component';
import {Routes,RouterModule} from '@angular/router';

/* =====   Servicios  ====================================== */
import { ProductosService } from './services/productos.service';
import { CategoriasService } from './services/categorias.service';
import { UsuariosService } from './services/usuarios.service';
import { PromocionesService } from './services/promociones.service';
import { ConfiguracionService } from './services/configuracion.service';

/* ==   Paginas  ====================================== */
import { IndexComponent } from './pages/front/index/index.component';
import { LoginComponent } from './pages/front/login/login.component';
import { ProductoscategoriaComponent } from './pages/front/productoscategoria/productoscategoria.component';
import { CategoriasComponent } from './pages/back/categorias/categorias.component';
import { CreatecategoryComponent } from './pages/back/categorias/createcategory/createcategory.component';
import { EditcategoryComponent } from './pages/back/categorias/editcategory/editcategory.component';
import { PromocionesComponent } from './pages/back/promociones/promociones.component';
import { CreatepromocionComponent } from './pages/back/promociones/createpromocion/createpromocion.component';
import { ClientesComponent } from './pages/back/clientes/clientes.component';
import { ConfiguracionComponent } from './pages/back/configuracion/configuracion.component';
import { IbeaconComponent } from './pages/back/ibeacon/ibeacon.component';
import { MesasComponent } from './pages/back/mesas/mesas.component';
import { PagosComponent } from './pages/back/pagos/pagos.component';
import { PanelComponent } from './pages/back/panel/panel.component';
import { PedidosComponent } from './pages/back/pedidos/pedidos.component';
import { ProductosComponent } from './pages/back/productos/productos.component';
import { CreateproductComponent } from './pages/back/productos/createproduct/createproduct.component';
import { UsuariosComponent } from './pages/back/usuarios/usuarios.component';
import { CreateuserComponent } from './pages/back/usuarios/createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    ClasesComponent,
    FrontNavbarComponent,
    FrontCopyrightComponent,
    BackSidebarComponent,
    BackTopNavbarComponent,
    IndexComponent,
    LoginComponent,
    ProductoscategoriaComponent,
    CreateproductComponent,
    CategoriasComponent,
    CreatecategoryComponent,
    EditcategoryComponent,
    ClientesComponent,
    ConfiguracionComponent,
    IbeaconComponent,
    MesasComponent,
    PagosComponent,
    PanelComponent,
    PedidosComponent,
    ProductosComponent,
    PromocionesComponent,
    UsuariosComponent,
    CreatepromocionComponent,
    CreateuserComponent,
    BackCopyrightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'softdiscobar'),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    ProductosService,
    CategoriasService,
    UsuariosService,
    PromocionesService,
    ConfiguracionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
