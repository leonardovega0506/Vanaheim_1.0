import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-listar-ordenes-request-vendedor',
  templateUrl: './listar-ordenes-request-vendedor.component.html',
  styleUrls: ['./listar-ordenes-request-vendedor.component.css']
})
export class ListarOrdenesRequestVendedorComponent {
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
        this.router.navigate(['/admin/ordenes/request/' + data.response.idVendedor]);
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


  verImagen(ruta) {
    this.and.obtenerImageOrdenRequest(ruta).subscribe(
      (res: any) => {
        let objectURL = URL.createObjectURL(res);
        this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    );

  }
}
