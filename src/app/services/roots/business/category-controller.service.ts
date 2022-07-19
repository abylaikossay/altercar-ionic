import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpService} from '../http.service';
import {environment} from '../../../../environments/environment';
import {ServiceResponse} from '../../../models/responses/ServiceResponse';

@Injectable({
    providedIn: 'root',
})
export class CategoryControllerService {
    constructor(private httpService: HttpService) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }


    getCategoriesByService(id: number) {
        return this.httpService.get('/api/services/categories?uslugaId=' + id)
            .pipe(map(value => value.body as ServiceResponse));
    }

    getProductsByCategory(id: number) {
        return this.httpService.get('/api/products/?categoryId=' + id)
            .pipe(map(value => value.body));
    }

    getIspCategories() {
        return this.httpService.get('/api/categories/isp')
            .pipe(map(value => value.body));
    }

    addTemplateCategories(ids: string) {
        return this.httpService.postJson('/api/categories/template?categoryIds=' + ids, null)
            .pipe(map(value => value.body));
    }

    getIspTemplateCategories() {
        return this.httpService.get('/api/categories/template')
            .pipe(map(value => value.body));
    }

}
