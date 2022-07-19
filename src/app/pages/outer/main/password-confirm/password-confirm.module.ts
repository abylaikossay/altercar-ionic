import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordConfirmPageRoutingModule } from './password-confirm-routing.module';

import { PasswordConfirmPage } from './password-confirm.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordConfirmPageRoutingModule,
    CommonHeaderModule,

  ],
  declarations: [PasswordConfirmPage]
})
export class PasswordConfirmPageModule {}
