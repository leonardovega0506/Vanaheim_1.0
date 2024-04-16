import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-listar-cliente-vendedor',
  templateUrl: './listar-cliente-vendedor.component.html',
  styleUrls: ['./listar-cliente-vendedor.component.css']
})
export class ListarClienteVendedorComponent {
    //Paginacion
    page:number=0;
    pages:number=0;
    pageActual:number=0;
    currentPage:number=1;
    sortDir:boolean = true;
    cantidad:any=10;
  
    //Parametros
    cardName:any;
    cardCode:any;
    listaClientes:any=[];
  
    constructor(private and:AndService,private router:Router){}
  
    ngOnInit(): void {
      this.listarClientes(this.page,this.cantidad,"idCliente","asc");
    }
  
    buscarClienteByCardCode(){
      this.and.obtenerClienteByCardCode(this.cardCode).subscribe(
        (data:any)=>{
          console.log(data.response);
          this.router.navigate(['/admin/clientes/'+data.response.idCliente]);
  
        }
      );
    }
  
    listarClientes(page: number, cantidad: any, orderBy: string, sortDir: string) {
      this.and.obtenerClientes(page,cantidad,orderBy,sortDir).subscribe(
        (data:any)=>{
          this.listaClientes = data.content;
          console.log(this.listaClientes);
        }
      );
    }
  
    listarClientesNombre(){
      this.and.obtenerClientesLikeCardName(this.cardName).subscribe(
        (data:any)=>{
          console.log(data);
          this.listaClientes = data.content;
        }
      );
    }
}
