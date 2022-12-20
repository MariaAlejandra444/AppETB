import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaMal6PageRoutingModule } from './pagina-mal6-routing.module';

import { PaginaMal6Page } from './pagina-mal6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaMal6PageRoutingModule
  ],
  declarations: [PaginaMal6Page]
})
export class PaginaMal6PageModule {}
