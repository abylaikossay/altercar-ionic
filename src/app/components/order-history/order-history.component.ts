import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  @Input() order: any;
  constructor() { }

  ngOnInit() {}

}
