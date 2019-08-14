import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*=====  Front  ===================================================*/
import { IndexComponent } from './pages/front/index/index.component';
import { ProductoscategoriaComponent } from './pages/front/productoscategoria/productoscategoria.component';
import { LoginComponent } from './pages/front/login/login.component';

/*=====  Back  ===================================================*/
import { PanelComponent } from './pages/back/panel/panel.component';
import { UsuariosComponent } from './pages/back/usuarios/usuarios.component';
import { ClientesComponent } from './pages/back/clientes/clientes.component';
import { CategoriasComponent } from './pages/back/categorias/categorias.component';
import { ProductosComponent } from './pages/back/productos/productos.component';
import { MesasComponent } from './pages/back/mesas/mesas.component';
import { PedidosComponent } from './pages/back/pedidos/pedidos.component';
import { IbeaconComponent } from './pages/back/ibeacon/ibeacon.component';
import { PromocionesComponent } from './pages/back/promociones/promociones.component';
import { ConfiguracionComponent } from './pages/back/configuracion/configuracion.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productos-cate',  component: ProductoscategoriaComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'ibeacon', component: IbeaconComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'configuracion', component: ConfiguracionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
