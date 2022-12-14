import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina-catalogo',
  templateUrl: './pagina-catalogo.component.html',
  styleUrls: ['./pagina-catalogo.component.css']
})
export class PaginaCatalogoComponent implements OnInit {
  ListaJuegos: any[];
  categoria: string;


  constructor(private aRoute: ActivatedRoute) { 
    this.ListaJuegos=[
      {id:1, nombre: "Among Us", developer: " Innersloth", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
      {id:2,nombre: "Cyberpunk 2077", developer: "CD Projekt", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
      {id:3,nombre: "Hollow Knight", developer: "Team Cherry", precio:50.00, tags: ['Accion y aventuras','Destacados', 'Arcade', ' Plataformas'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
      {id:4,nombre: "Undertale", developer: "Toby Fox", precio:50.00, tags: ['Rol','Destacados', ], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"},
      {id:5,nombre: "Project Zomboid", developer: "The Indie Stone", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/108600/capsule_616x353.jpg?t=1667832656"},
      {id:6,nombre: "Northgard", developer: "Shiro Games", precio:50.00, tags: ['Accion y aventuras','Destacados', 'Mundo abierto'], imageURL: "https://open-sesame.games/wp-content/uploads/2020/06/Northgard_logo_white.jpg"},
      {id:7,nombre: "Counter-Strike: Global Offensive", developer: "Valve", tags: ['Accion y aventuras','Destacados', 'FPS'], precio:50.00, imageURL: "http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6"},
      {id:8,nombre: "VR Kanojo", developer: "Illusion", precio:50.00, tags: ['Rol','Destacados'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/751440/extras/616-353.jpg?t=1647323305"},
      {id:9,nombre: "Stray", developer: "BlueTwelve Studio", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://elcomercio.pe/resizer/INeX2zHD67UfVL0LU-PrwmR-JEI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VBVJMAHFX5ABHJIBJIDNSBDVBU.jpeg"},
      {id:10,nombre: "Hades", developer: "Supergiant Games", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg?t=1670649855"},
      {id:11,nombre: "Terraria", developer: "Re-logic", precio:50.00, tags: ['Accion y aventuras','Destacados', 'Mundo abierto', 'Rol'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860"}
    ]

    this.categoria=this.aRoute.snapshot.paramMap.get('categoria')!;
  
  }
  
  agregarCarrito(id:number){
      console.log(id);
  }
  
  ngOnInit(): void {
    
  }

}
