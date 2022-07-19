import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrTabPage } from './qr-tab.page';

const routes: Routes = [
  {
    path: '',
    component: QrTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrTabPageRoutingModule {}
