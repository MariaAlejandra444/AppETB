import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quest5PageRoutingModule } from './quest5-routing.module';

import { Quest5Page } from './quest5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quest5PageRoutingModule
  ],
  declarations: [Quest5Page]
})
export class Quest5PageModule {}
