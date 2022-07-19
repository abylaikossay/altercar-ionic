import {Injectable} from '@angular/core';
import {OrderControllerService} from './order-controller.service';

@Injectable({
    providedIn: 'root',
})
export class OrderService {

    constructor(private orderControllerService: OrderControllerService) {
    }

    getOrders(status?: string) {
        return this.orderControllerService.getUserOrders(status);
    }
}
