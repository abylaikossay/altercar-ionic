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

@Injectable({
    providedIn: 'root',
})
export class AutoServiceControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }


    getAllCategories(): Observable<any> {
        return this.http.get<any>(this.fullUrl + 'category');
    }

    getPartnersByCategoryId(id: number): Observable<any> {
        return this.http.get<any>(this.fullUrl + 'category/user/partners/' + id);
    }

    getFavoritePartners(): Observable<any> {
        return this.http.get<any>(this.fullUrl + 'partner-favorite');
    }

    getCategoryById(id: number): Observable<any> {
        return this.http.get<any>(this.fullUrl + 'category/' + id);
    }

    getAllTiresByUserCar(userCarId: number): Observable<TireResponse[]> {
        return this.http.get<TireResponse[]>(this.fullUrl + 'tire/user-car/' + userCarId);
    }

    getTireById(id: number): Observable<TireResponse> {
        return this.http.get<TireResponse>(this.fullUrl + 'tire/' + id);
    }
}
