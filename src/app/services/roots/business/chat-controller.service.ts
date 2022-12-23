import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TireOrderRequest} from '../../../models/requests/TireOrderRequest';
import { Pagination } from '../../../models/pagination/pagination';
import { ChatResponse } from '../../../models/responses/ChatResponse';
import { MessageResponse } from '../../../models/responses/MessageResponse';

@Injectable({
    providedIn: 'root',
})
export class ChatControllerService {
    fullUrl = environment.url + '/api/';

    constructor(private httpService: HttpService,
                private http: HttpClient) {
        this.httpService = this.httpService.setPrefix(environment.url);
    }


    public getAll(page?, size?, sortBy?, search?): Observable<Pagination<ChatResponse>> {
        if (!page) {
            page = 0;
        }
        if (!size) {
            size = 10000;
        }
        if (!sortBy) {
            sortBy = 'desc-updatedAt';
        }
        if (!search) {
            search = '';
        }
        return this.http.get<Pagination<ChatResponse>>(this.fullUrl + 'chat/all/user', {
            params: {
                page,
                size,
                sortBy,
                search,
            },
        });
    }

    public getMessagesById(chatId: number, page?, size?, sortBy?, search?): Observable<Pagination<MessageResponse>> {
        if (!page) {
            page = 0;
        }
        if (!size) {
            size = 5000;
        }
        if (!sortBy) {
            sortBy = 'desc-createdAt';
        }
        if (!search) {
            search = '';
        }
        return this.http.get<Pagination<MessageResponse>>(this.fullUrl + 'chat/all/messages/' + chatId, {
            params: {
                page,
                size,
                sortBy,
                search,
            },
        });
    }


    public getChatById(id: number): Observable<ChatResponse> {
        return this.http.get<ChatResponse>(this.fullUrl + `chat/${id}`);
    }


    createOrder(tireOrderRequest: TireOrderRequest): Observable<any> {
        return this.http.post(this.fullUrl + 'order/tire', tireOrderRequest);
    }
}
