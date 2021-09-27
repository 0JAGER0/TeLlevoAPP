import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarserviPageRoutingModule } from './solicitarservi-routing.module';

import { SolicitarserviPage } from './solicitarservi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarserviPageRoutingModule
  ],
  declarations: [SolicitarserviPage]
})
export class SolicitarserviPageModule {}
