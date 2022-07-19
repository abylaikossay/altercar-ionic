import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TabsPage} from './tabs.page';
import {UserLocationResolver} from '../../services/resolvers/location/user-location.resolver';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'home-tab',
                loadChildren: () => import('../tab/home-tab/home-tab.module').then(m => m.HomeTabPageModule),
            },
            {
                path: 'qr-tab',
                loadChildren: () => import('../tab/qr-tab/qr-tab.module').then(m => m.QrTabPageModule),
            },
            {
                path: 'history-tab',
                loadChildren: () => import('../tab/history-tab/history-tab.module').then(m => m.HistoryTabPageModule),
            },
            {
                path: 'profile-tab',
                loadChildren: () => import('../tab/profile-tab/profile-tab.module').then(m => m.ProfileTabPageModule),
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/home-tab',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
