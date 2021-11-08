import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarserviPage } from './solicitarservi.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarserviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarserviPageRoutingModule {}
