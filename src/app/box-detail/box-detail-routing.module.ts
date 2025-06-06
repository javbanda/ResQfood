import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxDetailPage } from './box-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BoxDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxDetailPageRoutingModule {}
