import {Injectable} from '@angular/core';
import {ProductControllerService} from './product-controller.service';
import { UserCarControllerService } from './user-car-controller.service';

@Injectable({
    providedIn: 'root',
})
export class UserCarService {

    constructor(private userCarControllerService: UserCarControllerService) {
    }

    getUserCars() {
        return this.userCarControllerService.getUserCars();
    }

    getAllBrands() {
        return this.userCarControllerService.getAllBrands();
    }

    getModelsByBrand(id: number) {
        return this.userCarControllerService.getAllModelsByBrand(id);
    }

    update(userCarRequest: any, id: number) {
        return this.userCarControllerService.update(userCarRequest, id);
    }

    delete(id: number) {
        return this.userCarControllerService.delete(id);
    }

    add(userCarRequest: any) {
        return this.userCarControllerService.add(userCarRequest);
    }

    getCarById(id: number) {
        return this.userCarControllerService.getUserCarById(id);
    }
    // getIspProducts() {
    //     return this.productControllerService.getIspProducts();
    // }
    //
    // getProductById(id) {
    //     return this.productControllerService.getProductById(id);
    // }
    //
    // getProductsByCategoryId(id: number) {
    //     return this.productControllerService.getAllProductsByCategoryId(id);
    // }
    //
    // getIspProductsByCategoryId(id: number) {
    //     return this.productControllerService.getIspProductsByCategoryId(id);
    // }
}
