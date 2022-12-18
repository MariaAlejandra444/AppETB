import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quest6PageRoutingModule } from './quest6-routing.module';

import { Quest6Page } from './quest6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quest6PageRoutingModule
  ],
  declarations: [Quest6Page]
})
export class Quest6PageModule {}
