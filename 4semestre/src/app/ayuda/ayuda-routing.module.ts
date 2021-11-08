import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudaPage } from './ayuda.page';
import { SolicitarserviPage } from './solicitarservi/solicitarservi.page';

const routes: Routes = [
  {
    path: '',
    component: AyudaPage
  },
  {
    path: 'problemascuenta',
    loadChildren: () => import('./problemascuenta/problemascuenta-routing.module').then(m => m.ProblemascuentaPageRoutingModule)
  },
  {
    path: 'proviaje',
    loadChildren: () => import('./proviaje/proviaje-routing.module').then(m => m.ProviajePageRoutingModule)
  },
  {
    path: 'solicitarservi',
    loadChildren: () => import('./solicitarservi/solicitarservi-routing.module').then(m => m.SolicitarserviPageRoutingModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudaPageRoutingModule {}
