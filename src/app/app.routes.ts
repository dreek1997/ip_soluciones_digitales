import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { NuestroServicioComponent } from './nuestro-servicio/nuestro-servicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [
  {
    path:'',
    component: PageComponent
  },
  {
    path:'home',
    component: PageComponent
  },
  {
    path:'quienes_somos',
    component: QuienesSomosComponent
  },
  {
    path:'servicio',
    component: NuestroServicioComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];
