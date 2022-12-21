import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit {

  @Input() DatosJuego: any;
  nombre: string;
  developer: string;
  imageURL: string;

  constructor() {
    this.nombre="";
    this.developer="";
    this.imageURL="";
  }

  ngOnInit(): void {
    this.nombre=this.DatosJuego.nombre;
    this.developer=this.DatosJuego.developer;
    this.imageURL=this.DatosJuego.imageURL;
  }

}
