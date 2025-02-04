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

const routes: Routes = [
  {path:'admin',component:DashboardAdminComponent,children:[
    {path:'clientes',component:ListarClienteAdminComponent},
    {path:'clientes/:id',component:DetalleClienteAdminComponent},
    {path:'ordenes/sap',component:ListarOrdenAdminComponent},
    {path:'ordenes/sap/:id',component:DetalleOrdenAdminComponent},
    {path:'ordenes/request',component:ListarOrdenRequestAdminComponent},
    {path:'ordenes/request/:id',component:DetalleOrdenRequestAdminComponent},
    {path:'vendedores',component:ListarVendedorAdminComponent},
    {path:'vendedores/:id',component:DetalleVendedorAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
