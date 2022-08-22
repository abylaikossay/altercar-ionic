import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ServiceTabPage} from './service-tab.page';

const routes: Routes = [
    {
        path: '',
        component: ServiceTabPage,
        children: [
            {
              path: '',
              loadChildren: () => import('../../inner-tab/service/service/service.module').then(m => m.ServicePageModule),
            },
            {
                path: 'user-car',
                loadChildren: () => import('../../inner-tab/home/user-car/user-car.module').then(m => m.UserCarPageModule),
            },
            {
                path: 'service-list',
                loadChildren: () => import('../../inner-tab/home/service-list/service-list.module').then(m => m.ServiceListPageModule),
            },
            {
                path: 'tire-list',
                loadChildren: () => import('../../inner-tab/home/tire-list/tire-list.module').then(m => m.TireListPageModule),
            },
            {
                path: 'tire',
                loadChildren: () => import('../../inner-tab/home/tire/tire.module').then(m => m.TirePageModule),
            },
            {
                path: 'auto-service-list',
                loadChildren: () => import('../../inner-tab/home/auto-service-list/auto-service-list.module').then(m => m.AutoServiceListPageModule),
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/service-tab/',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServiceTabPageRoutingModule {
}
