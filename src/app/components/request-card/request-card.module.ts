import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCardComponent } from './request-card.component';



@NgModule({
  declarations: [RequestCardComponent],
  exports: [RequestCardComponent],
  entryComponents: [RequestCardComponent],
  imports: [
    CommonModule
  ]
})
export class RequestCardModule { }
