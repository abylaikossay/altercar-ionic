import {Component, Input, OnInit} from '@angular/core';
import {ServiceResponse} from '../../models/responses/ServiceResponse';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-usluga-card',
    templateUrl: './usluga-card.component.html',
    styleUrls: ['./usluga-card.component.scss'],
})
export class UslugaCardComponent implements OnInit {


    @Input() serv: any;
    imageUrl: string;

    constructor() {
    }

    ngOnInit() {
        this.imageUrl = 'assets/images/' + this.serv?.imageName;
    }

}
