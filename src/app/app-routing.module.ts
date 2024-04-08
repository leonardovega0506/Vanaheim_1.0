import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';
import { ListarClienteAdminComponent } from './views/admin/listar-cliente-admin/listar-cliente-admin.component';
import { DetalleClienteAdminComponent } from './views/admin/detalle-cliente-admin/detalle-cliente-admin.component';

const routes: Routes = [
  {path:'admin',component:DashboardAdminComponent,children:[
    {path:'clientes',component:ListarClienteAdminComponent},
    {path:'clientes/:id',component:DetalleClienteAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
