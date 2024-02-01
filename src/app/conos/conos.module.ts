import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConosPageRoutingModule } from './conos-routing.module';

import { ConosPage } from './conos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConosPageRoutingModule
  ],
  declarations: [ConosPage]
})
export class ConosPageModule {}
