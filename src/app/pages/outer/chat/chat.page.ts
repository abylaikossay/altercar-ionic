import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MoviliHeader } from '../../../models/commons/MoviliHeader';
import { IonRefresher, NavController } from '@ionic/angular';
import { ChatService } from '../../../services/roots/business/chat.service';
import { ToastService } from '../../../services/controllers/toast.service';
import { Pagination } from '../../../models/pagination/pagination';
import { ChatResponse } from '../../../models/responses/ChatResponse';
import { ResolveOnListenerService } from '../../../services/roots/resolve-on-listener.service';
import { RefreshListener } from '../../../models/commons/RefreshListener';
import { getRouterUrl } from '../../../shares/util-method';
import { ResolveControlService } from '../../../services/roots/resolve-control.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, RefreshListener, OnDestroy {
    moviliHeader: MoviliHeader = MoviliHeader.SMS();
    pagination: Pagination<ChatResponse>;
    chats: ChatResponse[] = [];
    lastDate: any = null;
    @ViewChild('ionRefresher') ionRefresh: IonRefresher;

    constructor(private navCtrl: NavController,
                private toastService: ToastService,
                private chatService: ChatService,
                private resolveControlService: ResolveControlService,
                private resolveOnListener: ResolveOnListenerService) {
        this.lastDate = new Date();
    }

    ngOnInit() {
        this.fetchAll();
    }

    ngOnDestroy(): void {
        this.resolveOnListener.delete('chat');
    }

    ionViewWillEnter() {
        this.resolveOnListener.add('chat', this.call.bind(this));
    }

    ionViewDidLeave() {
        this.resolveOnListener.delete('chat');
    }

    call() {
        this.fetchAll();
    }

    fetchAll() {
        this.chatService.getAll().toPromise()
            .then(resp => {
                console.log(resp);
                this.pagination = resp;
                this.chats = resp.content;
            }).catch(err => {
            this.toastService.present('Ошибка при получении чатов!');
            console.log(err);
        });
    }

    goToChat(chat: any) {
        this.navCtrl.navigateForward(['/chat-view/' + chat.id]);
    }

    refreshPage(event) {
        this.resolveOnListener.call();
        this.resolveControlService.forceRunCurrentGuards(this.ionRefresh);
    }

    goBack() {
        this.navCtrl.navigateBack('/tabs/home-tab');
    }
}
