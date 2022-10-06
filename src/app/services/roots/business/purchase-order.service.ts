import {Injectable} from '@angular/core';
import {TireOrderRequest} from '../../../models/requests/TireOrderRequest';
import { PurchaseOrderControllerService } from './purchase-order-controller.service';

@Injectable({
    providedIn: 'root',
})
export class PurchaseOrderService {

    constructor(private purchaseOrderControllerService: PurchaseOrderControllerService) {
    }

    getOrder(id: number) {
        return this.purchaseOrderControllerService.getOrder(id);
    }

    getOrders() {
        return this.purchaseOrderControllerService.getUserOrders();
    }

    createOrder(tireOrderRequest: TireOrderRequest) {
        return this.purchaseOrderControllerService.createOrder(tireOrderRequest);
    }

}
