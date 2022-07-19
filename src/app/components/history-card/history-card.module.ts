import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryCardComponent} from './history-card.component';
import {DirectiveModule} from '../../modules/directive.module';



@NgModule({
  declarations: [HistoryCardComponent],
  exports: [HistoryCardComponent],
  entryComponents: [HistoryCardComponent],
  imports: [
    CommonModule,
    DirectiveModule,
  ],
})
export class HistoryCardModule { }
