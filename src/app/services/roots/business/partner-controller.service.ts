import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { BannersResponse } from '../../../models/responses/BannersResponse';
import { ApplicationResponse } from '../../../models/responses/ApplicationResponse';
import { PaginationReponse } from '../../../models/responses/pagination/PaginationReponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCarResponse } from '../../../models/responses/UserCarResponse';
import { TireResponse } from '../../../models/responses/TireResponse';

@Injectable({
    providedIn: 'root',
})
export class PartnerControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }



    getPartnersByTireId(id: number): Observable<any[]> {
        return this.http.get<any[]>(this.fullUrl + 'tire-partner/tire/' + id );
    }




}
