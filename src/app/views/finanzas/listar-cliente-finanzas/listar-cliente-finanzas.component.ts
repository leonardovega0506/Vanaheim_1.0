import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-listar-cliente-finanzas',
  templateUrl: './listar-cliente-finanzas.component.html',
  styleUrls: ['./listar-cliente-finanzas.component.css']
})
export class ListarClienteFinanzasComponent implements OnInit{

  //Paginacion
  page: number = 0;
  paginationPage = 1;
  pages = [];
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  cantidad: any = 10;
  mostrarBotonNext: boolean;
  paginacionTrue: boolean = false;
  private columnaOrdenada: string = '';

  //Parametros
  cardName: any;
  cardCode: any;
  listaClientes: any = [];

  constructor(private and: AndService, private router: Router, private modal: NgbModal) { }

  ngOnInit(): void {
    this.listarClientes(this.page, this.cantidad, "idCliente", "asc");
  }

  changePage(page: number) {
    if (page === -1 && this.paginationPage > 1) {
      this.paginationPage--;
      this.listarClientes(this.paginationPage - 1, this.cantidad, "idCliente", "asc");
    } else if (page === +1 && this.paginationPage < this.pages.length) {
      this.paginationPage++;
      this.listarClientes(this.paginationPage - 1, this.cantidad, "idCliente", "asc");
    } else if (page >= 1 && page <= this.pages.length && page !== this.paginationPage) {
      this.paginationPage = page;
      this.listarClientes(this.paginationPage - 1, this.cantidad, "idCliente", "asc");
    }
  }

  buscarClienteByCardCode() {
    this.and.obtenerClienteByCardCode(this.cardCode).subscribe(
      (data: any) => {
        console.log(data.response);
        this.router.navigate(['/finanzas/clientes/' + data.response.idCliente]);
      }
    );
  }



  openModal(modal) {
    this.modal.open(modal);
  }

  listarClientes(page: number, cantidad: any, orderBy: string, sortDir) {
    this.and.obtenerClientes(page, cantidad, orderBy, sortDir).subscribe(
      (data: any) => {
        this.listaClientes = data.content;
        this.pages = Array.from({ length: data.totalPages }, (_, i) => i + 1);
        this.currentPage = data.numPage;
        this.paginacionTrue = true;
        if (data.isLast) {
          this.mostrarBotonNext = false;
        } else {
          this.mostrarBotonNext = true;
        }
      }
    );

  }

  listarClientesNombre(): void {
    if (!this.cardName.trim()) {
      this.listarClientes(this.page, this.cantidad, "idCliente", "asc");
    } else {
      this.and.obtenerClientesLikeCardName(this.cardName).subscribe(
        (data: any) => {
          this.listaClientes = data.content;
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
  }

  sortColumn(columna) {
    if (this.currentPage == 0) {
      this.listarClientes(this.currentPage, this.cantidad, columna, this.sortDir);
      if (this.columnaOrdenada === columna) {
        this.sortDir = !this.sortDir;
      } else {
        this.sortDir = true;
      }
      this.columnaOrdenada = columna;

      this.listarClientes(this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
    }
    else {
      this.listarClientes(this.currentPage - 1, this.cantidad, columna, this.sortDir);
      if (this.columnaOrdenada === columna) {
        this.sortDir = !this.sortDir;
      } else {
        this.sortDir = true;
      }
      this.columnaOrdenada = columna;
      this.listarClientes(this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
    }
  }
}
