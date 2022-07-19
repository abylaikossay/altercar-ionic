import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.page.html',
  styleUrls: ['./chat-view.page.scss'],
})
export class ChatViewPage implements OnInit {
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/chat');

  }
}
