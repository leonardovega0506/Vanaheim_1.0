import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../util/helper';

@Injectable({
  providedIn: 'root'
})
export class AndService {

  baseAnd:string= `${baseUrl}`;
  
  constructor(private http:HttpClient) { }
  
  /* ++Clientes++ */
  public obtenerClientes(pageNumber:any,pageSize:any,orderBy:any,sortDir:any){
    return this.http.get(this.baseAnd+"/cliente?orderBy="+orderBy+"&pageNo="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerClienteByCardCode(cardCode:any){
    return this.http.get(this.baseAnd+"/cliente/cardCode?cardCode="+cardCode);
  }

  public obtenerClientesLikeCardName(cardName){
    return this.http.get(this.baseAnd+"/cliente/cardName?cardName="+cardName);
  }

  public obtenerClienteById(id:any){
    return this.http.get(this.baseAnd+"/cliente/id/"+id);
  }

  public obtenerOrdenesCliente(id:any,orderBy:any,pageNumber:any,pageSize:any,sortDir:any){
    return this.http.get(this.baseAnd+"/cliente/orden-venta/"+id+"?orderBy="+orderBy+"&pageNo="+pageNumber+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  /* ++Orden Venta++ */
  public obtenerOrdenes(orderBy:any,pageNo:any,pageSize:any,sortDir:any){
    return this.http.get(this.baseAnd+"/orden?orderBy="+orderBy+"&pageNo="+pageNo+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerOrdenByDocNum(docNum:any){
    return this.http.get(this.baseAnd+"/orden/docNum?docNum="+docNum);
  }

  public actalizarOrden(docNum,estatus){
    return this.http.put(this.baseAnd+"/orden/estatus?docNum="+docNum+"&estatus="+estatus,docNum);
  }

  public obtenerOrdenesFecha(date,orderBy,pageNo,pageSize,sortDir){
    return this.http.get(this.baseAnd+"/orden/fecha?fecha="+date+"&orderBy="+orderBy+"&pageNo="+pageNo+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerOrdenById(id){
    return this.http.get(this.baseAnd+"/orden/id/"+id);
  }

  public obtenerOrdenByFactura(ref1){
    return this.http.get(this.baseAnd+"/orden/ref?ref1="+ref1);
  }

  /* ++Ordenes Request++ */
  public obtenerOrdenesRequest(orderBy,pageNo,pageSize,sortDir){
    return this.http.get(this.baseAnd+"/orden/sap?orderBy="+orderBy+"&pageNo="+pageNo+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerOrdenesRequestByFecha(date,orderBy,pageNo,pageSize,sortDir){
    return this.http.get(this.baseAnd+"/orden/sap/fecha?fecha="+date+"&orderBy="+orderBy+"&pageNo="+pageNo+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerOrdenRequestByDocNum(docNum){
    return this.http.get(this.baseAnd+"/orden/sap/docNum?docNum="+docNum);
  }

  public obtenerOrdenRequesById(idOrdenRequest){
    return this.http.get(this.baseAnd+"/orden/sap/id/"+idOrdenRequest);
  }

  public obtenerImageOrdenRequest(name){
    return this.http.get(this.baseAnd+"/orden/sap/imagen/?imageName="+name, {responseType: 'blob'});
  }

  public liberarOrdenReques(idOrdenRequest){
    return this.http.put(this.baseAnd+"/orden/sap/liberar-orden/"+idOrdenRequest,idOrdenRequest);
  }
  public subirOrden(img:File,request:string){
    const formData = new FormData();
    formData.append('img',img);
    formData.append('request',request);
    return this.http.post(this.baseAnd+"/orden/sap/subir-orden",formData);
  }

  /* ++Vendedores++ */
  public obtenerVendedores(orderBy,pageNo,pageSize,sortDir){
    return this.http.get(this.baseAnd+"/vendedor?orderBy=idVendedor&pageNo=0&pageSize=10&sortDir=asc");
  }

  public obtenerClientesVendedor(idVendedor,orderBy,pageNo,pageSize,sortDir){
    return this.http.get(this.baseAnd+"/vendedor/cliente?idVendedor="+idVendedor+"&orderBy="+orderBy+"&pageNo="+pageNo+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerVendedorById(idVendedor){
    return this.http.get(this.baseAnd+"/vendedor/idVendedor/"+idVendedor);
  }

  public obtenerVendedoresByName(nombre,orderBy,pageNo,pageSize,sortDir){
    return this.http.get(this.baseAnd+"/vendedor/nombre?nombre="+nombre+"&orderBy="+orderBy+"&pageNo="+pageNo+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerOrdenByVendedor(idVendedor,orderBy,pageNo,pageSize,sortDir){
    return this.http.get(this.baseAnd+"/vendedor/orden/?idVendedor="+idVendedor+"&orderBy="+orderBy+"&pageNo="+pageNo+"&pageSize="+pageSize+"&sortDir="+sortDir);
  }

  public obtenerVendedorBySlpCode(slpCode){
    return this.http.get(this.baseAnd+"/vendedor/slpCode?slpCode="+slpCode);
  }

  /* ++Bancos++ */
  public obtenerBancos(){
    return this.http.get("http://localhost:5248/midgard/bancos");
  }

  /* ++Usuarios++ */
  public listarUsuario(){
    return this.http.get(this.baseAnd + "/auth/usuarios");
  }

  public crearUsuario(form: any) {
    return this.http.post(this.baseAnd + "/auth/usuario?rol=" + form.area, form);
  }
  
}
