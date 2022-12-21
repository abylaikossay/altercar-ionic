import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import { MessageService } from '../../../services/message.service';
@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit {
  title = 'websocket-frontend';
  input;

  constructor(private navCtrl: NavController,
              private messageService: MessageService) { }
  ngOnInit() {
  }
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }

  goBack() {
    this.navCtrl.navigateBack('/chat');

  }
}
