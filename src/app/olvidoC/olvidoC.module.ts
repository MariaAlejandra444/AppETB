import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidoCPageRoutingModule } from './olvidoC-routing.module';

import { OlvidoCPage } from './olvidoC.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidoCPageRoutingModule
  ],
  declarations: [OlvidoCPage]
})
export class OlvidoCPageModule {}