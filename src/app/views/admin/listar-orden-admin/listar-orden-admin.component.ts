import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-listar-orden-admin',
  templateUrl: './listar-orden-admin.component.html',
  styleUrls: ['./listar-orden-admin.component.css']
})
export class ListarOrdenAdminComponent implements OnInit{

      //Paginacion
      page:number=0;
      pages:number=0;
      pageActual:number=0;
      currentPage:number=1;
      sortDir:boolean = true;
      cantidad:any=10;

      //Atributos
      listaOrdenes:any=[];
      docNum:any;
      ref1:any;
      fecha:any;


  constructor(private and:AndService,private router:Router){}

  ngOnInit(): void {
   this.listarOrdenes(this.page,this.cantidad,"idOrdenVenta",this.sortDir);
  }

  buscarOrdenByDocNum(){
    this.and.obtenerOrdenByDocNum(this.docNum).subscribe(
      (data:any)=>{
        this.router.navigate(['/admin/ordenes/sap/'+ data.response.idOrdenVenta]);
      }
    );
  }

  buscarOrdenByFactura(){
    this.and.obtenerOrdenByFactura(this.ref1).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigate(['/admin/ordenes/sap/'+ data.response.idOrdenVenta]);
      }
    );
  }

  listarOrdenes(page: number, cantidad: any, orderBy: string, sortDir){
    this.and.obtenerOrdenes(orderBy,page,cantidad,sortDir).subscribe(
      (data:any)=>{
        this.listaOrdenes = data.content;
      }
    );
  }

  listarOrdenesByFecha(){
    this.and.obtenerOrdenesFecha(this.fecha,"idOrdenVenta",this.page,this.cantidad,"asc").subscribe(
      (data:any)=>{
        this.listaOrdenes = data.content;
      }
    );  
  }



}
