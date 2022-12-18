import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaOk2PageRoutingModule } from './pagina-ok2-routing.module';

import { PaginaOk2Page } from './pagina-ok2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaOk2PageRoutingModule
  ],
  declarations: [PaginaOk2Page]
})
export class PaginaOk2PageModule {}
