import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmptyPipe} from './empty.pipe';


@NgModule({
  declarations: [EmptyPipe],
  exports: [EmptyPipe],
  imports: [
    CommonModule
  ]
})
export class EmptyModule {
}
