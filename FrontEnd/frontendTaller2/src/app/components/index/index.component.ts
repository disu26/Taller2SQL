import { Component, OnInit } from '@angular/core';
import { ContactosService } from "../../services/contactos.service";
import { Contacts } from "../../models/contact";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ContactosService]
})
export class IndexComponent implements OnInit {

  public contacts! : Contacts[];
  public contact! : Contacts;
  public switch : any;

  constructor(
    private _contactosService : ContactosService,
  private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.listarContactos();
  }

  listarContactos(){

    this._contactosService.listarContactos().subscribe(
      response => {
          this.contacts = response;

      },error =>{
        console.log(error);
      }
    )

  }

  borrarContacto(id:any){
    Swal.fire({
      title: '¿Esta Seguro que desea eliminar este contacto?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._contactosService.eliminarContacto(id).subscribe(
          response =>{
            Swal.fire('Eliminado!', '', 'success')
          },error =>{
            console.log(error);
        }
      )

      } else if (result.isDenied) {
        Swal.fire('Contacto No Eliminado', '', 'info')
      }
    })

  }

  actualizarNombreBandera(){

    this.switch = "ActualizarNombre" ;

  }

  ActualizarNombre(event :any , id :any){
    this.contact = new Contacts('',event.target.value,'','','')
    this._contactosService.actualizarNombreContacto(id , this.contact ).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Nombre Actualizado Exitosamente ',
          showConfirmButton: false,
          timer: 2000
        });
        location.reload();
        this.switch = false;

      },error =>{
        console.log(error)
    }
    )
  }

  actualizarTelefonoBandera(){

    this.switch = "ActualizarTelefono" ;

  }

  ActualizarTelefono(event :any , id :any){
    this.contact = new Contacts('','',event.target.value,'','')
    this._contactosService.actualizarTelefonoContacto(id , this.contact ).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Telefono Actualizado Exitosamente ',
          showConfirmButton: false,
          timer: 3000
        });
        location.reload();
        this.switch = false;

      },error =>{
        console.log(error)
      }
    )
  }

  actualizarEmailBandera(){

    this.switch = "ActualizarEmail" ;

  }

  ActualizarEmail(event :any , id :any){
    this.contact = new Contacts('','','',event.target.value,'')
    this._contactosService.actualizarEmailContacto(id , this.contact ).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Email Actualizado Exitosamente ',
          showConfirmButton: false,
          timer: 3000
        });
        location.reload();
        this.switch = false;

      },error =>{
        console.log(error)
      }
    )
  }

  actualizarFechaNacimientoBandera(){

    this.switch = "ActualizarFechaNacimiento" ;

  }

  ActualizarFechaNacimiento(event :any , id :any){
    this.contact = new Contacts('','','','',event.target.value)
    this._contactosService.actualizarFechaNacimientoContacto(id , this.contact ).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Fecha de Nacimiento Actualizada Exitosamente ',
          showConfirmButton: false,
          timer: 3000
        });
        location.reload();
        this.switch = false;

      },error =>{
        console.log(error)
      }
    )
  }
}
