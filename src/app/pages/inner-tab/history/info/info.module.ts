import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPageRoutingModule } from './info-routing.module';

import { InfoPage } from './info.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {OrderHistoryModule} from '../../../../components/order-history/order-history.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfoPageRoutingModule,
        CommonHeaderModule,
        OrderHistoryModule,
    ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
