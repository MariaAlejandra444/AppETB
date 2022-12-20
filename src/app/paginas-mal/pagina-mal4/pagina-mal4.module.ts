import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaMal4PageRoutingModule } from './pagina-mal4-routing.module';

import { PaginaMal4Page } from './pagina-mal4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaMal4PageRoutingModule
  ],
  declarations: [PaginaMal4Page]
})
export class PaginaMal4PageModule {}
