import { Component, OnInit } from '@angular/core';

/**
 * El componente "pagina-inicio" recibe los datos sobre las secciones (y sus juegos) que se mostraran en la pagina de inicio 
 * y les crea componentes "seccion" a cada una. 
 * En el componente "seccion" tenemos un titulo de la seccion y un conjunto de juegos (componentes "gamecard") mostrando 
 * el titulo, nombre del desarrollador y una imagen
 */


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  ListaSecciones: any[];
  
  constructor() {
    this.ListaSecciones = [
      {nombre: "Novedades", items: [
        {id:5,nombre: "Project Zomboid", developer: "The Indie Stone", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/108600/capsule_616x353.jpg?t=1667832656"},
        {id:6,nombre: "Northgard", developer: "Shiro Games", precio:50.00, tags: ['Accion y aventuras','Destacados', 'Mundo abierto'], imageURL: "https://open-sesame.games/wp-content/uploads/2020/06/Northgard_logo_white.jpg"},
        {id:7,nombre: "Counter-Strike: Global Offensive", developer: "Valve", tags: ['Accion y aventuras','Destacados', 'FPS'], precio:50.00, imageURL: "http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6"},
        {id:8,nombre: "VR Kanojo", developer: "Illusion", precio:50.00, tags: ['Rol','Destacados'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/751440/extras/616-353.jpg?t=1647323305"},
        ]}, 
      {nombre: "Destacados", items: [
        {id:1, nombre: "Among Us", developer: " Innersloth", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {id:2,nombre: "Cyberpunk 2077", developer: "CD Projekt", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {id:3,nombre: "Hollow Knight", developer: "Team Cherry", precio:50.00, tags: ['Accion y aventuras','Destacados', 'Arcade', ' Plataformas'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {id:4,nombre: "Undertale", developer: "Toby Fox", precio:50.00, tags: ['Rol','Destacados', ], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"},
      ]}, 
      {nombre: "Preventa", items: [
        {id:9,nombre: "Stray", developer: "BlueTwelve Studio", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://elcomercio.pe/resizer/INeX2zHD67UfVL0LU-PrwmR-JEI=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VBVJMAHFX5ABHJIBJIDNSBDVBU.jpeg"},
        {id:10,nombre: "Hades", developer: "Supergiant Games", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg?t=1670649855"},
        {id:11,nombre: "Terraria", developer: "Re-logic", precio:50.00, tags: ['Accion y aventuras','Destacados', 'Mundo abierto', 'Rol'], imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860"},
        {id:2,nombre: "Cyberpunk 2077", developer: "CD Projekt", precio:50.00, tags: ['Accion y aventuras','Destacados'], imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
      ]}, 
      {nombre: "Desarrolladores", items: [
        {nombre: " Innersloth", imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {nombre: "CD Projekt", imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {nombre: "Team Cherry", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {nombre: "Toby Fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]}, 
      {nombre: "Explorar por categoria", items: [
        {nombre: "RPG", imageURL: "https://assets-global.website-files.com/5efc0159f9a97ba05a8b2902/5f337f9d5472f84f010a3672_welcome-to-rpg-maker-web.jpg"},
        {nombre: "FPS", imageURL: "https://images.pushsquare.com/c54872d82e3c4/best-ps5-fps-games-guide-1.900x.jpg"},
        {nombre: "Free to play", imageURL: "https://cdn.cloudflare.steamstatic.com/steam/apps/245550/header.jpg?t=1567844160"},
        {nombre: "Acceso anticipado", imageURL: "https://st4.depositphotos.com/2274151/40704/v/600/depositphotos_407049358-stock-illustration-early-access-banner-template-ribbon.jpg"}
      ]},
    ];
    
  }

  ngOnInit(): void {
  }

}
