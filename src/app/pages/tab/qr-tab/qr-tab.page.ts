import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../models/commons/MoviliHeader';

@Component({
  selector: 'app-qr-tab',
  templateUrl: './qr-tab.page.html',
  styleUrls: ['./qr-tab.page.scss'],
})
export class QrTabPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.QR();

  constructor() { }

  ngOnInit() {
  }

}
