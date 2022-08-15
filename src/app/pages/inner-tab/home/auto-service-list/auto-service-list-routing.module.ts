import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoServiceListPage } from './auto-service-list.page';

const routes: Routes = [
  {
    path: '',
    component: AutoServiceListPage
  },
  {
    path: ':id',
    component: AutoServiceListPage
  },
  {
    path: ':id/car/:carId',
    component: AutoServiceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoServiceListPageRoutingModule {}
