import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  
  @Input() seccion: any;
  TituloSeccion: string;
  ListaItems: any[];

  constructor() {
    this.TituloSeccion="";
    this.ListaItems = [];
   }

  ngOnInit(): void {
    this.TituloSeccion=this.seccion.nombre;
    this.ListaItems=this.seccion.items;
  }

}
