import {Component, Input, OnInit} from '@angular/core';
import {ApplicationResponse} from '../../models/responses/ApplicationResponse';

@Component({
  selector: 'app-used-service',
  templateUrl: './used-service.component.html',
  styleUrls: ['./used-service.component.scss'],
})
export class UsedServiceComponent implements OnInit {
  @Input() service: any;
  constructor() { }

  ngOnInit() {}

}
