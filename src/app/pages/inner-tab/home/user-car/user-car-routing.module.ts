import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCarPage } from './user-car.page';

const routes: Routes = [
  {
    path: '',
    component: UserCarPage
  },
  {
    path: ':id',
    component: UserCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCarPageRoutingModule {}
