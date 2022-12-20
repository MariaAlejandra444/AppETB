import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaOk4PageRoutingModule } from './pagina-ok4-routing.module';

import { PaginaOk4Page } from './pagina-ok4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaOk4PageRoutingModule
  ],
  declarations: [PaginaOk4Page]
})
export class PaginaOk4PageModule {}
