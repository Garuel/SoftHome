import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
    var item;
    var keys = Object.keys(sessionStorage);
    for(var key in keys){
      item=JSON.parse(this.storage.getItem(keys[key].toString())!);      
      this.carrito.push(item);
    }
    return this.carrito;
  }
}
