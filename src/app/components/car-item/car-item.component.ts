import {Component, Input, OnInit} from '@angular/core';
import {ApplicationResponse} from '../../models/responses/ApplicationResponse';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-car-item',
    templateUrl: './car-item.component.html',
    styleUrls: ['./car-item.component.scss'],
})
export class CarItemComponent implements OnInit {
    @Input() carItem: any;
    fullUrl: string = environment.imageUrl + '/car-brand-logo/';

    constructor() {
    }

    ngOnInit() {
        console.log(this.carItem);
    }

}
