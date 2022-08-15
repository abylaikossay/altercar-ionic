import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceCategoryComponent} from './service-category.component';



@NgModule({
  declarations: [ServiceCategoryComponent],
  exports: [ServiceCategoryComponent],
  entryComponents: [ServiceCategoryComponent],
  imports: [
    CommonModule
  ]
})
export class ServiceCategoryModule { }
