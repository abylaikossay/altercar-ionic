import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {
    this.initializeWebSocketConnection();
  }
  public stompClient;
  public chats: any[] = [];
  initializeWebSocketConnection() {
    const serverUrl = environment.url + '/ws';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/message', (message) => {
      });
    });
  }

  sendMessage(message) {
    this.stompClient.send('/app/private-message', {}, (message));
  }
}
