import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../Models/contacto';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  
  contactos:Array<Contacto>;

  constructor() { }

  ngOnInit(): void {
    this.contactos = [
      new Contacto("Alejandra","Diaz","Calle 3 Carrera 4", "correo1@correo.com",3112345671,false,"https://cdn.icon-icons.com/icons2/1378/PNG/128/avatardefault_92824.png"),
      new Contacto("Pedro","Perez","Calle 3 Carrera 4", "correo2@correo.com",3112345672,true,"https://cdn.icon-icons.com/icons2/1378/PNG/128/avatardefault_92824.png"),
      new Contacto("Alicia","Benitez","Calle 3 Carrera 4", "correo3@correo.com",3112345673,false,"https://cdn.icon-icons.com/icons2/1378/PNG/128/avatardefault_92824.png")
    ]
  }



}
