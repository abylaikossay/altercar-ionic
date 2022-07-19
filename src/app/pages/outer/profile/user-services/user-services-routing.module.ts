import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserServicesPage } from './user-services.page';
import {ServiceResolverService} from '../../../../services/resolvers/profile/service-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UserServicesPage,
    resolve: {
      service: ServiceResolverService,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCategoriesPageRoutingModule {}
