import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageIdPipe} from './image-id.pipe';


@NgModule({
  declarations: [ImageIdPipe],
  exports: [ImageIdPipe],
  imports: [
    CommonModule
  ]
})
export class ImageIdModule {
}
