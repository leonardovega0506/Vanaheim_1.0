import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-cliente-vendedor',
  templateUrl: './detalle-cliente-vendedor.component.html',
  styleUrls: ['./detalle-cliente-vendedor.component.css']
})
export class DetalleClienteVendedorComponent {
  idCliente: any;
  cliente: any;
  listaOrdenes:any=[];

  //Paginacion
  page: number = 0;
  pages: number = 0;
  pageActual: number = 0;
  currentPage: number = 1;
  sortDir: boolean = true;
  cantidad: any = 10;

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
    console.log(this.idCliente)
    this.and.obtenerOrdenesCliente(this.idCliente, "idOrdenVenta", this.page, this.cantidad, "asc").subscribe(
      (data: any) => {
        console.log(data);
        this.listaOrdenes = data.content;
      }
    );
  }
}
