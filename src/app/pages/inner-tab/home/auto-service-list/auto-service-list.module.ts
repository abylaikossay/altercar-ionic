import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoServiceListPageRoutingModule } from './auto-service-list-routing.module';

import { AutoServiceListPage } from './auto-service-list.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {ApplicationsCardModule} from '../../../../components/applications-card/applications-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AutoServiceListPageRoutingModule,
        CommonHeaderModule,
        ApplicationsCardModule,
    ],
  declarations: [AutoServiceListPage]
})
export class AutoServiceListPageModule {}
