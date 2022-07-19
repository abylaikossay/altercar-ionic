import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IspServicesPageRoutingModule } from './isp-products-routing.module';

import { IspProductsPage } from './isp-products.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {ProductCardModule} from '../../../../components/product-card/product-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IspServicesPageRoutingModule,
        CommonHeaderModule,
        ProductCardModule,
    ],
  declarations: [IspProductsPage]
})
export class IspServicesPageModule {}
