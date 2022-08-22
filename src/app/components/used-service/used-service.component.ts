import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApplicationResponse} from '../../models/responses/ApplicationResponse';
import {UserCarResponse} from '../../models/responses/UserCarResponse';

@Component({
  selector: 'app-used-service',
  templateUrl: './used-service.component.html',
  styleUrls: ['./used-service.component.scss'],
})
export class UsedServiceComponent implements OnInit {
  @Input() service: UserCarResponse;
  @Output() carRemoved: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    console.log(this.service);
  }

  changeCar() {
    this.carRemoved.emit(this.service);
  }
}
