import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalizadorPageRoutingModule } from './localizador-routing.module';

import { LocalizadorPage } from './localizador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizadorPageRoutingModule
  ],
  declarations: [LocalizadorPage]
})
export class LocalizadorPageModule {}
