import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainJuegoPageRoutingModule } from './mainJuego-routing.module';

import { MainJuegoPage } from './mainJuego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainJuegoPageRoutingModule
  ],
  declarations: [MainJuegoPage]
})
export class MainJuegoPageModule {}
