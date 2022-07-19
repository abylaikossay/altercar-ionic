import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularQuestionsPage } from './popular-questions.page';

const routes: Routes = [
  {
    path: '',
    component: PopularQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularQuestionsPageRoutingModule {}
