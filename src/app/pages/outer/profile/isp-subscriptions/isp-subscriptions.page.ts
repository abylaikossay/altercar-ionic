import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';

@Component({
  selector: 'app-isp-subscriptions',
  templateUrl: './isp-subscriptions.page.html',
  styleUrls: ['./isp-subscriptions.page.scss'],
})
export class IspSubscriptionsPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Мои подписки');

  constructor() { }

  ngOnInit() {
  }

}
