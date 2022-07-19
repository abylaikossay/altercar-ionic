import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TireCardComponent } from './tire-card.component';
import { IonicModule } from '@ionic/angular';
import { EmptyModule } from '../../pipes/empty.module';
import { DirectiveModule } from '../../modules/directive.module';
import { ImageIdModule } from '../../pipes/image-id.module';



@NgModule({
  declarations: [TireCardComponent],
  exports: [TireCardComponent],
  entryComponents: [TireCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    EmptyModule,
    DirectiveModule,
  ]
})
export class TireCardModule { }
