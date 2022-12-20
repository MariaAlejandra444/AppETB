import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainJuegoPage } from './mainJuego.page';

const routes: Routes = [
  {
    path: '',
    component: MainJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainJuegoPageRoutingModule {}
