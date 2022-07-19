import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ChatCardComponent } from './chat-card.component';


@NgModule({
    declarations: [ChatCardComponent],
    exports: [ChatCardComponent],
    entryComponents: [ChatCardComponent],
    imports: [
        CommonModule,
    ],
})
export class ChatCardModule {
}
