import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quest3PageRoutingModule } from './quest3-routing.module';

import { Quest3Page } from './quest3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quest3PageRoutingModule
  ],
  declarations: [Quest3Page]
})
export class Quest3PageModule {}
