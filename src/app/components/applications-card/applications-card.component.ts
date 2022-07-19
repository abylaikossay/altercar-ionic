import {Component, Input, OnInit} from '@angular/core';
import {ProductResponse} from '../../models/responses/ProductResponse';
import {ApplicationResponse} from '../../models/responses/ApplicationResponse';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-applications-card',
  templateUrl: './applications-card.component.html',
  styleUrls: ['./applications-card.component.scss'],
})
export class ApplicationsCardComponent implements OnInit {

  @Input() application: ApplicationResponse;
  fullUrl: string = environment.imageUrl + '/user/';
  constructor() { }

  ngOnInit() {
    console.log(this.application);
  }

}
