import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaMal5PageRoutingModule } from './pagina-mal5-routing.module';

import { PaginaMal5Page } from './pagina-mal5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaMal5PageRoutingModule
  ],
  declarations: [PaginaMal5Page]
})
export class PaginaMal5PageModule {}
