import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestInfoPageRoutingModule } from './request-info-routing.module';

import { RequestInfoPage } from './request-info.page';
import { CommonHeaderModule } from '../../../../components/header/common-header/common-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RequestInfoPageRoutingModule,
        CommonHeaderModule,
    ],
  declarations: [RequestInfoPage]
})
export class RequestInfoPageModule {}
