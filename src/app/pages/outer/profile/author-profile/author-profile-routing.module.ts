import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthorProfilePage} from './author-profile.page';
import {ProfileResolverService} from '../../../../services/resolvers/profile/profile-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: AuthorProfilePage,
        // resolve: {
        //     profile: ProfileResolverService,
        // },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthorProfilePageRoutingModule {
}
