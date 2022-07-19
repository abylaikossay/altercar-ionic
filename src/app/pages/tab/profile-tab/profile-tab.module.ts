import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileTabPageRoutingModule } from './profile-tab-routing.module';

import { ProfileTabPage } from './profile-tab.page';
import {CommonHeaderModule} from '../../../components/header/common-header/common-header.module';
import { ArrowButtonModule } from '../../../components/arrow-button/arrow-button.module';
import { DirectiveModule } from '../../../modules/directive.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfileTabPageRoutingModule,
        CommonHeaderModule,
        ArrowButtonModule,
        DirectiveModule,
    ],
  declarations: [ProfileTabPage]
})
export class ProfileTabPageModule {}
