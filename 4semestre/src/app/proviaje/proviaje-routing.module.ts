import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviajePage } from './proviaje.page';

const routes: Routes = [
  {
    path: '',
    component: ProviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviajePageRoutingModule {}
