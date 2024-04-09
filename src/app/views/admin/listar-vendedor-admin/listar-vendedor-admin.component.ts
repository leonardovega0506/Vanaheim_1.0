import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-listar-vendedor-admin',
  templateUrl: './listar-vendedor-admin.component.html',
  styleUrls: ['./listar-vendedor-admin.component.css']
})
export class ListarVendedorAdminComponent implements OnInit{

    //Paginacion
    page:number=0;
    pages:number=0;
    pageActual:number=0;
    currentPage:number=1;
    sortDir:boolean = true;
    cantidad:any=10;

    //Atributos
    listaVendedores:any=[];
    slpCode:any;
    slpName:any;

  constructor(private and:AndService,private router:Router){}

  ngOnInit(): void {
    this.listarVendedores(this.page,this.cantidad,"idVendedor","asc");
  }

  buscarVendedorBySlpCode(){
    console.log(this.slpCode);
    this.and.obtenerVendedorBySlpCode(this.slpCode).subscribe(
      (data:any)=>{
        this.router.navigate(['/admin/vendedores/'+data.response.idVendedor]);
      }
    );
  }

  listarVendedores(page: number, cantidad: any, orderBy: string, sortDir: string){
    this.and.obtenerVendedores(orderBy,page,cantidad,sortDir).subscribe(
      (data:any)=>{
        console.log(data);
        this.listaVendedores = data.content;
      }
    );
  }

  listarVendedoresByCardName(){
    this.and.obtenerVendedoresByName(this.slpName,"idVendedor",this.page,this.cantidad,"asc").subscribe(
      (data:any)=>{
        console.log(data);
        this.listaVendedores = data.content;
      }
    );
  }

}
