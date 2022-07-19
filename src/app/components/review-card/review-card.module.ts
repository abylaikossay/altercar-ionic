import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReviewCardComponent} from './review-card.component';



@NgModule({
  declarations: [ReviewCardComponent],
  exports: [ReviewCardComponent],
  entryComponents: [ReviewCardComponent],
  imports: [
    CommonModule
  ]
})
export class ReviewCardModule { }
