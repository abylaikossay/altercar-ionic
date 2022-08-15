import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceListPage } from './service-list.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceListPage
  },
  {
    path: ':id',
    component: ServiceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceListPageRoutingModule {}
