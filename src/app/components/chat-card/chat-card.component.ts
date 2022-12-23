import { Component, Input, OnInit } from '@angular/core';
import { ChatResponse } from '../../models/responses/ChatResponse';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss'],
})
export class ChatCardComponent implements OnInit {
  @Input() chat: ChatResponse;
  fullUrl: string = environment.imageUrl + '/partner-logo/';

  constructor() {
  }

  ngOnInit() {
  }

}
