import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCarPageRoutingModule } from './user-car-routing.module';

import { UserCarPage } from './user-car.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {UslugaCardModule} from '../../../../components/usluga-card/usluga-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserCarPageRoutingModule,
        CommonHeaderModule,
        UslugaCardModule,
    ],
  declarations: [UserCarPage]
})
export class UserCarPageModule {}
