import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaMal4Page } from './pagina-mal4.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaMal4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaMal4PageRoutingModule {}
