import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { LoginService } from 'src/app/services/api-login/login.service';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-ordenes-request-vendedor',
  templateUrl: './listar-ordenes-request-vendedor.component.html',
  styleUrls: ['./listar-ordenes-request-vendedor.component.css']
})
export class ListarOrdenesRequestVendedorComponent {
  //Paginacion
  page: number = 0;
  paginationPage = 1;
  pages = [];
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  cantidad: any = 10;
  mostrarBotonNext: boolean;
  private columnaOrdenada: string = '';

  //Atributos
  listaOrdenes: any = [];
  fecha: any;
  docNum: any
  image: any;
  user: any;
  slpCode: any;
  vendedor: any;

  constructor(private and: AndService, private router: Router, private sanitizer: DomSanitizer, private modal: NgbModal, private datepipe: DatePipe, private login: LoginService) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
    this.slpCode = this.user.slpCode;
    this.listarOrdenesRequest(this.slpCode, this.page, this.cantidad, "idOrdenVenta", "asc");
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

  openModalImagen(imagen, modal) {
    this.modal.open(modal);
    this.verImagen(imagen);
  }

  listarOrdenesRequest(slpCode, page: number, cantidad: any, orderBy: string, sortDir) {
    this.and.obtenerVendedorBySlpCode(slpCode).subscribe(
      (data: any) => {
        this.vendedor = data.response;
        this.and.obtenerOrdenRequestByVendedor(this.vendedor.idVendedor, orderBy, page, cantidad, sortDir).subscribe(
          (data: any) => {
            this.listaOrdenes = data.content;
            this.pages = Array.from({ length: data.totalPages }, (_, i) => i + 1);
            this.currentPage = data.numPage;
            if (data.isLast) {
              this.mostrarBotonNext = false;
            } else {
              this.mostrarBotonNext = true;
            }
          }
        );
      }
    );
  }

  listarOrdenesRequestByFecha() {
    this.and.obtenerVendedorBySlpCode(this.slpCode).subscribe(
      (data: any) => {
        console.log(data);
        this.vendedor = data.response;
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
        from(this.and.obtenerOrdenRequestByVendedorDate(this.vendedor.idVendedor, "idOrdenVenta", this.page, this.cantidad, "asc,", date)).subscribe(
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
            if (data.isLast) {
              this.mostrarBotonNext = false;
            } else {
              this.mostrarBotonNext = true;
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
    );

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
      this.listarOrdenesRequest(this.slpCode, this.paginationPage - 1, this.cantidad, "idOrdenVenta", "asc");
    } else if (page === +1 && this.paginationPage < this.pages.length) {
      this.paginationPage++;
      this.listarOrdenesRequest(this.slpCode, this.paginationPage - 1, this.cantidad, "idOrdenVenta", "asc");
    } else if (page >= 1 && page <= this.pages.length) {
      this.paginationPage = page;
      this.listarOrdenesRequest(this.slpCode, this.paginationPage - 1, this.cantidad, "idOrdenVenta", "asc");
    }
  }

  isActivePage(page: number): boolean {
    return page === this.currentPage;
  }

  sortColumn(columna) {
    if (this.currentPage == 0) {
      this.listarOrdenesRequest(this.slpCode,this.currentPage, this.cantidad, columna, this.sortDir);
      if (this.columnaOrdenada === columna) {
        this.sortDir = !this.sortDir;
      } else {
        this.sortDir = true;
      }
      this.columnaOrdenada = columna;

      this.listarOrdenesRequest(this.slpCode,this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
    }
    else {
      this.listarOrdenesRequest(this.slpCode,this.currentPage - 1, this.cantidad, columna, this.sortDir);
      if (this.columnaOrdenada === columna) {
        this.sortDir = !this.sortDir;
      } else {
        this.sortDir = true;
      }
      this.columnaOrdenada = columna;
      this.listarOrdenesRequest(this.slpCode,this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
    }
  }
}
