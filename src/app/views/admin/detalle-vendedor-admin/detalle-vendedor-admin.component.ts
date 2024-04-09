import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-vendedor-admin',
  templateUrl: './detalle-vendedor-admin.component.html',
  styleUrls: ['./detalle-vendedor-admin.component.css']
})
export class DetalleVendedorAdminComponent implements OnInit {

  //Paginacion
  page: number = 0;
  pages: number = 0;
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  cantidad: any = 10;

  //Atributos
  vendedor: any;
  idVendedor: any;
  listaClientes:any=[];
  listaOrdenes:any=[];

  constructor(private and: AndService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idVendedor = this.aRoute.snapshot.params['id'];
    this.and.obtenerVendedorById(this.idVendedor).subscribe(
      (data: any) => {
        this.vendedor = data.response;
      }
    );
  }

  listarClientesVendedor() {
    this.and.obtenerClientesVendedor(this.idVendedor,"idCliente",this.page,this.cantidad,this.sortDir).subscribe(
      (data:any)=>{
        this.listaClientes = data.content;
      }
    );
  }

  listarOrdenesVendedor(){
    this.and.obtenerOrdenByVendedor(this.idVendedor,"idOrdenVenta",this.page,this.cantidad,this.sortDir).subscribe(
      (data:any)=>{
        this.listaOrdenes = data.content;
      }
    );
  }
}
