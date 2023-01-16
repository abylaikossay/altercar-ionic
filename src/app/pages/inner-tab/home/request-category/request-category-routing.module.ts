import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestCategoryPage } from './request-category.page';

const routes: Routes = [
  {
    path: '',
    component: RequestCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestCategoryPageRoutingModule {}
