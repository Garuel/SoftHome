import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaDashboardComponent } from './componentes/pagina-dashboard/pagina-dashboard.component';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { PaginaLoginComponent } from './componentes/pagina-login/pagina-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: PaginaInicioComponent },
  { path: 'dashboard', component: PaginaDashboardComponent },
  { path: 'login', component: PaginaLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
