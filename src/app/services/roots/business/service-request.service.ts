import { Injectable } from '@angular/core';
import { ProductControllerService } from './product-controller.service';
import { UserCarControllerService } from './user-car-controller.service';
import { ServiceRequestControllerService } from './service-request-controller.service';

@Injectable({
    providedIn: 'root',
})
export class ServiceRequestService {

    constructor(private serviceRequestControllerService: ServiceRequestControllerService) {
    }


    create(serviceRequestRequest: any) {
        return this.serviceRequestControllerService.create(serviceRequestRequest);
    }

    getAll() {
        return this.serviceRequestControllerService.getAll();
    }

    getById(id: number) {
        return this.serviceRequestControllerService.getById(id);
    }

    update(serviceRequestRequest: any, id: number) {
        return this.serviceRequestControllerService.update(serviceRequestRequest, id);
    }

    uploadPhoto(photo: any) {
        return this.serviceRequestControllerService.uploadPhoto(photo);
    }

    uploadPhotos(photos: any) {
        return this.serviceRequestControllerService.uploadPhotos(photos);
    }


}
