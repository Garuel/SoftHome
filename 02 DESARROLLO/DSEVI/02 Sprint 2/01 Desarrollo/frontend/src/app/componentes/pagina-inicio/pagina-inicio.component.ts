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
      {nombre: "Novedades", juegos: [
        {nombre: "Among Us", developer: " Innersloth", imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {nombre: "Cyberpunk 2077", developer: "CD Projekt", imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {nombre: "Hollow Knight", developer: "Team Cherry", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {nombre: "Undertale", developer: "Toby Fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]}, 
      {nombre: "Destacados", juegos: [
        {nombre: "Among Us", developer: " Innersloth", imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {nombre: "Cyberpunk 2077", developer: "CD Projekt", imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {nombre: "Hollow Knight", developer: "Team Cherry", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {nombre: "Undertale", developer: "Toby Fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]}, 
      {nombre: "Preventa", juegos: [
        {nombre: "Among Us", developer: " Innersloth", imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {nombre: "Cyberpunk 2077", developer: "CD Projekt", imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {nombre: "Hollow Knight", developer: "Team Cherry", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {nombre: "Undertale", developer: "Toby Fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]}, 
      {nombre: "Desarrolladores", juegos: [
        {nombre: "Among Us", developer: " Innersloth", imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {nombre: "Cyberpunk 2077", developer: "CD Projekt", imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {nombre: "Hollow Knight", developer: "Team Cherry", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {nombre: "Undertale", developer: "Toby Fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]}, 
      {nombre: "Explorar por categoria", juegos: [
        {nombre: "RPG", developer: "", imageURL: "https://assets-global.website-files.com/5efc0159f9a97ba05a8b2902/5f337f9d5472f84f010a3672_welcome-to-rpg-maker-web.jpg"},
        {nombre: "FPS", developer: "", imageURL: "https://images.pushsquare.com/c54872d82e3c4/best-ps5-fps-games-guide-1.900x.jpg"},
        {nombre: "Free to play", developer: "", imageURL: "https://cdn.cloudflare.steamstatic.com/steam/apps/245550/header.jpg?t=1567844160"},
        {nombre: "Acceso anticipado", developer: "", imageURL: "https://st4.depositphotos.com/2274151/40704/v/600/depositphotos_407049358-stock-illustration-early-access-banner-template-ribbon.jpg"}
      ]},
    ];
    
  }

  ngOnInit(): void {
  }

}
