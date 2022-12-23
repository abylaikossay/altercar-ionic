import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MessageService } from '../../../services/message.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../../services/roots/business/chat.service';
import { ToastService } from '../../../services/controllers/toast.service';
import { environment } from '../../../../environments/environment';
import { ChatResponse } from '../../../models/responses/ChatResponse';
import { MessageResponse } from '../../../models/responses/MessageResponse';
import { AccountService } from '../../../services/roots/business/account.service';
import { MoviliHeader } from '../../../models/commons/MoviliHeader';
import { IonContent } from '@ionic/angular/directives/proxies';

declare var SockJS;
declare var Stomp;

@Component({
    selector: 'app-chat-view',
    templateUrl: './chat-view.page.html',
    styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit {
    public stompClient;
    $url: Subscription;
    chatId: number;
    messages: MessageResponse[] = [];
    mainChat: ChatResponse = new ChatResponse();
    fullUrl: string = environment.imageUrl + '/partner-logo/';
    fileUrl: string = environment.imageUrl + '/chat-file/';
    text: any;
    userId: any;
    moviliHeader: MoviliHeader = MoviliHeader.HOME('Алматы');
    @ViewChild('scrollElement') content: IonContent;

    constructor(private navCtrl: NavController,
                private messageService: MessageService,
                private route: ActivatedRoute,
                private chatService: ChatService,
                private toastService: ToastService,
                private accountService: AccountService,
    ) {
        this.initializeWebSocketConnection();
    }

    ngOnInit() {
        this.fetchAll();
        this.getMyProfile();
        // setTimeout(() => {
        //     this.click();
        // }, 300);

    }

    getMyProfile() {
        this.accountService.getUserInfo().toPromise().then(resp => {
            console.log(resp);
            this.userId = resp.id;
        }).catch(err => {
            console.error(err);
        });
    }

    initializeWebSocketConnection() {
        const serverUrl = environment.url + '/ws';
        const ws = new SockJS(serverUrl);
        this.stompClient = Stomp.over(ws);
        const that = this;
        // tslint:disable-next-line:only-arrow-functions
        this.stompClient.connect({}, function(frame) {
            that.stompClient.subscribe(`/user/${that.chatId}/private`, (message) => {
                console.log(message);
                const parsedData = JSON.parse(message.body);
                that.messages.push(parsedData);
                setTimeout(() => {
                    that.updateScroll();
                }, 200);
                // that.click();
                // that.chats = message.body;
                // if (message.body) {
                //   // that.msg.push(message.body);
                // }
            });
        });
    }


    fetchAll() {
        this.$url = this.route.params.subscribe(data => {
            if (data.id) {
                this.chatId = data.id;
                this.chatService.getChatById(this.chatId).toPromise().then(resp => {
                    console.log(resp);
                    this.mainChat = resp;
                }).catch(err => {
                    console.log(err);
                });
                this.chatService.getMessagesById(this.chatId).toPromise().then(resp => {
                    console.log(resp);
                    this.messages = resp.content.reverse();
                    setTimeout(() => {
                        this.updateScroll();
                    }, 300);
                }).catch(err => {
                    console.error(err);
                    this.toastService.present('Ошибка при получении данных');
                });
            }

        });

    }

    noSpace(event) {
        if (event.target.value === ' ') {
            event.target.value = '';
            this.text = '';
            // this.sendForm.reset();
        }
    }

    goBack() {
        this.navCtrl.navigateBack('/chat');

    }


    updateScroll() {
        console.log('scrollToBottom');
        this.content.scrollToBottom();
    }

    sendMail() {
        if (this.text) {
            this.messageService.sendMessage(JSON.stringify({
                'content': this.text,
                'userId': this.userId,
                'id': this.chatId,
            }));
            this.text = '';
        }
        setTimeout(() => {
            this.updateScroll();
        }, 200);
    }
}
