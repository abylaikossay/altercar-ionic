import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrTabPageRoutingModule } from './qr-tab-routing.module';

import { QrTabPage } from './qr-tab.page';
import {CommonHeaderModule} from '../../../components/header/common-header/common-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QrTabPageRoutingModule,
        CommonHeaderModule,
    ],
  declarations: [QrTabPage]
})
export class QrTabPageModule {}
