import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  
  @Input() seccion: any;
  TituloSeccion: string;
  ListaJuegos: any[];

  constructor() {
    this.TituloSeccion="";
    this.ListaJuegos = [];
   }

  ngOnInit(): void {
    this.TituloSeccion=this.seccion.nombre;
    this.ListaJuegos=this.seccion.juegos;
  }

}
