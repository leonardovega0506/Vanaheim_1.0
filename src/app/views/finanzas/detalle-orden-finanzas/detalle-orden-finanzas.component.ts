import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-orden-finanzas',
  templateUrl: './detalle-orden-finanzas.component.html',
  styleUrls: ['./detalle-orden-finanzas.component.css']
})
export class DetalleOrdenFinanzasComponent implements OnInit{

  idOrden:any;
  orden:any;
  u_estatusOV:any;

  constructor(private and:AndService,private aRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.idOrden = this.aRoute.snapshot.params['id'];
    this.and.obtenerOrdenById(this.idOrden).subscribe(
      (data:any)=>{
        this.orden = data.response;
      }
    );
  }

  actualizarEstatusOrden(){
      Swal.fire({
        title: 'Actualizando',
        text: 'Por favor espere',
        didOpen: () => {
          Swal.showLoading();
        },
        imageUrl: '/assets/esperando.png',
        imageWidth: 450,
        imageHeight: 400,
        imageAlt: 'Actualizando'
      });
      from(this.and.actalizarOrden(this.orden.docNum,this.u_estatusOV)).subscribe(
        (data: any) => {
          Swal.fire({
            icon:'success',
            title:'Exito',
            text:'Exito al Actualizar',
            showConfirmButton:true,
            confirmButtonColor:'#3A68DE',
            timer:2500,
            customClass:{
              title:'my-custom-title',
            }
          });
          this.ngOnInit();
        },
        (error)=>{
          console.log(error);
          Swal.close();
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al ingresar',
            showConfirmButton:true,
            confirmButtonColor:'#3AD0DE',
            timer: 3000
          });
        }
      );
    }
}
