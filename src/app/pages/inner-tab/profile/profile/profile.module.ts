import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {DirectiveModule} from '../../../../modules/directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    CommonHeaderModule,
    DirectiveModule,
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
