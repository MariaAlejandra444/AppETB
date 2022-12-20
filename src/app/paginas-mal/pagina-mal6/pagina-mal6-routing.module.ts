import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaMal6Page } from './pagina-mal6.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaMal6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaMal6PageRoutingModule {}
