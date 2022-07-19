import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TirePage } from './tire.page';

const routes: Routes = [
  {
    path: '',
    component: TirePage
  },
  {
    path: ':id',
    component: TirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TirePageRoutingModule {}
