import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-jobs',
  templateUrl: './purchase-jobs.component.html',
  styleUrls: ['./purchase-jobs.component.scss'],
})
export class PurchaseJobsComponent implements OnInit {
  @Input() job: any;

  constructor() { }

  ngOnInit() {}

}
