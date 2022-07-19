import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalancePageRoutingModule } from './balance-routing.module';

import { BalancePage } from './balance.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalancePageRoutingModule,
    CommonHeaderModule,
  ],
  declarations: [BalancePage]
})
export class BalancePageModule {}
