import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  
  @Input() tituloSeccion: String;
  constructor() {
    this.tituloSeccion="Titulo predefinido";
   }

  ngOnInit(): void {
  }

}
