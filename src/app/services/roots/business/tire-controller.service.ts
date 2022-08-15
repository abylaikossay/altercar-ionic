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
export class TireControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    getAllApplications() {
        return this.httpService.get('/api/applications/isp/all')
            .pipe(map(value => value.body as PaginationReponse<ApplicationResponse>));
    }

    getAllTires(): Observable<TireResponse[]> {
        return this.http.get<TireResponse[]>(this.fullUrl + 'tire/all');
    }

    getAllTiresByUserCar(userCarId: number): Observable<TireResponse[]> {
        return this.http.get<TireResponse[]>(this.fullUrl + 'tire/user-car/' + userCarId);
    }

    getTireById(id: number): Observable<TireResponse> {
        return this.http.get<TireResponse>(this.fullUrl + 'tire/' + id);
    }



    getMyApplications() {
        return this.httpService.get('/api/applications')
            .pipe(map(value => value.body as ApplicationResponse[]));
    }

    getApplicationById(id: number) {
        return this.httpService.get('/api/applications/' + id)
            .pipe(map(value => value.body as ApplicationResponse));
    }

    submitApplication(id: number) {
        return this.httpService.postJson('/api/applications/isp/submit/' + id, null)
            .pipe(map(value => value as any));
    }

    hideApplication(id: number) {
        return this.httpService.postJson('/api/applications/isp/hide/' + id, null)
            .pipe(map(value => value as any));
    }
}
