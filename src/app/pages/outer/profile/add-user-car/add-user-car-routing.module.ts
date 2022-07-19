import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserCarPage } from './add-user-car.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserCarPage
  },
  {
    path: ':id',
    component: AddUserCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserCarPageRoutingModule {}
