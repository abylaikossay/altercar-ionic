import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceHistoryPageRoutingModule } from './service-history-routing.module';

import { ServiceHistoryPage } from './service-history.page';
import { CommonHeaderModule } from '../../../../components/header/common-header/common-header.module';
import { HistoryCardModule } from '../../../../components/history-card/history-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServiceHistoryPageRoutingModule,
        CommonHeaderModule,
        HistoryCardModule,
    ],
  declarations: [ServiceHistoryPage]
})
export class ServiceHistoryPageModule {}
