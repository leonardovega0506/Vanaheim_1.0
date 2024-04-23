import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-cliente-vendedor',
  templateUrl: './detalle-cliente-vendedor.component.html',
  styleUrls: ['./detalle-cliente-vendedor.component.css']
})
export class DetalleClienteVendedorComponent {
  idCliente: any;
  cliente: any;
  listaOrdenes: any = [];

  //Paginacion
  page: number = 0;
  paginationPage = 1;
  pages = [];
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  cantidad: any = 10;
  tabla: boolean = false;

  constructor(private and: AndService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCliente = this.aRoute.snapshot.params['id'];
    this.and.obtenerClienteById(this.idCliente).subscribe(
      (data: any) => {
        this.cliente = data.response;
      }
    );
  }


  obtenerOrdenesCliente() {
    Swal.fire({
      title: 'Buscando',
      text: 'Por favor espere',
      didOpen: () => {
        Swal.showLoading();
      },
      imageUrl: '/assets/esperando.png',
      imageWidth: 450,
      imageHeight: 400,
      imageAlt: 'Trayendo ordenes'
    });
    from(this.and.obtenerOrdenesCliente(this.idCliente, "idOrdenVenta", this.page, this.cantidad, "asc")).subscribe(
      (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'Exito al Traer ordenes',
          showConfirmButton: true,
          confirmButtonColor: '#3A68DE',
          timer: 2500,
          customClass: {
            title: 'my-custom-title',
          }
        });
        this.listaOrdenes = data.content;
        this.pages = Array.from({ length: data.totalPages }, (_, i) => i + 1);
        this.currentPage = data.numPage;
        if (this.listaOrdenes.length > 0) {
          this.tabla = true;
        }
      },
      (error) => {
        console.log(error);
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al traer ordenes',
          showConfirmButton: true,
          confirmButtonColor: '#3AD0DE',
          timer: 3000
        });
      }
    );
  }

  changePage(page: number) {
    if (page === -1 && this.paginationPage > 1) {
      this.paginationPage--;
      this.and.obtenerOrdenesCliente(this.idCliente, "idOrdenVenta", this.paginationPage - 1, this.cantidad, "asc");
    } else if (page === +1 && this.paginationPage < this.pages.length) {
      this.paginationPage++;
      this.and.obtenerOrdenesCliente(this.idCliente, "idOrdenVenta", this.paginationPage - 1, this.cantidad, "asc");
    } else if (page >= 1 && page <= this.pages.length) {
      this.paginationPage = page;
      this.and.obtenerOrdenesCliente(this.idCliente, "idOrdenVenta", this.paginationPage - 1, this.cantidad, "asc");
    }
  }
}
