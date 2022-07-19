import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserCarPageRoutingModule } from './add-user-car-routing.module';

import { AddUserCarPage } from './add-user-car.page';
import { CommonHeaderModule } from '../../../../components/header/common-header/common-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUserCarPageRoutingModule,
    CommonHeaderModule,
  ],
  declarations: [AddUserCarPage]
})
export class AddUserCarPageModule {}
