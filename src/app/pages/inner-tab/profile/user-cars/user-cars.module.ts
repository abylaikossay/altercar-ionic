import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCarsPageRoutingModule } from './user-cars-routing.module';

import { UserCarsPage } from './user-cars.page';
import { CommonHeaderModule } from '../../../../components/header/common-header/common-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserCarsPageRoutingModule,
    CommonHeaderModule,
  ],
  declarations: [UserCarsPage]
})
export class UserCarsPageModule {}
