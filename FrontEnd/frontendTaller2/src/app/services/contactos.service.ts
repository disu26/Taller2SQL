import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contacts } from "../models/contact";
import { Global } from "./global";

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  public url!:String;

  constructor(
    private _http : HttpClient
  ) {
    this.url = Global.url
  }

  listarContactos() : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+"contacts",{headers:headers});
  }

  crearContacto( contact : Contacts) : Observable<any>{

    let params = JSON.stringify(contact);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+"contact",params,{headers:headers});

  }

  eliminarContacto(id: any) : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.delete(this.url+'contact/'+id,{headers:headers});

  }

  actualizarContacto(id: any, contact : Contacts ) : Observable<any>{

    let params = JSON.stringify(contact);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.url+'contact/'+id, params,{headers:headers});

  }

  actualizarNombreContacto(id: any, name: any) : Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.patch(this.url+'contact/name/'+id, name,{headers:headers});

  }

  actualizarTelefonoContacto(id: any, phone: any) : Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.patch(this.url+'contact/phone/'+id, phone,{headers:headers});

  }

  actualizarEmailContacto(id: any, email: any) : Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.patch(this.url+'contact/email/'+id, email,{headers:headers});

  }

  actualizarFechaNacimientoContacto(id: any, dateBirth: any) : Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.patch(this.url+'contact/dateBirth/'+id, dateBirth,{headers:headers});

  }

}
