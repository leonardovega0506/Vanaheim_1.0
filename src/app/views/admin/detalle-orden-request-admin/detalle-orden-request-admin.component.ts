import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AndService } from 'src/app/services/api/and.service';
import Swal from 'sweetalert2';
import { catchError, from } from 'rxjs';

@Component({
  selector: 'app-detalle-orden-request-admin',
  templateUrl: './detalle-orden-request-admin.component.html',
  styleUrls: ['./detalle-orden-request-admin.component.css']
})
export class DetalleOrdenRequestAdminComponent implements OnInit{

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

}
