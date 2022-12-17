import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quest4PageRoutingModule } from './quest4-routing.module';

import { Quest4Page } from './quest4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quest4PageRoutingModule
  ],
  declarations: [Quest4Page]
})
export class Quest4PageModule {}
