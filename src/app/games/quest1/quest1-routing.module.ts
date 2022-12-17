import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quest1Page } from './quest1.page';

const routes: Routes = [
  {
    path: '',
    component: Quest1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quest1PageRoutingModule {}
