import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-orden-finanzas',
  templateUrl: './detalle-orden-finanzas.component.html',
  styleUrls: ['./detalle-orden-finanzas.component.css']
})
export class DetalleOrdenFinanzasComponent implements OnInit{
  idOrden: any;
  orden: any;
  u_estatusOV: any;

  constructor(private and: AndService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idOrden = this.aRoute.snapshot.params['id'];
    this.and.obtenerOrdenById(this.idOrden).subscribe(
      (data: any) => {
        this.orden = data.response;
      }
    );
  }

  actualizarEstatusOrden() {
    this.and.actalizarOrden(this.orden.docNum, this.u_estatusOV).subscribe(
      (data: any) => {
        console.log(data);
        this.ngOnInit();
      }
    );
  }
}
