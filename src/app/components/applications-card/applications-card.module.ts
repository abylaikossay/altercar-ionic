import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsCardComponent } from './applications-card.component';



@NgModule({
  declarations: [ApplicationsCardComponent],
  entryComponents: [ApplicationsCardComponent],
  exports: [ApplicationsCardComponent],
  imports: [
    CommonModule
  ]
})
export class ApplicationsCardModule { }
