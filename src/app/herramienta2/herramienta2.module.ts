import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Herramienta2PageRoutingModule } from './herramienta2-routing.module';

import { Herramienta2Page } from './herramienta2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Herramienta2PageRoutingModule
  ],
  declarations: [Herramienta2Page]
})
export class Herramienta2PageModule {}
