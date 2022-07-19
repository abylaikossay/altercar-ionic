import {Component, Input, OnInit} from '@angular/core';
import {SettingControllerService} from '../../services/controllers/setting-controller.service';
import {PopOverService} from '../../services/controllers/pop-over.service';
import {ApplicationResponse} from '../../models/responses/ApplicationResponse';
import {OrderResponse} from '../../models/responses/OrderResponse';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent implements OnInit {
  @Input() order: OrderResponse;
  photoUrl: string = environment.imageUrl + '/tire-photo/';
  constructor(private settingControllerService: SettingControllerService,
              ) { }

  ngOnInit() {
    console.log(this.order);
  }

  async goToInfo() {
    const alertChooseAction = this.settingControllerService.setAlertOrderAction();
    const value = await alertChooseAction.present();
    console.log(value);
    if (value.data === 'Подробнее о записи') {
      console.log('go to info');
    }
  }
}
