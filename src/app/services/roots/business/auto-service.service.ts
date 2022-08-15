import {Injectable} from '@angular/core';
import {AutoServiceControllerService} from './auto-service-controller.service';

@Injectable({
    providedIn: 'root',
})
export class AutoServiceService {

    constructor(private autoServiceControllerService: AutoServiceControllerService) {
    }

    getAllCategories() {
        return this.autoServiceControllerService.getAllCategories();
    }

    getPartnersByCategoryId(id: number) {
        return this.autoServiceControllerService.getPartnersByCategoryId(id);
    }

    getCategoryById(id: number) {
        return this.autoServiceControllerService.getCategoryById(id);
    }

    getAllTiresByUserCar(userCarId: number) {
        return this.autoServiceControllerService.getAllTiresByUserCar(userCarId);
    }

    getTireById(id: number) {
        return this.autoServiceControllerService.getTireById(id);
    }

}
