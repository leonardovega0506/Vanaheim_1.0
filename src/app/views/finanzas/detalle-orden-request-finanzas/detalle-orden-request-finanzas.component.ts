import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-orden-request-finanzas',
  templateUrl: './detalle-orden-request-finanzas.component.html',
  styleUrls: ['./detalle-orden-request-finanzas.component.css']
})
export class DetalleOrdenRequestFinanzasComponent {
  
  idRequest:any;
  ordenVenta:any;
  imagen:any;

  constructor(private and:AndService,private aRoute:ActivatedRoute,private sanitizer: DomSanitizer){}

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
}
