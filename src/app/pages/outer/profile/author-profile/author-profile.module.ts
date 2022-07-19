import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorProfilePageRoutingModule } from './author-profile-routing.module';

import { AuthorProfilePage } from './author-profile.page';
import {CommonHeaderModule} from '../../../../components/header/common-header/common-header.module';
import {DirectiveModule} from '../../../../modules/directive.module';
import {ApplicationsCardModule} from '../../../../components/applications-card/applications-card.module';
import {ReviewCardModule} from '../../../../components/review-card/review-card.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthorProfilePageRoutingModule,
        CommonHeaderModule,
        DirectiveModule,
        ApplicationsCardModule,
        ReviewCardModule,
    ],
  declarations: [AuthorProfilePage]
})
export class AuthorProfilePageModule {}
