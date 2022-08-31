import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpService} from '../http.service';
import {environment} from '../../../../environments/environment';
import {TireCatalogTypeEnum} from '../../../models/responses/TireCatalogTypeEnum';
import {TireCatalogResponse} from '../../../models/responses/TireCatalogResponse';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TireResponse } from '../../../models/responses/TireResponse';

@Injectable({
    providedIn: 'root',
})
export class CatalogControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
    }

    getByType(tireCatalogTypeEnum: TireCatalogTypeEnum): Observable<TireCatalogResponse[]> {
        return this.http.get<TireCatalogResponse[]>(this.fullUrl + 'tire-catalog/type?type=' + tireCatalogTypeEnum);
    }



}
