import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviajePageRoutingModule } from './proviaje-routing.module';

import { ProviajePage } from './proviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviajePageRoutingModule
  ],
  declarations: [ProviajePage]
})
export class ProviajePageModule {}
