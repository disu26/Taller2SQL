import { Component, OnInit } from '@angular/core';
import { ContactosService } from "../../services/contactos.service";
import { Contacts } from "../../models/contact";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: '../crear-contacto/crear-contacto.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  public contact! : Contacts ;
  public title =" Actualizar Contacto";
  public id! : any ;

  constructor(
    private _contactosService : ContactosService,
    private _route: ActivatedRoute,
    private _router : Router
  ) {
    this.contact = new Contacts('','','','','');
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
         this.id = params['id'];
      }
    )
  }

  onSubmit(form : any){
    this._contactosService.actualizarContacto(this.id, this.contact).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Contacto Actualizado con exito',
          showConfirmButton: false,
          timer: 2000
        });
        this._router.navigate(['/Listar']);
      }, error => {
        console.log(error);
      }
    )

  }

}
