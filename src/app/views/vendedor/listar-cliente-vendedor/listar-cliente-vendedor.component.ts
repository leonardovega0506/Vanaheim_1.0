import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/api-login/login.service';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-listar-cliente-vendedor',
  templateUrl: './listar-cliente-vendedor.component.html',
  styleUrls: ['./listar-cliente-vendedor.component.css']
})
export class ListarClienteVendedorComponent {
  //Paginacion
  page:number=0;
  paginationPage = 1;
  pages = [];
  pageActual:number=0;
  currentPage:number=1;
  sortDir:boolean = true;
  cantidad:any=10;
  paginacionTrue: boolean = false;
  private columnaOrdenada: string = '';

  //Parametros
  cardName:any;
  cardCode:any;
  listaClientes:any=[];
  user:any;
  slpCode:any;
  vendedor:any;
  mostrarBotonNext:boolean;

  constructor(private and:AndService,private router:Router,private modal:NgbModal,private login:LoginService){}

  ngOnInit(): void {
    this.user = this.login.getUser();
    this.slpCode = this.user.slpCode;
    this.listarClientes(this.slpCode,this.page,this.cantidad,"idCliente","asc");
  }

  changePage(page: number) {
    if (page === -1 && this.paginationPage > 1) {
      this.paginationPage--;
      this.listarClientes(this.slpCode,this.paginationPage-1,this.cantidad,"idCliente","asc");
    } else if (page === +1 && this.paginationPage < this.pages.length) {
      this.paginationPage++;
      this.listarClientes(this.slpCode,this.paginationPage-1,this.cantidad,"idCliente","asc");
    } else if (page >= 1 && page <= this.pages.length) {
      this.paginationPage = page;
      this.listarClientes(this.slpCode,this.paginationPage-1,this.cantidad,"idCliente","asc");
    }
  }

  buscarClienteByCardCode(){
    this.and.obtenerClienteByCardCode(this.cardCode).subscribe(
      (data:any)=>{
        this.modal.dismissAll();
        this.router.navigate(['/vendedor/clientes/'+data.response.idCliente]);
      }
    );
  }

  

  openModal(modal){
    this.modal.open(modal);
  }

  listarClientes(slpCode,page: number, cantidad: any, orderBy: string, sortDir) {
     this.and.obtenerVendedorBySlpCode(this.slpCode).subscribe(
      (data:any)=>{
        this.vendedor = data.response;
        this.and.obtenerClientesVendedor(this.vendedor?.idVendedor,"idCliente",page,cantidad,sortDir).subscribe(
          (data:any)=>{
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
    );
  }

  listarClientesNombre(): void {
    if (!this.cardName.trim()) {
      this.listarClientes(this.slpCode,this.page,this.cantidad,"idCliente","asc");
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
      this.listarClientes(this.slpCode,this.currentPage, this.cantidad, columna, this.sortDir);
      if (this.columnaOrdenada === columna) {
        this.sortDir = !this.sortDir;
      } else {
        this.sortDir = true;
      }
      this.columnaOrdenada = columna;

      this.listarClientes(this.slpCode,this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
    }
    else {
      this.listarClientes(this.slpCode,this.currentPage - 1, this.cantidad, columna, this.sortDir);
      if (this.columnaOrdenada === columna) {
        this.sortDir = !this.sortDir;
      } else {
        this.sortDir = true;
      }
      this.columnaOrdenada = columna;
      this.listarClientes(this.slpCode,this.pageActual, this.cantidad, columna, this.sortDir ? 'asc' : 'desc');
    }
  }
}
