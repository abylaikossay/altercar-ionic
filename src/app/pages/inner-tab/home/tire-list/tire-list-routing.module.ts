import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TireListPage } from './tire-list.page';

const routes: Routes = [
  {
    path: '',
    component: TireListPage
  },
  {
    path: ':id',
    component: TireListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TireListPageRoutingModule {}
