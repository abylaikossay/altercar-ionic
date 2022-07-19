import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IspSubscriptionsPage } from './isp-subscriptions.page';

const routes: Routes = [
  {
    path: '',
    component: IspSubscriptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IspSubscriptionsPageRoutingModule {}
