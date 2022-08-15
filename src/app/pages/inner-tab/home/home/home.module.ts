import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {NewsBannerModule} from '../../../../components/news-banner/news-banner.module';
import {FilterModule} from '../../../../components/filter/filter.module';
import {ApplicationsCardModule} from '../../../../components/applications-card/applications-card.module';
import {ProductCardModule} from '../../../../components/product-card/product-card.module';
import {TireCardModule} from '../../../../components/tire-card/tire-card.module';
import {CarItemModule} from '../../../../components/car-item/car-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CommonHeaderModule,
    NewsBannerModule,
    FilterModule,
    ApplicationsCardModule,
    ProductCardModule,
    TireCardModule,
    CarItemModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
