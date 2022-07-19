import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsedServiceComponent} from './used-service.component';



@NgModule({
  declarations: [UsedServiceComponent],
  exports: [UsedServiceComponent],
  entryComponents: [UsedServiceComponent],
  imports: [
    CommonModule
  ]
})
export class UsedServiceModule { }
