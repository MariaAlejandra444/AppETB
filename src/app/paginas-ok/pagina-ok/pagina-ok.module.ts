import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaOkPageRoutingModule } from './pagina-ok-routing.module';

import { PaginaOkPage } from './pagina-ok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaOkPageRoutingModule
  ],
  declarations: [PaginaOkPage]
})
export class PaginaOkPageModule {}
