import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowButtonComponent } from './arrow-button.component';
import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [ArrowButtonComponent],
  exports: [ArrowButtonComponent],
  entryComponents: [ArrowButtonComponent],
  imports: [
    CommonModule,
    RatingModule
  ]
})
export class ArrowButtonModule {
}
