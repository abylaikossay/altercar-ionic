import { Injectable } from '@angular/core';
import { ProductControllerService } from './product-controller.service';
import { UserCarControllerService } from './user-car-controller.service';
import { PartnerJobControllerService } from './partner-job-controller.service';
import { PartnerFavoriteControllerService } from './partner-favorite-controller.service';

@Injectable({
    providedIn: 'root',
})
export class PartnerFavoriteService {

    constructor(private partnerFavoriteControllerService: PartnerFavoriteControllerService) {
    }

    addToFavorite(partnerId: number) {
        return this.partnerFavoriteControllerService.addToFavorite(partnerId);
    }

    removeFromFavorite(partnerId: number) {
        return this.partnerFavoriteControllerService.removeFromFavorite(partnerId);
    }

}
