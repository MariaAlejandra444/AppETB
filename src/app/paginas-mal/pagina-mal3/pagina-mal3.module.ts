import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaMal3PageRoutingModule } from './pagina-mal3-routing.module';

import { PaginaMal3Page } from './pagina-mal3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaMal3PageRoutingModule
  ],
  declarations: [PaginaMal3Page]
})
export class PaginaMal3PageModule {}
