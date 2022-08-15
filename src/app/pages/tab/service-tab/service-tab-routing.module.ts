import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceTabPage } from './service-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceTabPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../inner-tab/service/service/service.module').then(m => m.ServicePageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/service-tab/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceTabPageRoutingModule {}
