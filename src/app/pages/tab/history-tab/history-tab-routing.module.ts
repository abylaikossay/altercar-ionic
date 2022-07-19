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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryTabPageRoutingModule {}
