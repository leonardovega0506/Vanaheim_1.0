import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-orden-request-admin',
  templateUrl: './listar-orden-request-admin.component.html',
  styleUrls: ['./listar-orden-request-admin.component.css']
})
export class ListarOrdenRequestAdminComponent implements OnInit {

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
  fecha: any;
  docNum: any
  image: any;

  constructor(private and: AndService, private router: Router, private sanitizer: DomSanitizer,private modal:NgbModal,private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.listarOrdenesRequest(this.page, this.cantidad, "idOrdenVenta", "asc");
  }

  buscarByDocNum() {
    this.and.obtenerOrdenRequestByDocNum(this.docNum).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/admin/ordenes/request/' + data.response.idVendedor]);
      }
    );
  }

  openModal(modal) {
    this.modal.open(modal);
  }

  openModalImagen(imagen,modal){
    this.modal.open(modal);
    this.verImagen(imagen);
  }

  listarOrdenesRequest(page: number, cantidad: any, orderBy: string, sortDir) {
    this.and.obtenerOrdenesRequest(orderBy, page, cantidad, sortDir).subscribe(
      (data: any) => {
        console.log(data);
        this.listaOrdenes = data.content;
        this.pages = Array.from({ length: data.totalPages }, (_, i) => i + 1);
        this.currentPage = data.numPage;
      }
    );
  }

  listarOrdenesRequestByFecha() {
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
    from(this.and.obtenerOrdenesRequestByFecha(date, "idOrdenVenta", this.page, this.cantidad, "asc")).subscribe(
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

  liberarOrden(idOrdenVenta, estatus) {
    if (estatus == "Cargado") {
      this.and.liberarOrdenReques(idOrdenVenta).subscribe(
        (data: any) => {
          console.log(data);
          this.ngOnInit();
        }
      );
    }
    else {

    }
  }

  verImagen(ruta) {
    this.and.obtenerImageOrdenRequest(ruta).subscribe(
      (res: any) => {
        let objectURL = URL.createObjectURL(res);
        this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    );

  }

  changePage(page: number) {
    if (page === -1 && this.paginationPage > 1) {
      this.paginationPage--;
      this.listarOrdenesRequest(this.paginationPage - 1, this.cantidad, "idOrdenVenta", "asc");
    } else if (page === +1 && this.paginationPage < this.pages.length) {
      this.paginationPage++;
      this.listarOrdenesRequest(this.paginationPage - 1, this.cantidad, "idOrdenVenta", "asc");
    } else if (page >= 1 && page <= this.pages.length) {
      this.paginationPage = page;
      this.listarOrdenesRequest(this.paginationPage - 1, this.cantidad, "idOrdenVenta", "asc");
    }
  }

}
