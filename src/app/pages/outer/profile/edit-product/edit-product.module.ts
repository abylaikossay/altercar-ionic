import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProductPageRoutingModule } from './edit-product-routing.module';

import { EditProductPage } from './edit-product.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditProductPageRoutingModule,
        CommonHeaderModule,
    ],
  declarations: [EditProductPage]
})
export class EditProductPageModule {}
