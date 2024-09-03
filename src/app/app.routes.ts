import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { FormularioOrdenarComponent } from './formulario-ordenar/formulario-ordenar.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'sobreNosotros',
    component: SobreNosotrosComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'ordenar',
    component: FormularioOrdenarComponent,
  },
];
