import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopularQuestionsPageRoutingModule } from './popular-questions-routing.module';

import { PopularQuestionsPage } from './popular-questions.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PopularQuestionsPageRoutingModule,
        CommonHeaderModule,
    ],
  declarations: [PopularQuestionsPage]
})
export class PopularQuestionsPageModule {}
