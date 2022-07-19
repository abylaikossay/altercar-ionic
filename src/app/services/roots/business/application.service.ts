import {Injectable} from '@angular/core';
import {BannerControllerService} from './banner-controller.service';
import {ApplicationControllerService} from './application-controller.service';

@Injectable({
    providedIn: 'root',
})
export class ApplicationService {

    constructor(private applicationControllerService: ApplicationControllerService) {
    }

    getAllApplications() {
      return this.applicationControllerService.getAllApplications();
    }
    getMyApplications() {
        return this.applicationControllerService.getMyApplications();
    }
    getApplicationById(id: number) {
        return this.applicationControllerService.getApplicationById(id);
    }

    submitApp(id: number) {
        return this.applicationControllerService.submitApplication(id);
    }

    hideApp(id: number) {
        return this.applicationControllerService.hideApplication(id);
    }

}
