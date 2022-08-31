import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentCardComponent} from './appointment-card.component';



@NgModule({
  declarations: [AppointmentCardComponent],
  exports: [AppointmentCardComponent],
  entryComponents: [AppointmentCardComponent],
  imports: [
    CommonModule
  ]
})
export class AppointmentCardModule { }
