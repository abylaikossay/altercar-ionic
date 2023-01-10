import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RefreshCacheService } from './refresh-cache.service';
import { TargetCacheService } from './target-cache.service';

const maxAge = 30000;

@Injectable()
export class RequestCacheService {

    cache = new Map();

    constructor(private targetCacheService: TargetCacheService,
                private refreshCacheService: RefreshCacheService) {
    }

    get(req: HttpRequest<any>): HttpResponse<any> | undefined {

        if (req.method !== 'GET') {
            return undefined;
        }

        if (this.refreshCacheService.getResolverLength() > 0) {
            this.refreshCacheService.decreseResolverLength();
            return undefined;
        }

        if (this.exceptMethod(req.url)) {
            return undefined;
        }
        if (this.targetCacheService.clear(req.url)) {
            return undefined;
        }
        const url = req.urlWithParams;
        const cached = this.cache.get(url);


        if (!cached) {
            return undefined;
        }

        const isExpired = cached.lastRead < (Date.now() - maxAge);
        const expired = isExpired ? 'expired ' : '';
        return cached.response;
    }

    put(req: HttpRequest<any>, response: HttpResponse<any>): void {

        if (req.method !== 'GET') {
            return undefined;
        }
        if (this.exceptMethod(req.url)) {
            return undefined;
        }
        const url = req.urlWithParams;
        const entry = {url, response, lastRead: Date.now()};
        this.cache.set(url, entry);

        const expired = Date.now() - maxAge;
        this.cache.forEach(expiredEntry => {
            if (expiredEntry.lastRead < expired) {
                this.cache.delete(expiredEntry.url);
            }
        });
    }

    clearCache() {
        this.cache.clear();
    }

    exceptMethod(url: string) {
        /*
        * нужно добавлять только те методы, которые работают под капотом и не роляют никакой роли в бизнес логике
        * */
        //todo add history page api
        const methods: string[] = [
            '/api/categories/template',
            '/api/applications',
            '/api/user-car',
            '/api/order/all',
            '/api/partner-favorite',
            '/api/category/user/partners',
            '/api/purchase/order',
            '/api/chat/all',
            '/api/user-car',
            '/api/account',
            '/api/appointment',
            // '/api/tire/all',
            '/api/applications/isp/all',
            '/order/create/',
            '/client/profile/',
            '/manager/order-list/',
            '/order/list/',
        ];
        return methods.some((item: string) => {
            return url.includes((environment.url + item));
        });
    }
}
