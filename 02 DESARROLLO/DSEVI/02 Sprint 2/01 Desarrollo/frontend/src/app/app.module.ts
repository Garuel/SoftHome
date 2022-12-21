import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { SeccionComponent } from './componentes/pagina-inicio/seccion/seccion.component';
import { PaginaDashboardComponent } from './componentes/pagina-dashboard/pagina-dashboard.component';
import { PaginaLoginComponent } from './componentes/pagina-login/pagina-login.component';
import { GamecardComponent } from './componentes/pagina-inicio/seccion/gamecard/gamecard.component';
import { PaginaCatalogoComponent } from './componentes/pagina-catalogo/pagina-catalogo.component';
import { PaginaCarritoComponent } from './componentes/pagina-carrito/pagina-carrito.component';

import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { FooterComponent } from './componentes/footer/footer.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaInicioComponent,
    SeccionComponent,
    PaginaDashboardComponent,
    PaginaLoginComponent,
    GamecardComponent,
    PaginaCarritoComponent,
    PaginaCatalogoComponent,
    CanvasJSChart,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
