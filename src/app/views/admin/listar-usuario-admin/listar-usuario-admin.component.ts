import { Component, OnInit } from '@angular/core';
import { AndService } from 'src/app/services/api/and.service';

@Component({
  selector: 'app-listar-usuario-admin',
  templateUrl: './listar-usuario-admin.component.html',
  styleUrls: ['./listar-usuario-admin.component.css']
})
export class ListarUsuarioAdminComponent implements OnInit {

  listaUsuario: any = [];
  usuarioData = {
    username: '',
    password: '',
    nombre: '',
    area: '',
    slpCode:''
  }

  constructor(private and:AndService){}

  ngOnInit(): void {
    this.rellenarUsuarios();
  }

  crearUsuario(){
    this.and.crearUsuario(this.usuarioData).subscribe(
      (data:any)=>{
        console.log(data); 
        this.limpiarDatos();
      }
    );
  }

  rellenarUsuarios(){
    this.and.listarUsuario().subscribe(
      (data:any)=>{
        console.log(data);
        this.listaUsuario = data;
      }
    );
  }

  limpiarDatos() {
    this.usuarioData.nombre = "";
    this.usuarioData.area = "";
    this.usuarioData.password = "";
    this.usuarioData.username = "";
    this.usuarioData.slpCode = "";
}


}
