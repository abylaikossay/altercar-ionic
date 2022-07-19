import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsBannerComponent} from './news-banner.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NewsBannerComponent],
  exports: [NewsBannerComponent],
  entryComponents: [NewsBannerComponent],
    imports: [
        CommonModule,
        IonicModule,
    ],
})
export class NewsBannerModule { }
