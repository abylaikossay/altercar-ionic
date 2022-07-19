import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {ProductCardComponent} from './product-card.component';
import {DirectiveModule} from '../../modules/directive.module';
import {EmptyModule} from '../../pipes/empty.module';
import {ImageIdModule} from '../../pipes/image-id.module';



@NgModule({
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
  entryComponents: [ProductCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    EmptyModule,
    DirectiveModule,
    ImageIdModule,
  ],
})
export class ProductCardModule { }
