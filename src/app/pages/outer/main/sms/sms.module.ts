import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsPageRoutingModule } from './sms-routing.module';

import { SmsPage } from './sms.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SmsPageRoutingModule,
        CommonHeaderModule,
        NgxMaskModule,
    ],
  declarations: [SmsPage]
})
export class SmsPageModule {}
