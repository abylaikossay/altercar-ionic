import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';

@Component({
  selector: 'app-popular-questions',
  templateUrl: './popular-questions.page.html',
  styleUrls: ['./popular-questions.page.scss'],
})
export class PopularQuestionsPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.ABOUT('Популярные вопросы');

  constructor() { }

  ngOnInit() {
  }

}
