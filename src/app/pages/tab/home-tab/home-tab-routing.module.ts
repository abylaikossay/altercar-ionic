import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeTabPage} from './home-tab.page';
import {UserLocationResolver} from '../../../services/resolvers/location/user-location.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomeTabPage,
        children: [
            {
                path: '',
                loadChildren: () => import('../../inner-tab/home/home/home.module').then(m => m.HomePageModule),
            },
            {
                path: 'tire',
                loadChildren: () => import('../../inner-tab/home/tire/tire.module').then(m => m.TirePageModule),
            },
            {
                path: 'tire-list',
                loadChildren: () => import('../../inner-tab/home/tire-list/tire-list.module').then(m => m.TireListPageModule),
            },
            {
                path: 'service-list',
                loadChildren: () => import('../../inner-tab/home/service-list/service-list.module').then(m => m.ServiceListPageModule),
            },
            {
                path: 'auto-service-list',
                loadChildren: () => import('../../inner-tab/home/auto-service-list/auto-service-list.module').then(m => m.AutoServiceListPageModule),
            },
            {
                path: 'user-car',
                loadChildren: () => import('../../inner-tab/home/user-car/user-car.module').then(m => m.UserCarPageModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeTabPageRoutingModule {
}
