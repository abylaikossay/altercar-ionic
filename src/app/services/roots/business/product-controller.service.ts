import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {ProductResponse} from '../../../models/responses/ProductResponse';

@Injectable({
    providedIn: 'root',
})
export class ProductControllerService {

    constructor(private httpService: HttpService) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    getIspProducts() {
        return this.httpService.get('/api/products/by-isp')
            .pipe(map(value => value.body as ProductResponse[]));
    }

    getAllProductsByCategoryId(id: number) {
        return this.httpService.get('/api/products?categoryId=' + id)
            .pipe(map(value => value.body as ProductResponse[]));
    }

    getProductById(id: number) {
        return this.httpService.get('/api/products/isp/' + id)
            .pipe(map(value => value.body as ProductResponse));
    }

    getIspProductsByCategoryId(id: number) {
        return this.httpService.get('/api/products/by-isp?categoryId=' + id)
            .pipe(map(value => value.body as ProductResponse[]));
    }
}
