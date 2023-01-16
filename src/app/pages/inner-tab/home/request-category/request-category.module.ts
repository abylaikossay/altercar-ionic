import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestCategoryPageRoutingModule } from './request-category-routing.module';

import { RequestCategoryPage } from './request-category.page';
import { CommonHeaderModule } from '../../../../components/header/common-header/common-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestCategoryPageRoutingModule,
    CommonHeaderModule,
  ],
  declarations: [RequestCategoryPage]
})
export class RequestCategoryPageModule {}
