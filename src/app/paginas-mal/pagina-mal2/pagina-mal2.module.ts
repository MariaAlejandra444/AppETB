import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaMal2PageRoutingModule } from './pagina-mal2-routing.module';

import { PaginaMal2Page } from './pagina-mal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaMal2PageRoutingModule
  ],
  declarations: [PaginaMal2Page]
})
export class PaginaMal2PageModule {}
