import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PartnerResponse } from '../../models/responses/PartnerResponse';
import { SettingControllerService } from '../../services/controllers/setting-controller.service';
import { PartnerService } from '../../services/roots/business/partner.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-purchase-card',
    templateUrl: './purchase-card.component.html',
    styleUrls: ['./purchase-card.component.scss'],
})
export class PurchaseCardComponent implements OnInit {
    @Input() purchase: any;
    photoUrl: string = environment.imageUrl + '/partner-logo/';
    partner: PartnerResponse = new PartnerResponse();

    constructor(private settingControllerService: SettingControllerService,
                private partnerService: PartnerService,
                private navCtrl: NavController,
    ) {
    }

    ngOnInit() {
        this.getPartner();
    }
    getPartner() {
        this.partnerService.getById(this.purchase.partner).toPromise().then(resp => {
            this.partner = resp;
            console.log(resp);
        }).catch(err => {
            console.error(err);
        });
    }
    async goToInfo() {
        const alertChooseAction = this.settingControllerService.setAlertOrderFinishedAction();
        const value = await alertChooseAction.present();
        console.log(value);
        if (value.data === 'Подробнее о записи') {
            this.navCtrl.navigateForward(['/tabs/history-tab/purchase/' + this.purchase.id]);
        }
    }
}
