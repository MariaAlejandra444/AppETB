import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quest6Page } from './quest6.page';

const routes: Routes = [
  {
    path: '',
    component: Quest6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quest6PageRoutingModule {}
