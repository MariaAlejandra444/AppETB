import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaMalPageRoutingModule } from './pagina-mal-routing.module';

import { PaginaMalPage } from './pagina-mal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaMalPageRoutingModule
  ],
  declarations: [PaginaMalPage]
})
export class PaginaMalPageModule {}
