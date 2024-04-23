import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-vendedor-admin',
  templateUrl: './detalle-vendedor-admin.component.html',
  styleUrls: ['./detalle-vendedor-admin.component.css']
})
export class DetalleVendedorAdminComponent implements OnInit {

  //Paginacion
  page:number=0;
  paginationPage = 1;
  pages = [];
  pageActual:number=0;
  currentPage:number=1;
  sortDir:boolean = true;
  cantidad:any=10;
  tablaOrdenes:boolean=false;
  tablaClientes:boolean=false;

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
      Swal.fire({
        title: 'Obteniendo',
        text: 'Por favor espere',
        didOpen: () => {
          Swal.showLoading();
        },
        imageUrl: '/assets/esperando.png',
        imageWidth: 450,
        imageHeight: 400,
        imageAlt: 'Esperando'
      });
      from(this.and.obtenerClientesVendedor(this.idVendedor,"idCliente",this.page,this.cantidad,this.sortDir)).subscribe(
        (data: any) => {
          Swal.fire({
            icon:'success',
            title:'Exito',
            text:'Exito al obtener los clientes',
            showConfirmButton:true,
            confirmButtonColor:'#3A68DE',
            timer:2500,
            customClass:{
              title:'my-custom-title',
            }
          });
          this.listaClientes = data.content;
          this.pages = Array.from({ length: data.totalPages }, (_, i) => i + 1);
          this.currentPage = data.numPage;
          if (this.listaOrdenes.length > 0) {
            this.tablaOrdenes = false;
            this.tablaClientes = true;
          }
        },
        (error)=>{
          console.log(error);
          Swal.close();
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al obtener clientes',
            showConfirmButton:true,
            confirmButtonColor:'#3AD0DE',
            timer: 3000
          });
        }
      );
    
  }

  listarOrdenesVendedor(){
      Swal.fire({
        title: 'Obteniendo',
        text: 'Por favor espere',
        didOpen: () => {
          Swal.showLoading();
        },
        imageUrl: '/assets/esperando.png',
        imageWidth: 450,
        imageHeight: 400,
        imageAlt: 'Esperando'
      });
      from(this.and.obtenerOrdenByVendedor(this.idVendedor,"idOrdenVenta",this.page,this.cantidad,this.sortDir)).subscribe(
        (data: any) => {
          Swal.fire({
            icon:'success',
            title:'Exito',
            text:'Exito al obtener ordenes',
            showConfirmButton:true,
            confirmButtonColor:'#3A68DE',
            timer:2500,
            customClass:{
              title:'my-custom-title',
            }
          });
          this.listaOrdenes = data.content;
          this.pages = Array.from({ length: data.totalPages }, (_, i) => i + 1);
          this.currentPage = data.numPage;
          if (this.listaOrdenes.length > 0) {
            this.tablaOrdenes = true;
            this.tablaClientes = false;
          }
        },
        (error)=>{
          console.log(error);
          Swal.close();
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al obtener ordenes',
            showConfirmButton:true,
            confirmButtonColor:'#3AD0DE',
            timer: 3000
          });
        }
      );
    }



  changePage(page: number) {
    if (page === -1 && this.paginationPage > 1) {
      this.paginationPage--;
      this.and.obtenerOrdenesCliente(this.idVendedor,"idOrdenVenta",this.paginationPage-1,this.cantidad,"asc");
    } else if (page === +1 && this.paginationPage < this.pages.length) {
      this.paginationPage++;
      this.and.obtenerOrdenesCliente(this.idVendedor,"idOrdenVenta",this.paginationPage-1,this.cantidad,"asc");
    } else if (page >= 1 && page <= this.pages.length) {
      this.paginationPage = page;
      this.and.obtenerOrdenesCliente(this.idVendedor,"idOrdenVenta",this.paginationPage-1,this.cantidad,"asc");
    }
  }
}
