import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TireListPageRoutingModule } from './tire-list-routing.module';

import { TireListPage } from './tire-list.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {TireCardModule} from '../../../../components/tire-card/tire-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TireListPageRoutingModule,
        CommonHeaderModule,
        TireCardModule,
    ],
  declarations: [TireListPage]
})
export class TireListPageModule {}
