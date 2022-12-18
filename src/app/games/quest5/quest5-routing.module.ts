import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quest5Page } from './quest5.page';

const routes: Routes = [
  {
    path: '',
    component: Quest5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quest5PageRoutingModule {}
