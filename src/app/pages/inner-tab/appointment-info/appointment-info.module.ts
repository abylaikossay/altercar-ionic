import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentInfoPageRoutingModule } from './appointment-info-routing.module';

import { AppointmentInfoPage } from './appointment-info.page';
import { CommonHeaderModule } from '../../../components/header/common-header/common-header.module';
import {UsedServiceModule} from '../../../components/used-service/used-service.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppointmentInfoPageRoutingModule,
        CommonHeaderModule,
        UsedServiceModule,
    ],
  declarations: [AppointmentInfoPage]
})
export class AppointmentInfoPageModule {}
