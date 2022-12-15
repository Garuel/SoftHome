import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.component.html',
  styleUrls: ['./pagina-carrito.component.css']
})
export class PaginaCarritoComponent implements OnInit {
  
  carrito: any[];
  

  constructor(private carritoService: CarritoService) { 

    this.carrito = this.carritoService.recogerCarrito();
       

  }

  sacarDelCarrito(id: number){
    let index=this.carrito.indexOf({id:id});
    this.carrito.splice(index,1);
    this.carritoService.sacarDelCarrito(id);;
  }

  ngOnInit(): void {
  }
  
}
