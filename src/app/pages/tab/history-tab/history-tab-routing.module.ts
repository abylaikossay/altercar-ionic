import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryTabPage } from './history-tab.page';
//TODO create page for purchase
const routes: Routes = [
  {
    path: '',
    component: HistoryTabPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../inner-tab/history/history/history.module').then(m => m.HistoryPageModule),
      },
      {
        path: 'info',
        loadChildren: () => import('../../inner-tab/history/info/info.module').then(m => m.InfoPageModule),
      },
      {
        path: 'purchase',
        loadChildren: () => import('../../inner-tab/history/purchase-info/purchase-info.module').then(m => m.PurchaseInfoPageModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryTabPageRoutingModule {}
