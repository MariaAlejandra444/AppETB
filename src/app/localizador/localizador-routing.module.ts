import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizadorPage } from './localizador.page';

const routes: Routes = [
  {
    path: '',
    component: LocalizadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalizadorPageRoutingModule {}
