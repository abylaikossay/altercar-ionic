import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceHistoryTabPage } from './service-history-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceHistoryTabPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../inner-tab/service-history/service-history/service-history.module')
            .then(m => m.ServiceHistoryPageModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceHistoryTabPageRoutingModule {}
