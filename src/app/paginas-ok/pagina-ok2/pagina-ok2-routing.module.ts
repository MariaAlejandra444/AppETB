import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaOk2Page } from './pagina-ok2.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaOk2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaOk2PageRoutingModule {}
