import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-detalle-orden-vendedor',
  templateUrl: './detalle-orden-vendedor.component.html',
  styleUrls: ['./detalle-orden-vendedor.component.css']
})
export class DetalleOrdenVendedorComponent {
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
}
