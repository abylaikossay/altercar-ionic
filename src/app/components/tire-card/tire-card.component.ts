import { Component, Input, OnInit } from '@angular/core';
import { TireResponse } from '../../models/responses/TireResponse';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tire-card',
  templateUrl: './tire-card.component.html',
  styleUrls: ['./tire-card.component.scss'],
})
export class TireCardComponent implements OnInit {
  @Input() product: TireResponse;
  imgUrl: string = environment.imageUrl + '/tire-photo/'
  constructor() { }

  ngOnInit() {}

}
