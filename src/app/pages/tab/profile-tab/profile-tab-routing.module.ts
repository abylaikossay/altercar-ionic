import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileTabPage} from './profile-tab.page';

const routes: Routes = [
    {
        path: '',
        component: ProfileTabPage,
        children: [
            {
                path: '',
                loadChildren: () => import('../../inner-tab/profile/profile/profile.module').then(m => m.ProfilePageModule),
            },
            {
                path: 'balance',
                loadChildren: () => import('../../inner-tab/profile/balance/balance.module').then(m => m.BalancePageModule),
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/profile-tab/',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfileTabPageRoutingModule {
}
