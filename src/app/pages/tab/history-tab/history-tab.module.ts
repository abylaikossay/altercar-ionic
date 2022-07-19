import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryTabPageRoutingModule } from './history-tab-routing.module';

import { HistoryTabPage } from './history-tab.page';
import {CommonHeaderModule} from '../../../components/header/common-header/common-header.module';
import {HistoryCardModule} from '../../../components/history-card/history-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HistoryTabPageRoutingModule,
        CommonHeaderModule,
        HistoryCardModule,
    ],
  declarations: [HistoryTabPage]
})
export class HistoryTabPageModule {}
