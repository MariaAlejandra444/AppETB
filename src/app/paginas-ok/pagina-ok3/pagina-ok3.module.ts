import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaOk3PageRoutingModule } from './pagina-ok3-routing.module';

import { PaginaOk3Page } from './pagina-ok3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaOk3PageRoutingModule
  ],
  declarations: [PaginaOk3Page]
})
export class PaginaOk3PageModule {}
