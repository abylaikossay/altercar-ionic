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

    uploadPhoto(photo: any): Observable<any> {
        return this.http.post<any>(this.fullUrl + 'service-request/upload-photo', photo);
    }
}
