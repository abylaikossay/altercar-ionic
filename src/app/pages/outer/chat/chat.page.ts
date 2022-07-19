import {Component, Input, OnInit} from '@angular/core';
import { MoviliHeader } from '../../../models/commons/MoviliHeader';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
    chats: any = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    moviliHeader: MoviliHeader = MoviliHeader.SMS();

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    goToChat(chat: any) {
        console.log(chat);
        this.navCtrl.navigateForward(['/chat-view']);
    }

    goBack() {
        this.navCtrl.navigateBack('/tabs/home-tab');
    }
}
