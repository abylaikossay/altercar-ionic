import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IspNewProductsPageRoutingModule } from './isp-new-products-routing.module';

import { IspNewProductsPage } from './isp-new-products.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {ProductCardModule} from '../../../../components/product-card/product-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IspNewProductsPageRoutingModule,
        CommonHeaderModule,
        ProductCardModule,
    ],
  declarations: [IspNewProductsPage]
})
export class IspNewProductsPageModule {}
