import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginVanaheimComponent } from './views/login-vanaheim/login-vanaheim.component';
import { ListarClienteAdminComponent } from './views/admin/listar-cliente-admin/listar-cliente-admin.component';
import { DetalleClienteAdminComponent } from './views/admin/detalle-cliente-admin/detalle-cliente-admin.component';
import { ListarOrdenAdminComponent } from './views/admin/listar-orden-admin/listar-orden-admin.component';
import { DetalleOrdenAdminComponent } from './views/admin/detalle-orden-admin/detalle-orden-admin.component';
import { ListarVendedorAdminComponent } from './views/admin/listar-vendedor-admin/listar-vendedor-admin.component';
import { DetalleVendedorAdminComponent } from './views/admin/detalle-vendedor-admin/detalle-vendedor-admin.component';
import { ListarOrdenFinanzasComponent } from './views/finanzas/listar-orden-finanzas/listar-orden-finanzas.component';
import { TopbarFinanzasComponent } from './views/finanzas/topbar-finanzas/topbar-finanzas.component';
import { DetalleOrdenFinanzasComponent } from './views/finanzas/detalle-orden-finanzas/detalle-orden-finanzas.component';
import { DetalleClienteFinanzasComponent } from './views/finanzas/detalle-cliente-finanzas/detalle-cliente-finanzas.component';
import { ListarClienteFinanzasComponent } from './views/finanzas/listar-cliente-finanzas/listar-cliente-finanzas.component';
import { DashboardFinanzasComponent } from './views/finanzas/dashboard-finanzas/dashboard-finanzas.component';
import { DetalleOrdenVendedorComponent } from './views/vendedor/detalle-orden-vendedor/detalle-orden-vendedor.component';
import { ListarOrdenVendedorComponent } from './views/vendedor/listar-orden-vendedor/listar-orden-vendedor.component';
import { ListarClienteVendedorComponent } from './views/vendedor/listar-cliente-vendedor/listar-cliente-vendedor.component';
import { DetalleClienteVendedorComponent } from './views/vendedor/detalle-cliente-vendedor/detalle-cliente-vendedor.component';
import { SubirOrdenVendedorComponent } from './views/vendedor/subir-orden-vendedor/subir-orden-vendedor.component';
import { TopbarOrdenVendedorComponent } from './views/vendedor/topbar-orden-vendedor/topbar-orden-vendedor.component';
import { DashboardVendedorComponent } from './views/vendedor/dashboard-vendedor/dashboard-vendedor.component';
import { TopbarAdminComponent } from './views/admin/topbar-admin/topbar-admin.component';
import { DashboardAdminComponent } from './views/admin/dashboard-admin/dashboard-admin.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginVanaheimComponent,
    ListarClienteAdminComponent,
    DetalleClienteAdminComponent,
    ListarOrdenAdminComponent,
    DetalleOrdenAdminComponent,
    ListarVendedorAdminComponent,
    DetalleVendedorAdminComponent,
    ListarOrdenFinanzasComponent,
    TopbarFinanzasComponent,
    DetalleOrdenFinanzasComponent,
    DetalleClienteFinanzasComponent,
    ListarClienteFinanzasComponent,
    DashboardFinanzasComponent,
    DetalleOrdenVendedorComponent,
    ListarOrdenVendedorComponent,
    ListarClienteVendedorComponent,
    DetalleClienteVendedorComponent,
    SubirOrdenVendedorComponent,
    TopbarOrdenVendedorComponent,
    DashboardVendedorComponent,
    TopbarAdminComponent,
    DashboardAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
