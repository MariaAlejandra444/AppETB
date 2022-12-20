import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaMal3Page } from './pagina-mal3.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaMal3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaMal3PageRoutingModule {}
