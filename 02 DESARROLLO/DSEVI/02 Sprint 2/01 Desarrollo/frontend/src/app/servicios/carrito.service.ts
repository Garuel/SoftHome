import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  storage: Storage;
  carrito: any[];

  constructor() { 
    this.carrito=[];
    this.storage = window.sessionStorage;
  }

  sacarDelCarrito(index:number){
    let key = index.toString();
    this.storage.removeItem(key);
  }

  mandarAlCarrito(juego: any):void{
    let key = juego["id"];
    this.storage.setItem(key.toString(), JSON.stringify(juego));
    
  }

  recogerCarrito(): any[] {
    let item;
    for(var i=0; i<this.storage.length;i++ ){
      
      item=JSON.parse(this.storage.getItem((i+1).toString())!);
      
      this.carrito.push(item);
    }
    return this.carrito;
  }
}
