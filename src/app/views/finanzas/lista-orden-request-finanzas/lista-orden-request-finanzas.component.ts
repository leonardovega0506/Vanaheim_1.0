import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-lista-orden-request-finanzas',
  templateUrl: './lista-orden-request-finanzas.component.html',
  styleUrls: ['./lista-orden-request-finanzas.component.css']
})
export class ListaOrdenRequestFinanzasComponent implements OnInit{
    //Paginacion
    page: number = 0;
    pages: number = 0;
    pageActual: number = 0;
    currentPage: number = 1;
    sortDir: boolean = true;
    cantidad: any = 10;
  
    //Atributos
    listaOrdenes: any = [];
    fecha: any;
    docNum: any
    image: any;
  
    constructor(private and: AndService, private router: Router, private sanitizer: DomSanitizer) { }
  
    ngOnInit(): void {
      this.listarOrdenesRequest(this.page, this.cantidad, "idOrdenVenta", "asc");
    }
  
    buscarByDocNum() {
      this.and.obtenerOrdenRequestByDocNum(this.docNum).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/finanzas/ordenes/request/' + data.response.idVendedor]);
        }
      );
    }
  
    listarOrdenesRequest(page: number, cantidad: any, orderBy: string, sortDir) {
      this.and.obtenerOrdenesRequest(orderBy, page, cantidad, sortDir).subscribe(
        (data: any) => {
          console.log(data);
          this.listaOrdenes = data.content;
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
}
