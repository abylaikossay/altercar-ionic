import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { BannersResponse } from '../../../models/responses/BannersResponse';
import { IspResponse } from '../../../models/responses/IspResponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCarResponse } from '../../../models/responses/UserCarResponse';

@Injectable({
    providedIn: 'root',
})
export class AccountControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient,
    ) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }


    getUserInfo(): Observable<any> {
        return this.http.get<any>(this.fullUrl + 'account');
    }
}
