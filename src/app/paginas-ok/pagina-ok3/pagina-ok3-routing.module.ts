import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaOk3Page } from './pagina-ok3.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaOk3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaOk3PageRoutingModule {}
