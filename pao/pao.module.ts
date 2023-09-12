import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaoPageRoutingModule } from './pao-routing.module';

import { PaoPage } from './pao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaoPageRoutingModule
  ],
  declarations: [PaoPage]
})
export class PaoPageModule {}
