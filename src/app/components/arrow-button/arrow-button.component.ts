import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss'],
})
export class ArrowButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    console.error(`Old Value:${$event.oldValue}, New Value: ${$event.newValue}, Checked Color: ${$event.starRating.checkedcolor}, Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
