import {Injectable} from '@angular/core';
import {ProductControllerService} from './product-controller.service';
import { UserCarControllerService } from './user-car-controller.service';
import {PartnerJobControllerService} from './partner-job-controller.service';

@Injectable({
    providedIn: 'root',
})
export class PartnerJobService {

    constructor(private partnerJobControllerService: PartnerJobControllerService) {
    }

    getByPartnerAndCategory(partnerId: number, categoryId: number) {
        return this.partnerJobControllerService.getByPartnerAndCategory(partnerId, categoryId);
    }

    getByPartner(partnerId: number) {
        return this.partnerJobControllerService.getByPartner(partnerId);
    }
}
