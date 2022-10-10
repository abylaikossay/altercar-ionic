import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {HistoryCardModule} from '../../../../components/history-card/history-card.module';
import { PurchaseCardModule } from '../../../../components/purchase-card/purchase-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HistoryPageRoutingModule,
        CommonHeaderModule,
        HistoryCardModule,
        PurchaseCardModule,
    ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
