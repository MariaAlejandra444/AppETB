import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Herramienta1Page } from './herramienta1.page';

const routes: Routes = [
  {
    path: '',
    component: Herramienta1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Herramienta1PageRoutingModule {}
