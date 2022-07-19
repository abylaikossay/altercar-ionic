import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.BALANCE_PAGE();

  constructor() { }

  ngOnInit() {
  }

  addBalance() {

  }
}
