import { Injectable } from '@angular/core';
import { ChatControllerService } from './chat-controller.service';

@Injectable({
    providedIn: 'root',
})
export class ChatService {

    constructor(private chatControllerService: ChatControllerService) {
    }

    // getOrder(id: number) {
    //     return this.orderControllerService.getOrder(id);
    // }

    getAll(page?, size?, sortBy?, search?) {
        return this.chatControllerService.getAll(page, size, sortBy, search);
    }

    getMessagesById(chatId: number, page?, size?, sortBy?, search?) {
        return this.chatControllerService.getMessagesById(chatId, page, size, sortBy, search);
    }
    getChatById(chatId: number) {
        return this.chatControllerService.getChatById(chatId);
    }

}
