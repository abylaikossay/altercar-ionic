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
export class PartnerJobControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }


    getByPartnerAndCategory(partnerId: number, categoryId: number): Observable<any[]> {
        return this.http.get<any[]>(this.fullUrl + 'partner-category-job/partner?categoryId=' + categoryId + '&partnerId=' + partnerId);
    }

    getByPartner(id: number): Observable<any[]> {
        return this.http.get<any[]>(this.fullUrl + 'partner-category-job/all/' + id);
    }



}
