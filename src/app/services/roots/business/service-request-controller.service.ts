import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ProductResponse } from '../../../models/responses/ProductResponse';
import { UserCarResponse } from '../../../models/responses/UserCarResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarBrandResponse } from '../../../models/responses/CarBrandResponse';
import { CarModelResponse } from '../../../models/responses/CarModelResponse';
import { PurchaseOrderResponse } from '../../../models/responses/PurchaseOrderResponse';
import { AppointmentResponse } from '../../../models/responses/AppointmentResponse';
import { ServiceRequestResponse } from '../../../models/responses/ServiceRequestResponse';

@Injectable({
    providedIn: 'root',
})
export class ServiceRequestControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }


    update(serviceRequestFrom: any, id: number): Observable<any> {
        return this.http.put<any>(this.fullUrl + 'service-request/update' + id, serviceRequestFrom);
    }


    create(serviceRequestFrom: any): Observable<any> {
        return this.http.post<any>(this.fullUrl + 'service-request/create', serviceRequestFrom);
    }

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(this.fullUrl + 'service-request/all/user');
    }

    getById(id: number): Observable<ServiceRequestResponse> {
        return this.http.get<ServiceRequestResponse>(this.fullUrl + 'service-request/' + id);
    }

    uploadPhoto(photo: any): Observable<any> {
        return this.http.post<any>(this.fullUrl + 'service-request/upload-photo', photo);
    }

    uploadPhotos(photos: any): Observable<any> {
        return this.http.post<any>(this.fullUrl + 'service-request/upload-photos', photos);
    }
}
