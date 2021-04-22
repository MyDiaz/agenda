import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from '../../Models/contacto';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input() contacto:Contacto;
    

  constructor() { }

  ngOnInit(): void {
    
  }

}
