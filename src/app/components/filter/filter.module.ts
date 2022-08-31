import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FilterComponent} from './filter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilterComponent],
  exports: [FilterComponent],
  entryComponents: [FilterComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
})
export class FilterModule { }
