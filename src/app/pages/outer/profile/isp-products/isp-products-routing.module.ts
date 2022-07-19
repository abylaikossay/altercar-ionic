import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IspProductsPage } from './isp-products.page';
import {CategoryResolverService} from '../../../../services/resolvers/category/category.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: IspProductsPage,
    resolve: {
      categories: CategoryResolverService,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IspServicesPageRoutingModule {}
