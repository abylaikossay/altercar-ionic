import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {NgxMaskModule} from 'ngx-mask';
import {DirectiveModule} from '../../../../modules/directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    CommonHeaderModule,
    NgxMaskModule,
    DirectiveModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
