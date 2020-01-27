import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindAJobPage } from './find-ajob.page';

const routes: Routes = [
  {
    path: '',
    component: FindAJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindAJobPageRoutingModule {}
