import {Injectable} from '@angular/core';
import {OrderControllerService} from './order-controller.service';
import {TireOrderRequest} from '../../../models/requests/TireOrderRequest';

@Injectable({
    providedIn: 'root',
})
export class OrderService {

    constructor(private orderControllerService: OrderControllerService) {
    }

    getOrder(id: number) {
        return this.orderControllerService.getOrder(id);
    }

    getOrders(status?: string) {
        return this.orderControllerService.getUserOrders(status);
    }

    createOrder(tireOrderRequest: TireOrderRequest) {
        return this.orderControllerService.createOrder(tireOrderRequest);
    }

}
