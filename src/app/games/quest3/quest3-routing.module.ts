import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quest3Page } from './quest3.page';

const routes: Routes = [
  {
    path: '',
    component: Quest3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quest3PageRoutingModule {}
