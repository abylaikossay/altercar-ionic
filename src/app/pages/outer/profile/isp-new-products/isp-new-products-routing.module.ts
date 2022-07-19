import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IspNewProductsPage } from './isp-new-products.page';

const routes: Routes = [
  {
    path: '',
    component: IspNewProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IspNewProductsPageRoutingModule {}
