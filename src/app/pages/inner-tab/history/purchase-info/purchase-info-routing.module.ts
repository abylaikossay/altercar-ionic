import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseInfoPage } from './purchase-info.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseInfoPage
  },
  {
    path: ':id',
    component: PurchaseInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseInfoPageRoutingModule {}
