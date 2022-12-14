import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCatalogoComponent } from './componentes/pagina-catalogo/pagina-catalogo.component';
import { PaginaDashboardComponent } from './componentes/pagina-dashboard/pagina-dashboard.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { PaginaLoginComponent } from './componentes/pagina-login/pagina-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: PaginaInicioComponent },
  { path: 'dashboard', component: PaginaDashboardComponent },
  { path: 'login', component: PaginaLoginComponent },
  { path: 'catalogo', component: PaginaCatalogoComponent, },
  { path: 'catalogo/:categoria', component: PaginaCatalogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
