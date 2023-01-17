import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SettingControllerService } from '../../services/controllers/setting-controller.service';
import { PartnerService } from '../../services/roots/business/partner.service';
import { NavController } from '@ionic/angular';
import { RequestStatusEnum } from '../../models/responses/RequestStatusEnum';

@Component({
    selector: 'app-request-card',
    templateUrl: './request-card.component.html',
    styleUrls: ['./request-card.component.scss'],
})
export class RequestCardComponent implements OnInit {
    @Input() request: any;
    photoUrl: string = environment.imageUrl + '/partner-logo/';
    public get requestStatusEnum(): typeof RequestStatusEnum {
        return RequestStatusEnum;
    }
    constructor(private settingControllerService: SettingControllerService,
                private partnerService: PartnerService,
                private navCtrl: NavController,
    ) {
    }

    ngOnInit() {
        console.log(this.request);
    }

    async goToInfo() {
        const alertChooseAction = this.settingControllerService.setAlertOrderFinishedAction();
        const value = await alertChooseAction.present();
        console.log(value);
        if (value.data === 'Подробнее о записи') {
            this.navCtrl.navigateForward(['/tabs/service-history-tab/request-info/' + this.request.id]);
        }
    }

}
