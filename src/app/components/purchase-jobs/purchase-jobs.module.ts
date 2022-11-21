import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseJobsComponent } from './purchase-jobs.component';



@NgModule({
  declarations: [PurchaseJobsComponent],
  exports: [PurchaseJobsComponent],
  entryComponents: [PurchaseJobsComponent],
  imports: [
    CommonModule
  ]
})
export class PurchaseJobsModule { }
