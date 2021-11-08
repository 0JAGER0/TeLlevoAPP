import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },

  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },

  {
    path: 'ayuda',
    children:[
      {
        path: '',
        loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
      },
      {
        path: 'problemascuenta',
        loadChildren: () => import('./ayuda/problemascuenta/problemascuenta.module').then(m => m.ProblemascuentaPageModule)
      },
      {
        path: 'proviaje',
        loadChildren: () => import('./ayuda/proviaje/proviaje.module').then( m => m.ProviajePageModule)
      },
      {
        path: 'solicitarservi',
        loadChildren: () => import('./ayuda/solicitarservi/solicitarservi.module').then( m => m.SolicitarserviPageModule)
      }
    ]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pasajeros',
    loadChildren: () => import('./pasajeros/pasajeros.module').then( m => m.PasajerosPageModule)
  },
  {
    path: 'conductores',
    loadChildren: () => import('./conductores/conductores.module').then( m => m.ConductoresPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }