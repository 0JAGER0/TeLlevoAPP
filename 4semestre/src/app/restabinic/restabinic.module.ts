import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestabinicPageRoutingModule } from './restabinic-routing.module';

import { RestabinicPage } from './restabinic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestabinicPageRoutingModule
  ],
  declarations: [RestabinicPage]
})
export class RestabinicPageModule {}
