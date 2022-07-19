import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { PaginationReponse } from '../../../models/responses/pagination/PaginationReponse';
import { OrderResponse } from '../../../models/responses/OrderResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCarResponse } from '../../../models/responses/UserCarResponse';

@Injectable({
    providedIn: 'root',
})
export class OrderControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    // getOrders(status: number) {
    //     return this.httpService.get('/api/order?search=status:' + status)
    //         .pipe(map(value => value.body as OrderResponse));
    // }

    getUserOrders(orderStatus?: string): Observable<any[]> {
        if (orderStatus) {
            return this.http.get<any[]>(this.fullUrl + 'order/all/user?status=' + orderStatus);
        } else {
            return this.http.get<any[]>(this.fullUrl + 'order/all/user');
        }
    }
}
