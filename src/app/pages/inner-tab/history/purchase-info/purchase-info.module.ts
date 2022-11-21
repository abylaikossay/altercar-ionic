import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchaseInfoPageRoutingModule } from './purchase-info-routing.module';

import { PurchaseInfoPage } from './purchase-info.page';
import { CommonHeaderModule } from '../../../../components/header/common-header/common-header.module';
import { PurchaseJobsModule } from '../../../../components/purchase-jobs/purchase-jobs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchaseInfoPageRoutingModule,
    CommonHeaderModule,
    PurchaseJobsModule,
  ],
  declarations: [PurchaseInfoPage]
})
export class PurchaseInfoPageModule {}
