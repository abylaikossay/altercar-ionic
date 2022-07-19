import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCategoriesPageRoutingModule } from './user-services-routing.module';

import { UserServicesPage } from './user-services.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {UslugaCardModule} from '../../../../components/usluga-card/usluga-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserCategoriesPageRoutingModule,
        CommonHeaderModule,
        UslugaCardModule,
    ],
  declarations: [UserServicesPage]
})
export class UserCategoriesPageModule {}
