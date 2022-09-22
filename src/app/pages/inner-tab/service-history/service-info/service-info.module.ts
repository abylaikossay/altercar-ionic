import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceInfoPageRoutingModule } from './service-info-routing.module';

import { ServiceInfoPage } from './service-info.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {OrderHistoryModule} from '../../../../components/order-history/order-history.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServiceInfoPageRoutingModule,
        CommonHeaderModule,
        OrderHistoryModule,
    ],
  declarations: [ServiceInfoPage]
})
export class ServiceInfoPageModule {}
