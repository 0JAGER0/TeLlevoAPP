import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemascuentaPage } from './problemascuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemascuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemascuentaPageRoutingModule {}
