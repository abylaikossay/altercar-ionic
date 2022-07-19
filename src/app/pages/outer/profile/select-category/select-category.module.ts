import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectServicePageRoutingModule } from './select-category-routing.module';

import { SelectCategoryPage } from './select-category.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {UslugaCardModule} from '../../../../components/usluga-card/usluga-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectServicePageRoutingModule,
    CommonHeaderModule,
    UslugaCardModule,
  ],
  declarations: [SelectCategoryPage]
})
export class SelectServicePageModule {}
