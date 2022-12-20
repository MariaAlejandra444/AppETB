import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaMalPage } from './pagina-mal.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaMalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaMalPageRoutingModule {}
