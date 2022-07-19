import { Injectable } from '@angular/core';
import { BannerControllerService } from './banner-controller.service';
import { ApplicationControllerService } from './application-controller.service';
import { TireControllerService } from './tire-controller.service';

@Injectable({
    providedIn: 'root',
})
export class TireService {

    constructor(private tireControllerService: TireControllerService) {
    }

    getAllApplications() {
        return this.tireControllerService.getAllApplications();
    }

    getAllTires() {
        return this.tireControllerService.getAllTires();
    }

    getTireById(id: number) {
        return this.tireControllerService.getTireById(id);
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
