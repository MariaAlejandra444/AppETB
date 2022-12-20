import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaMal2Page } from './pagina-mal2.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaMal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaMal2PageRoutingModule {}
