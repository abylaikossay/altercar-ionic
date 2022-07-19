import {Component, Input, OnInit} from '@angular/core';
import {BannersResponse} from '../../models/responses/BannersResponse';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-news-banner',
    templateUrl: './news-banner.component.html',
    styleUrls: ['./news-banner.component.scss'],
})
export class NewsBannerComponent implements OnInit {
    slideOpts = {
        initialSlide: 0,
        speed: 400,
    };
    @Input() banners: BannersResponse[];
    photoUrl: string = environment.imageUrl + '/tire-photo/';

    // banners: any = [1, 2, 3];

    constructor() {
    }

    ngOnInit() {
    }

}
