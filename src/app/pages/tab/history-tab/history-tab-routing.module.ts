import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryTabPage } from './history-tab.page';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryTabPageRoutingModule {}
