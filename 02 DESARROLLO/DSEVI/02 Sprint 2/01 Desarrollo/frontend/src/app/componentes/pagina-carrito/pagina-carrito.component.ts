import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.component.html',
  styleUrls: ['./pagina-carrito.component.css']
})
export class PaginaCarritoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  juegos = [
    {'nombre':"Doom",'precio':'120',imagen:"https://bit.ly/3j2W4AS"},
    {'nombre':"God of War",'precio':'130',imagen:"https://bit.ly/3j5jVzG"},
    {'nombre':"Call of Duty",'precio':'110',imagen:".https://acortar.link/KYovFP"}
  ];
  
}
