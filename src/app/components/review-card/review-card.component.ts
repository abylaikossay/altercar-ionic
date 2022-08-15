import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() selectPartner: EventEmitter<any> = new EventEmitter<any>();
  photoUrl: string = environment.imageUrl + '/partner-logo/';
  isChosen: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.tirePartner);
  }

  chose() {
    // if (this.isChosen)
    if (this.isChosen) {
      this.isChosen = false;
      this.selectPartner.emit(null);
    } else {
      this.isChosen = true;
      this.selectPartner.emit(this.tirePartner);
    }

  }
}
