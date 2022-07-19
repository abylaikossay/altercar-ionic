import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {BannersResponse} from '../../../models/responses/BannersResponse';
import {ApplicationResponse} from '../../../models/responses/ApplicationResponse';
import {PaginationReponse} from '../../../models/responses/pagination/PaginationReponse';

@Injectable({
    providedIn: 'root',
})
export class ApplicationControllerService {

    constructor(private httpService: HttpService) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    getAllApplications() {
        return this.httpService.get('/api/applications/isp/all')
            .pipe(map(value => value.body as PaginationReponse<ApplicationResponse>));
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
