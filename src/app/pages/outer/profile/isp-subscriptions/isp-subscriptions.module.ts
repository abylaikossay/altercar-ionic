import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IspSubscriptionsPageRoutingModule } from './isp-subscriptions-routing.module';

import { IspSubscriptionsPage } from './isp-subscriptions.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IspSubscriptionsPageRoutingModule,
        CommonHeaderModule,
    ],
  declarations: [IspSubscriptionsPage]
})
export class IspSubscriptionsPageModule {}
