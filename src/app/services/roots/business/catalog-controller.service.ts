import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpService} from '../http.service';
import {environment} from '../../../../environments/environment';
import {ServiceResponse} from '../../../models/responses/ServiceResponse';
import {TireCatalogTypeEnum} from '../../../models/responses/TireCatalogTypeEnum';
import {TireCatalogResponse} from '../../../models/responses/TireCatalogResponse';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CatalogControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }


    getCatalogByType(type: TireCatalogTypeEnum) {
        return this.httpService.get('/api/tire-catalog/type?type=' + type)
            .pipe(map(value => value.body as TireCatalogResponse[]));
    }

}
