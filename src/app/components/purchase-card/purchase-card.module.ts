import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseCardComponent } from './purchase-card.component';



@NgModule({
  declarations: [PurchaseCardComponent],
  exports: [PurchaseCardComponent],
  entryComponents: [PurchaseCardComponent],
  imports: [
    CommonModule
  ]
})
export class PurchaseCardModule { }
