import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRequestPageRoutingModule } from './create-request-routing.module';

import { CreateRequestPage } from './create-request.page';
import { CommonHeaderModule } from '../../../../components/header/common-header/common-header.module';
import { UsedServiceModule } from '../../../../components/used-service/used-service.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateRequestPageRoutingModule,
        CommonHeaderModule,
        ReactiveFormsModule,
        UsedServiceModule,
    ],
  declarations: [CreateRequestPage]
})
export class CreateRequestPageModule {}
