import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { PaginationReponse } from '../../../models/responses/pagination/PaginationReponse';
import { OrderResponse } from '../../../models/responses/OrderResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCarResponse } from '../../../models/responses/UserCarResponse';
import { TireOrderRequest } from '../../../models/requests/TireOrderRequest';
import { PurchaseOrderResponse } from '../../../models/responses/PurchaseOrderResponse';

@Injectable({
    providedIn: 'root',
})
export class PurchaseOrderControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    // getOrders(status: number) {
    //     return this.httpService.get('/api/order?search=status:' + status)
    //         .pipe(map(value => value.body as OrderResponse));
    // }

    getOrder(id: number): Observable<PurchaseOrderResponse> {
        return this.http.get<PurchaseOrderResponse>(this.fullUrl + 'purchase/order/' + id);
    }

    getUserOrders(): Observable<PurchaseOrderResponse[]> {
        return this.http.get<PurchaseOrderResponse[]>(this.fullUrl + 'purchase/order');
    }

    createOrder(tireOrderRequest: TireOrderRequest): Observable<any> {
        return this.http.post(this.fullUrl + 'order/tire', tireOrderRequest);
    }
}
