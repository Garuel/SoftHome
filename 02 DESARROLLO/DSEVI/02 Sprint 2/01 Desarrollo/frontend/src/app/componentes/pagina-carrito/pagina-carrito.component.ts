import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.component.html',
  styleUrls: ['./pagina-carrito.component.css']
})
export class PaginaCarritoComponent implements OnInit {
  
  carrito: any[];
  totalCompra: number;

  constructor(private carritoService: CarritoService) { 

    this.carrito = this.carritoService.recogerCarrito();
    this.totalCompra=this.calcularTotal();
       

  }

  calcularTotal():number{
    var total=0;
    for(var juego of this.carrito){
      total=total+juego["precio"];
    }
    return total;
  }

  sacarDelCarrito(gameid: number){

    var cuenta=0;
    var index=-1;

    for(var juego of this.carrito){
      
      if(Object.values(juego)[0]==gameid){
        index=cuenta;
      }
      cuenta=cuenta+1;
    }
    this.carrito.splice(index,1);
    this.carritoService.sacarDelCarrito(gameid);

    this.totalCompra=this.calcularTotal();

    
  }

  ngOnInit(): void {
  }
  
}
