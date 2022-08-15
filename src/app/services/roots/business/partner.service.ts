import {Injectable} from '@angular/core';
import {BannerControllerService} from './banner-controller.service';
import {ApplicationControllerService} from './application-controller.service';
import {TireControllerService} from './tire-controller.service';
import {PartnerControllerService} from './partner-controller.service';

@Injectable({
    providedIn: 'root',
})
export class PartnerService {

    constructor(private partnerControllerService: PartnerControllerService) {
    }


    getPartnersByTireId(id: number) {
        return this.partnerControllerService.getPartnersByTireId(id);
    }

    getAllServicePartners(id: number) {
        return this.partnerControllerService.getAllServicePartners(id);
    }

    getAll() {
        return this.partnerControllerService.getAll();
    }

    getById(id: number) {
        return this.partnerControllerService.getById(id);
    }


    // getMyApplications() {
    //     return this.applicationControllerService.getMyApplications();
    // }
    // getApplicationById(id: number) {
    //     return this.applicationControllerService.getApplicationById(id);
    // }
    //
    // submitApp(id: number) {
    //     return this.applicationControllerService.submitApplication(id);
    // }
    //
    // hideApp(id: number) {
    //     return this.applicationControllerService.hideApplication(id);
    // }

}
