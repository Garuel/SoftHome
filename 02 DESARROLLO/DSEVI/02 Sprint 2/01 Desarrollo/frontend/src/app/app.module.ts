import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { SeccionComponent } from './componentes/pagina-inicio/seccion/seccion.component';
import { PaginaDashboardComponent } from './componentes/pagina-dashboard/pagina-dashboard.component';
import { CardComponent } from './componentes/pagina-dashboard/card/card.component';
import { PaginaLoginComponent } from './componentes/pagina-login/pagina-login.component';
import { GamecardComponent } from './componentes/pagina-inicio/seccion/gamecard/gamecard.component';
import { PaginaCarritoComponent } from './componentes/pagina-carrito/pagina-carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaInicioComponent,
    SeccionComponent,
    PaginaDashboardComponent,
    CardComponent,
    PaginaLoginComponent,
    GamecardComponent,
    PaginaCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
