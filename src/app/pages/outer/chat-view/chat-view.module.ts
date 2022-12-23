import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatViewPageRoutingModule } from './chat-view-routing.module';

import { ChatViewPage } from './chat-view.page';
import { CommonHeaderModule } from '../../../components/header/common-header/common-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChatViewPageRoutingModule,
        CommonHeaderModule,
    ],
  declarations: [ChatViewPage]
})
export class ChatViewPageModule {}
