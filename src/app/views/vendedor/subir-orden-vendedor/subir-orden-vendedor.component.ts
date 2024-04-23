import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-subir-orden-vendedor',
  templateUrl: './subir-orden-vendedor.component.html',
  styleUrls: ['./subir-orden-vendedor.component.css']
})
export class SubirOrdenVendedorComponent {

  docNum?: any;
  bancoCodigo: any;
  listaBancos: any = [];
  ordenTraida: any;
  imagenRequest: any;
  imagenURL: string;
  ordenRequest: any = {
    docNum: '',
    docTotal: 0,
    metodoPago: '',
    docDate: '',
    cardCode: '',
    cardName: '',
    comentarios: '',
    slpCode: '',
    slpName: '',
    bancoNombre: '',
    bancoCodigo: ''
  };
  constructor(private and: AndService,private aRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.aRoute.queryParams.subscribe(params => {
      if (params['parametro']) {
        const parametro = params['parametro'];
        this.docNum = parametro;
      }
    });
    this.traerBancos();
  }

  buscarOrdenByDocNum() {
    this.and.obtenerOrdenByDocNum(this.docNum).subscribe(
      (data: any) => {
        this.ordenTraida = data.response;
        this.ordenRequest.docNum = this.ordenTraida.docNum
        this.ordenRequest.docTotal = this.ordenTraida.docTotal
        this.ordenRequest.metodoPago = this.ordenTraida?.peyMethod;
        this.ordenRequest.docDate = this.ordenTraida?.docDate;
        this.ordenRequest.cardCode = this.ordenTraida?.cardCode;
        this.ordenRequest.slpCode = this.ordenTraida?.slpCode;
      }
    );
  }

  subirOrden() {
    let request = JSON.stringify(this.ordenRequest);
    this.and.subirOrden(this.imagenRequest, request).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  onFileSelected(event):void {
    const file: File = event.target.files[0];
    this.imagenRequest = file;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenURL = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  traerBancos() {
    this.and.obtenerBancos().subscribe(
      (data: any) => {
        this.listaBancos = data;
        this.ordenRequest.bancoNombre = this.listaBancos[0].acctName;
      }
    );
  }

  onBancoSeleccionado(event: any) {
    const nombreSeleccionado = event.target.value;
    const bancoSeleccionado = this.listaBancos.find(banco => banco.acctName === nombreSeleccionado);
    if (bancoSeleccionado) {
        this.ordenRequest.bancoCodigo = bancoSeleccionado.bankCode;
    }
  }
}
