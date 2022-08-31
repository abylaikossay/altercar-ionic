import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceHistoryTabPageRoutingModule } from './service-history-tab-routing.module';

import { ServiceHistoryTabPage } from './service-history-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceHistoryTabPageRoutingModule
  ],
  declarations: [ServiceHistoryTabPage]
})
export class ServiceHistoryTabPageModule {}
