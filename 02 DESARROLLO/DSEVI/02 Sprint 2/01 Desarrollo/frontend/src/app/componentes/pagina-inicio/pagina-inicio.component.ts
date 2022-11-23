import { Component, Input, OnInit } from '@angular/core';

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
        {nombre: "Undertale", developer: "toby fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]}, 
      {nombre: "Destacados", juegos: [
        {nombre: "Among Us", developer: " Innersloth", imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {nombre: "Cyberpunk 2077", developer: "CD Projekt", imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {nombre: "Hollow Knight", developer: "Team Cherry", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {nombre: "Undertale", developer: "toby fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]}, 
      {nombre: "Preventa", juegos: [
        {nombre: "Among Us", developer: " Innersloth", imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {nombre: "Cyberpunk 2077", developer: "CD Projekt", imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {nombre: "Hollow Knight", developer: "Team Cherry", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {nombre: "Undertale", developer: "toby fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]}, 
      {nombre: "Desarrolladores", juegos: [
        {nombre: "Among Us", developer: " Innersloth", imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {nombre: "Cyberpunk 2077", developer: "CD Projekt", imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {nombre: "Hollow Knight", developer: "Team Cherry", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {nombre: "Undertale", developer: "toby fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]}, 
      {nombre: "Explorar por categoria", juegos: [
        {nombre: "Among Us", developer: " Innersloth", imageURL: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AmongUs.jpg"},
        {nombre: "Cyberpunk 2077", developer: "CD Projekt", imageURL: "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg"},
        {nombre: "Hollow Knight", developer: "Team Cherry", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028"},
        {nombre: "Undertale", developer: "toby fox", imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/391540/capsule_616x353.jpg?t=1579096091"}
      ]},
    ];
    
  }

  ngOnInit(): void {
  }

}
