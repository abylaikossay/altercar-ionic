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

@Injectable({
    providedIn: 'root',
})
export class UserCarControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }

    // getUserCars() {
    //     return this.httpService.get('/api/user-car')
    //         .pipe(map(value => value.body as UserCarResponse[]));
    // }

    getUserCars(): Observable<UserCarResponse[]> {
        return this.http.get<UserCarResponse[]>(this.fullUrl + 'user-car/');
    }

    getAllBrands(): Observable<CarBrandResponse[]> {
        return this.http.get<CarBrandResponse[]>(this.fullUrl + 'car-brand');
    }

    getAllModelsByBrand(id: number): Observable<CarModelResponse[]> {
        return this.http.get<CarModelResponse[]>(this.fullUrl + 'car-model/brand/' + id);
    }

    update(userCarRequest: any, id: number): Observable<any> {
        return this.http.put<any>(this.fullUrl + 'user-car/update/' + id, userCarRequest);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.fullUrl + 'user-car/delete/' + id);
    }

    add(userCarRequest: any): Observable<any> {
        return this.http.post<any>(this.fullUrl + 'user-car/add', userCarRequest);
    }

    getUserCarById(id: number): Observable<UserCarResponse> {
        return this.http.get<UserCarResponse>(this.fullUrl + 'user-car/' + id);
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
