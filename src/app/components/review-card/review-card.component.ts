import {Component, Input, OnInit} from '@angular/core';
import {OrderResponse} from '../../models/responses/OrderResponse';
import {IspRatingResponse} from '../../models/responses/ispRatingResponse';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {
  @Input() tirePartner: any;
  photoUrl: string = environment.imageUrl + '/partner-logo/';
  isChosen: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.tirePartner);
  }

  chose() {
    // if (this.isChosen)
    this.isChosen = true;
    console.log(this.isChosen);
    console.log( this.tirePartner);

  }
}
