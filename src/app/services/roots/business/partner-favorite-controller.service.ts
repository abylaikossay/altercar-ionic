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
import { PartnerCategoryJobResponse } from '../../../models/responses/PartnerCategoryJobResponse';

@Injectable({
    providedIn: 'root',
})
export class PartnerFavoriteControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    addToFavorite(partnerId: number) {
        return this.http.post(this.fullUrl + 'partner-favorite/add/' + partnerId, null);
    }

    removeFromFavorite(partnerId: number) {
        return this.http.put(this.fullUrl + 'partner-favorite/remove/' + partnerId, null);
    }

}
