import { Component, OnInit } from '@angular/core';
import { ContactosService } from "../../services/contactos.service";
import { Contacts } from "../../models/contact";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css'],
  providers:[ContactosService]
})
export class CrearContactoComponent implements OnInit {

  public title = "Crear Contactos";
  public contact!: Contacts ;

  constructor(
    private _contactosService : ContactosService,
    private _route: ActivatedRoute
  ) {
    this.contact = new Contacts('','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form : any){
    //Crear Contacto

    this._contactosService.crearContacto(this.contact).subscribe(
      response =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Información guardada exitosamente ',
          showConfirmButton: false,
          timer: 2000
        });

        form.reset();


      }, error => {
        console.log(error);

    }
    )

  }

}
