import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceTabPageRoutingModule } from './service-tab-routing.module';

import { ServiceTabPage } from './service-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceTabPageRoutingModule
  ],
  declarations: [ServiceTabPage]
})
export class ServiceTabPageModule {}
