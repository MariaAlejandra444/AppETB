import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quest1PageRoutingModule } from './quest1-routing.module';

import { Quest1Page } from './quest1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quest1PageRoutingModule
  ],
  declarations: [Quest1Page]
})
export class Quest1PageModule {}
