import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-orden-request-finanzas',
  templateUrl: './detalle-orden-request-finanzas.component.html',
  styleUrls: ['./detalle-orden-request-finanzas.component.css']
})
export class DetalleOrdenRequestFinanzasComponent {
  idRequest:any;
  ordenVenta:any;
  imagen:any;

  constructor(private and:AndService,private aRoute:ActivatedRoute,private sanitizer: DomSanitizer,private modal:NgbModal){}

  ngOnInit(): void {
   this.idRequest = this.aRoute.snapshot.params['id'];
   this.and.obtenerOrdenRequesById(this.idRequest).subscribe(
    (data:any)=>{
      this.ordenVenta= data.response;
      console.log(data);
      this.verImagen(this.ordenVenta.imagen);
    }
   );
  }

  verImagen(ruta) {
    this.and.obtenerImageOrdenRequest(ruta).subscribe(
      (res: any) => {
        let objectURL = URL.createObjectURL(res);
        this.imagen = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    );

  }

  openModalImagen(imagen,modal){
    this.modal.open(modal);
    this.verImagen(imagen);
  }
  liberarOrden(idOrdenVenta, estatus) {
    if (estatus == "Cargado") {
        Swal.fire({
          title: 'Liebrado',
          text: 'Por favor espere',
          didOpen: () => {
            Swal.showLoading();
          },
          imageUrl: '/assets/esperando.png',
          imageWidth: 450,
          imageHeight: 400,
          imageAlt: 'Liberando'
        });
        from(this.and.liberarOrdenReques(idOrdenVenta)).subscribe(
          (data: any) => {
            Swal.fire({
              icon:'success',
              title:'Exito',
              text:'Exito al Liberar',
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
              text: 'Error al liberar',
              showConfirmButton:true,
              confirmButtonColor:'#3AD0DE',
              timer: 3000
            });
          }
        );
      }

  }
}
