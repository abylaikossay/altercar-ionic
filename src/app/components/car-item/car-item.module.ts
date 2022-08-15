import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarItemComponent} from './car-item.component';



@NgModule({
  declarations: [CarItemComponent],
  exports: [CarItemComponent],
  entryComponents: [CarItemComponent],
  imports: [
    CommonModule
  ]
})
export class CarItemModule { }
