import {Component, Input, OnInit} from '@angular/core';
import {ProductResponse} from '../../models/responses/ProductResponse';
import {ApplicationResponse} from '../../models/responses/ApplicationResponse';
import {environment} from '../../../environments/environment';
import {PartnerResponse} from '../../models/responses/PartnerResponse';

@Component({
  selector: 'app-applications-card',
  templateUrl: './applications-card.component.html',
  styleUrls: ['./applications-card.component.scss'],
})
export class ApplicationsCardComponent implements OnInit {

  @Input() partner: PartnerResponse;
  fullUrl: string = environment.imageUrl + '/partner-logo/';
  constructor() { }

  ngOnInit() {
    console.log(this.partner);
  }

}
