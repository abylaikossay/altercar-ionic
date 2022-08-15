import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ServicePageRoutingModule} from './service-routing.module';
import {ServicePage} from './service.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {NewsBannerModule} from '../../../../components/news-banner/news-banner.module';
import {ServiceCategoryModule} from '../../../../components/service-category/service-category.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServicePageRoutingModule,
        CommonHeaderModule,
        NewsBannerModule,
        ServiceCategoryModule,
    ],
    declarations: [ServicePage],
})
export class ServicePageModule {
}
