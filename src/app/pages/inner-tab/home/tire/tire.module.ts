import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TirePageRoutingModule } from './tire-routing.module';

import { TirePage } from './tire.page';
import { CommonHeaderModule } from '../../../../components/header/common-header/common-header.module';
import { ReviewCardModule } from '../../../../components/review-card/review-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TirePageRoutingModule,
        CommonHeaderModule,
        ReviewCardModule,
    ],
  declarations: [TirePage]
})
export class TirePageModule {}
