import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quest4Page } from './quest4.page';

const routes: Routes = [
  {
    path: '',
    component: Quest4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quest4PageRoutingModule {}
