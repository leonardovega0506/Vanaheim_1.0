import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-orden-finanzas',
  templateUrl: './listar-orden-finanzas.component.html',
  styleUrls: ['./listar-orden-finanzas.component.css']
})
export class ListarOrdenFinanzasComponent implements OnInit {


  //Paginacion
  page: number = 0;
  paginationPage = 1;
  pages = [];
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  cantidad: any = 10;

  //Atributos
  listaOrdenes: any = [];
  docNum: any;
  ref1: any;
  fecha: any;


  constructor(private and: AndService, private router: Router, private modal: NgbModal, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.listarOrdenes(this.page, this.cantidad, "idOrdenVenta", this.sortDir);
  }

  buscarOrdenByDocNum() {
    this.and.obtenerOrdenByDocNum(this.docNum).subscribe(
      (data: any) => {
        this.router.navigate(['/admin/ordenes/sap/' + data.response.idOrdenVenta]);
      }
    );
  }

  buscarOrdenByFactura() {
    this.and.obtenerOrdenByFactura(this.ref1).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/admin/ordenes/sap/' + data.response.idOrdenVenta]);
      }
    );
  }

  cargarPedido(docNum) {
    this.router.navigate(['/admin/ordenes/request/add'], { queryParams: { parametro: docNum } });
  }

  listarOrdenes(page: number, cantidad: any, orderBy: string, sortDir) {
    this.and.obtenerOrdenes(orderBy, page, cantidad, sortDir).subscribe(
      (data: any) => {
        this.listaOrdenes = data.content;
        this.pages = Array.from({ length: data.totalPages }, (_, i) => i + 1);
        this.currentPage = data.numPage;
      }
    );
  }

  listarOrdenesByFecha() {
    let date = this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
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
    from(this.and.obtenerOrdenesFecha(date, "idOrdenVenta", this.page, this.cantidad, "asc")).subscribe(
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

  openModal(modal) {
    this.modal.open(modal);
  }


  changePage(page: number) {
    if (page === -1 && this.paginationPage > 1) {
      this.paginationPage--;
      this.listarOrdenes(this.paginationPage - 1, this.cantidad, "idCliente", "asc");
    } else if (page === +1 && this.paginationPage < this.pages.length) {
      this.paginationPage++;
      this.listarOrdenes(this.paginationPage - 1, this.cantidad, "idCliente", "asc");
    } else if (page >= 1 && page <= this.pages.length) {
      this.paginationPage = page;
      this.listarOrdenes(this.paginationPage - 1, this.cantidad, "idCliente", "asc");
    }
  }

}
