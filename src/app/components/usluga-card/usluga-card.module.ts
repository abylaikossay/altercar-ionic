import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UslugaCardComponent} from './usluga-card.component';
import {EmptyModule} from '../../pipes/empty.module';



@NgModule({
  declarations: [UslugaCardComponent],
  exports: [UslugaCardComponent],
  entryComponents: [UslugaCardComponent],
  imports: [
    CommonModule,
    EmptyModule
  ]
})
export class UslugaCardModule { }
