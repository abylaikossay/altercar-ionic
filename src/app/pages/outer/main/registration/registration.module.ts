import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegistrationPageRoutingModule,
        CommonHeaderModule,
        NgxMaskModule,
    ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
