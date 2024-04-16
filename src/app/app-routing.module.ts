import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ListarClienteAdminComponent } from './views/admin/listar-cliente-admin/listar-cliente-admin.component';
import { DetalleClienteAdminComponent } from './views/admin/detalle-cliente-admin/detalle-cliente-admin.component';
import { ListarVendedorAdminComponent } from './views/admin/listar-vendedor-admin/listar-vendedor-admin.component';
import { DetalleVendedorAdminComponent } from './views/admin/detalle-vendedor-admin/detalle-vendedor-admin.component';
import { DashboardOrdenesAdminComponent } from './views/admin/dashboard-ordenes-admin/dashboard-ordenes-admin.component';
import { ListarOrdenAdminComponent } from './views/admin/listar-orden-admin/listar-orden-admin.component';
import { ListarOrdenRequestAdminComponent } from './views/admin/listar-orden-request-admin/listar-orden-request-admin.component';
import { DetalleOrdenAdminComponent } from './views/admin/detalle-orden-admin/detalle-orden-admin.component';
import { DetalleOrdenRequestAdminComponent } from './views/admin/detalle-orden-request-admin/detalle-orden-request-admin.component';
import { SubirOrdenAdminComponent } from './views/admin/subir-orden-admin/subir-orden-admin.component';
import { LoginVanaheimComponent } from './views/login-vanaheim/login-vanaheim.component';
import { ListarClienteFinanzasComponent } from './views/finanzas/listar-cliente-finanzas/listar-cliente-finanzas.component';
import { DashboardFinanzasComponent } from './views/finanzas/dashboard-finanzas/dashboard-finanzas.component';
import { ListarOrdenFinanzasComponent } from './views/finanzas/listar-orden-finanzas/listar-orden-finanzas.component';
import { DetalleClienteFinanzasComponent } from './views/finanzas/detalle-cliente-finanzas/detalle-cliente-finanzas.component';
import { DetalleOrdenRequestFinanzasComponent } from './views/finanzas/detalle-orden-request-finanzas/detalle-orden-request-finanzas.component';
import { ListaOrdenRequestFinanzasComponent } from './views/finanzas/lista-orden-request-finanzas/lista-orden-request-finanzas.component';
import { DashboardVendedorComponent } from './views/vendedor/dashboard-vendedor/dashboard-vendedor.component';
import { ListarClienteVendedorComponent } from './views/vendedor/listar-cliente-vendedor/listar-cliente-vendedor.component';
import { DetalleOrdenVendedorComponent } from './views/vendedor/detalle-orden-vendedor/detalle-orden-vendedor.component';
import { ListarOrdenVendedorComponent } from './views/vendedor/listar-orden-vendedor/listar-orden-vendedor.component';
import { ListarOrdenesRequestVendedorComponent } from './views/vendedor/listar-ordenes-request-vendedor/listar-ordenes-request-vendedor.component';
import { DetalleClienteVendedorComponent } from './views/vendedor/detalle-cliente-vendedor/detalle-cliente-vendedor.component';
import { DetalleOrdenRequestVendedorComponent } from './views/vendedor/detalle-orden-request-vendedor/detalle-orden-request-vendedor.component';
import { ListarUsuarioAdminComponent } from './views/admin/listar-usuario-admin/listar-usuario-admin.component';
import { AdminGuard } from './services/guards/admin/admin.guard';
import { VentasGuard } from './services/guards/ventas/ventas.guard';
import { FinazasGuard } from './services/guards/finanzas/finanzas.guard';

const routes: Routes = [
  {path:'',component:LoginVanaheimComponent},
  {path:'admin',component:DashboardAdminComponent,canActivate:[AdminGuard],children:[
    {path:'clientes',component:ListarClienteAdminComponent},
    {path:'clientes/:id',component:DetalleClienteAdminComponent},
    {path:'ordenes/sap',component:ListarOrdenAdminComponent},
    {path:'ordenes/sap/:id',component:DetalleOrdenAdminComponent},
    {path:'ordenes/request',component:ListarOrdenRequestAdminComponent},
    {path:'ordenes/request/add',component:SubirOrdenAdminComponent},
    {path:'ordenes/request/:id',component:DetalleOrdenRequestAdminComponent},
    {path:'vendedores',component:ListarVendedorAdminComponent},
    {path:'vendedores/:id',component:DetalleVendedorAdminComponent},
    {path:'usuarios',component:ListarUsuarioAdminComponent}
  ]},
  {path:'finanzas',component:DashboardFinanzasComponent,canActivate:[FinazasGuard],children:[
    {path:'clientes',component:ListarClienteFinanzasComponent},
    {path:'clientes/:id',component:DetalleClienteFinanzasComponent},
    {path:'ordenes/sap',component:ListarOrdenFinanzasComponent},
    {path:'ordenes/sap/:id',component:DetalleClienteFinanzasComponent},
    {path:'ordenes/request',component:ListaOrdenRequestFinanzasComponent},
    {path:'ordenes/request/:id',component:DetalleOrdenRequestFinanzasComponent}
  ]},
  {path:'vendedor',component:DashboardVendedorComponent,canActivate:[VentasGuard],children:[
    {path:'clientes',component:ListarClienteVendedorComponent},
    {path:'clientes/:id',component:DetalleClienteVendedorComponent},
    {path:'ordenes/sap',component:ListarOrdenVendedorComponent},
    {path:'ordenes/sap/:id',component:DetalleOrdenVendedorComponent},
    {path:'ordenes/request',component:ListarOrdenesRequestVendedorComponent},
    {path:'ordenes/request/:id',component:DetalleOrdenRequestVendedorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
