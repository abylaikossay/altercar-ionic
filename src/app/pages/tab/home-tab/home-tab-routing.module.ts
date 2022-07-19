import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeTabPage} from './home-tab.page';
import {UserLocationResolver} from '../../../services/resolvers/location/user-location.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomeTabPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeTabPageRoutingModule {
}
