import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaMal5Page } from './pagina-mal5.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaMal5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaMal5PageRoutingModule {}
