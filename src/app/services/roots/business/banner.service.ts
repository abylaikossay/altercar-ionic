import {Injectable} from '@angular/core';
import {BannerControllerService} from './banner-controller.service';

@Injectable({
    providedIn: 'root',
})
export class BannerService {

    constructor(private bannerControllerService: BannerControllerService) {
    }

    getBanners() {
        return this.bannerControllerService.getBanners();
    }

    getWelcomePage() {
        return this.bannerControllerService.getWelcomePage();
    }

}
