import {Injectable} from '@angular/core';
import {ApplicationControllerService} from './application-controller.service';
import {AppointmentControllerService} from './appointment-controller.service';
import {AppointmentRequest} from '../../../models/requests/AppointmentRequest';

@Injectable({
    providedIn: 'root',
})
export class AppointmentService {

    constructor(private appointmentControllerService: AppointmentControllerService) {
    }

    create(appointmentRequest: AppointmentRequest) {
        return this.appointmentControllerService.create(appointmentRequest);
    }

    getPartnersByTireId(id: number) {
        return this.appointmentControllerService.getPartnersByTireId(id);
    }

    getAllServicePartners(id: number) {
        return this.appointmentControllerService.getAllServicePartners(id);
    }

    getAll() {
        return this.appointmentControllerService.getAll();
    }

    getById(id: number) {
        return this.appointmentControllerService.getById(id);
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
