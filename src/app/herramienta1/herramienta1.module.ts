import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Herramienta1PageRoutingModule } from './herramienta1-routing.module';

import { Herramienta1Page } from './herramienta1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Herramienta1PageRoutingModule
  ],
  declarations: [Herramienta1Page]
})
export class Herramienta1PageModule {}
