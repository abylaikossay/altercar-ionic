import {Component, Input, OnInit} from '@angular/core';
import {SettingControllerService} from '../../services/controllers/setting-controller.service';
import {PopOverService} from '../../services/controllers/pop-over.service';
import {ApplicationResponse} from '../../models/responses/ApplicationResponse';
import {OrderResponse} from '../../models/responses/OrderResponse';
import {environment} from '../../../environments/environment';
import {NavController} from '@ionic/angular';
import {IonicControllerAbstract} from '../../models/abstracts/IonicControllerAbstract';

@Component({
    selector: 'app-history-card',
    templateUrl: './history-card.component.html',
    styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent implements OnInit {
    @Input() order: OrderResponse;
    photoUrl: string = environment.imageUrl + '/tire-photo/';

    constructor(private settingControllerService: SettingControllerService,
                private navCtrl: NavController,
    ) {
    }

    ngOnInit() {
        console.log(this.order);
    }

    async goToInfo() {
        if (this.order.status === 'PROCESS') {
            const alertChooseAction = this.settingControllerService.setAlertOrderAction();
            const value = await alertChooseAction.present();
            console.log(value);
            if (value.data === 'Подробнее о записи') {
                this.navCtrl.navigateForward(['/tabs/history-tab/info/' + this.order.id]);
            }
        } else {
            const alertChooseAction = this.settingControllerService.setAlertOrderFinishedAction();
            const value = await alertChooseAction.present();
            console.log(value);
            if (value.data === 'Подробнее о записи') {
                this.navCtrl.navigateForward(['/tabs/history-tab/info/' + this.order.id]);
            }
        }
    }
}
