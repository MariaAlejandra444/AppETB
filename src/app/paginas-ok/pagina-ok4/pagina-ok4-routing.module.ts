import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaOk4Page } from './pagina-ok4.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaOk4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaOk4PageRoutingModule {}
