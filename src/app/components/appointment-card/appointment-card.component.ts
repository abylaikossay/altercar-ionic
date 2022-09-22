import {Component, Input, OnInit} from '@angular/core';
import {AppointmentResponse} from '../../models/responses/AppointmentResponse';
import {environment} from '../../../environments/environment';
import {SettingControllerService} from '../../services/controllers/setting-controller.service';
import { PartnerService } from '../../services/roots/business/partner.service';
import { PartnerResponse } from '../../models/responses/PartnerResponse';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-appointment-card',
    templateUrl: './appointment-card.component.html',
    styleUrls: ['./appointment-card.component.scss'],
})
export class AppointmentCardComponent implements OnInit {
    @Input() appointment: AppointmentResponse;
    photoUrl: string = environment.imageUrl + '/partner-logo/';
    partner: PartnerResponse = new PartnerResponse();

    constructor(private settingControllerService: SettingControllerService,
                private partnerService: PartnerService,
                private navCtrl: NavController,
    ) {
    }

    ngOnInit() {
        console.log(this.appointment);
        this.getPartner();
    }

    getPartner() {
        this.partnerService.getById(this.appointment.partner.id).toPromise().then(resp => {
            this.partner = resp;
        }).catch(err => {
            console.error(err);
        });
    }
    async goToInfo() {
        if (this.appointment.status === 'PROCESS') {
            const alertChooseAction = this.settingControllerService.setAlertOrderAction();
            const value = await alertChooseAction.present();
            console.log(value);
            if (value.data === 'Подробнее о записи') {
                this.navCtrl.navigateForward(['/tabs/service-history-tab/info/' + this.appointment.id]);
            }
        } else {
            const alertChooseAction = this.settingControllerService.setAlertOrderFinishedAction();
            const value = await alertChooseAction.present();
            console.log(value);
            if (value.data === 'Подробнее о записи') {
                this.navCtrl.navigateForward(['/tabs/service-history-tab/info/' + this.appointment.id]);
            }
        }
    }

}
