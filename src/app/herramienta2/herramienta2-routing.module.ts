import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Herramienta2Page } from './herramienta2.page';

const routes: Routes = [
  {
    path: '',
    component: Herramienta2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Herramienta2PageRoutingModule {}
