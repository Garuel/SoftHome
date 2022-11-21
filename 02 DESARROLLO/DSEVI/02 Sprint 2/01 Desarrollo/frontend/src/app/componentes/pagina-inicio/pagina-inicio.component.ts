import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  ArraySecciones: String[];
  constructor() {
    this.ArraySecciones = ["Novedades", "Destacados", "Preventa", "Desarrolladores", "Explorar por categoria"];
  }

  ngOnInit(): void {
  }

}
