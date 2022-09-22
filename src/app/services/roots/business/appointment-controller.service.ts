import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {BannersResponse} from '../../../models/responses/BannersResponse';
import {ApplicationResponse} from '../../../models/responses/ApplicationResponse';
import {PaginationReponse} from '../../../models/responses/pagination/PaginationReponse';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserCarResponse} from '../../../models/responses/UserCarResponse';
import {TireResponse} from '../../../models/responses/TireResponse';
import {PartnerResponse} from '../../../models/responses/PartnerResponse';
import {AppointmentRequest} from '../../../models/requests/AppointmentRequest';
import {AppointmentResponse} from '../../../models/responses/AppointmentResponse';

@Injectable({
    providedIn: 'root',
})
export class AppointmentControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    create(appointmentRequest: AppointmentRequest): Observable<any> {
        return this.http.post<any>(this.fullUrl + 'appointment/create', appointmentRequest);
    }

    getPartnersByTireId(id: number): Observable<any[]> {
        return this.http.get<any[]>(this.fullUrl + 'tire-partner/tire/' + id);
    }

    getAllServicePartners(id: number): Observable<any> {
        return this.http.get<any>(this.fullUrl + 'partner/service/' + id);
    }

    getAll(): Observable<any> {
        return this.http.get<any>(this.fullUrl + 'partner');
    }

    getUserOrders(orderStatus?: string): Observable<any[]> {
        if (orderStatus) {
            return this.http.get<any[]>(this.fullUrl + 'appointment?status=' + orderStatus);
        } else {
            return this.http.get<any[]>(this.fullUrl + 'appointment');
        }
    }

    getById(id: number): Observable<AppointmentResponse> {
        return this.http.get<AppointmentResponse>(this.fullUrl + 'appointment/' + id);
    }


}
