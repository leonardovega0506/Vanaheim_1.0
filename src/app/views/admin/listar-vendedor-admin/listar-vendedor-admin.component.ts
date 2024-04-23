import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-vendedor-admin',
  templateUrl: './listar-vendedor-admin.component.html',
  styleUrls: ['./listar-vendedor-admin.component.css']
})
export class ListarVendedorAdminComponent implements OnInit {

  //Paginacion
  page: number = 0;
  paginationPage = 1;
  pages = [];
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  cantidad: any = 10;
  mostrarBotonNext:any;
  private columnaOrdenada: string = '';

  //Atributos
  listaVendedores: any = [];
  slpCode: any;
  slpName: any;

  constructor(private and: AndService, private router: Router, private modal: NgbModal) { }

  ngOnInit(): void {
    this.listarVendedores(this.page, this.cantidad, "idVendedor", "asc");
  }

  buscarVendedorBySlpCode() {
    console.log(this.slpCode);

    Swal.fire({
      title: 'Buscando',
      text: 'Por favor espere',
      didOpen: () => {
        Swal.showLoading();
      },
      imageUrl: '/assets/esperando.png',
      imageWidth: 450,
      imageHeight: 400,
      imageAlt: 'Buscando'
    });
    from(this.and.obtenerVendedorBySlpCode(this.slpCode)).subscribe(
      (data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Exito',
          text: 'Exito al Buscar',
          showConfirmButton: true,
          confirmButtonColor: '#3A68DE',
          timer: 2500,
          customClass: {
            title: 'my-custom-title',
          }
        });
        this.router.navigate(['/admin/vendedores/' + data.response.idVendedor]);
        this.modal.dismissAll();
      },
      (error) => {
        console.log(error);
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al ingresar',
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


  listarVendedores(page: number, cantidad: any, orderBy: string, sortDir) {
    this.and.obtenerVendedores(orderBy, page, cantidad, sortDir).subscribe(
      (data: any) => {
        console.log(data);
        this.listaVendedores = data.content;
        this.pages = Array.from({length: data.totalPages}, (_, i) => i + 1);
        this.currentPage = data.numPage;
        if (data.isLast) {
          this.mostrarBotonNext = false; 
        } else {
          this.mostrarBotonNext = true; 
        }
      }
    );
  }

  listarVendedoresByCardName() {
    this.and.obtenerVendedoresByName(this.slpName, "idVendedor", this.page, this.cantidad, "asc").subscribe(
      (data: any) => {
        console.log(data);
        this.listaVendedores = data.content;
        this.pages = Array.from({length: data.totalPages}, (_, i) => i + 1);
        this.currentPage = data.numPage;
        if (data.isLast) {
          this.mostrarBotonNext = false; 
        } else {
          this.mostrarBotonNext = true; 
        }
      }
    );
  }

  changePage(page: number) {
    if (page === -1 && this.paginationPage > 1) {
      this.paginationPage--;
      this.listarVendedores(this.paginationPage - 1, this.cantidad, "idVendedor", "asc");
    } else if (page === +1 && this.paginationPage < this.pages.length) {
      this.paginationPage++;
      this.listarVendedores(this.paginationPage - 1, this.cantidad, "idVendedor", "asc");
    } else if (page >= 1 && page <= this.pages.length) {
      this.paginationPage = page;
      this.listarVendedores(this.paginationPage - 1, this.cantidad, "idVendedor", "asc");
    }
  }

  sortColumn(columna) {
    if (this.currentPage == 0) {
      this.listarVendedores(this.currentPage, this.cantidad, columna, this.sortDir);
      if (this.columnaOrdenada === columna) {
        this.sortDir = !this.sortDir;
      } else {
        this.sortDir = true;
      }
      this.columnaOrdenada = columna;

      this.listarVendedores(this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
    }
    else {
      this.listarVendedores(this.currentPage - 1, this.cantidad, columna, this.sortDir);
      if (this.columnaOrdenada === columna) {
        this.sortDir = !this.sortDir;
      } else {
        this.sortDir = true;
      }
      this.columnaOrdenada = columna;
      this.listarVendedores(this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
    }
  }

}
