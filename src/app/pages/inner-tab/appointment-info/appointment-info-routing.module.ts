import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppointmentInfoPage} from './appointment-info.page';

const routes: Routes = [
    {
        path: '',
        component: AppointmentInfoPage,
    },
    {
        path: ':id/:categoryId',
        component: AppointmentInfoPage,
    },
    {
        path: ':id/user-car/:carId/:categoryId',
        component: AppointmentInfoPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppointmentInfoPageRoutingModule {
}
