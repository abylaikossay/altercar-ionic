import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserInfoCardComponent} from './user-info-card.component';



@NgModule({
  declarations: [UserInfoCardComponent],
  exports: [UserInfoCardComponent],
  entryComponents: [UserInfoCardComponent],
  imports: [
    CommonModule
  ]
})
export class UserInfoCardModule { }
