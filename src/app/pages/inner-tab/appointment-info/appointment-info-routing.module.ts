import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppointmentInfoPage} from './appointment-info.page';

const routes: Routes = [
    {
        path: '',
        component: AppointmentInfoPage,
    },
    {
        path: ':id',
        component: AppointmentInfoPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppointmentInfoPageRoutingModule {
}
