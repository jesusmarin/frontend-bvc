import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { EventosComponent } from './componentes/eventos/eventos.component';
import { FormRegistroComponent } from './componentes/form-registro/form-registro.component';
 import { PlatformaComponent } from './componentes/platforma/platforma.component';
 import { RegistroEventosComponent } from './componentes/registro-eventos/registro-eventos.component';
 import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
   {
     path:'inicio',
     component: DashboardComponent
   },
   {
    path:'platforms',
    component: PlatformaComponent
  },
   {
     path:'events',
     component: EventosComponent
  },
  {
   path:'event-register',
   component: RegistroEventosComponent
   },
  {
   path:'form-register',
   component: FormRegistroComponent
   },
   {
    path:'**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
