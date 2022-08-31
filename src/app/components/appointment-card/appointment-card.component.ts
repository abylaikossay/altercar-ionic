import {Component, Input, OnInit} from '@angular/core';
import {AppointmentResponse} from '../../models/responses/AppointmentResponse';
import {environment} from '../../../environments/environment';
import {SettingControllerService} from '../../services/controllers/setting-controller.service';

@Component({
    selector: 'app-appointment-card',
    templateUrl: './appointment-card.component.html',
    styleUrls: ['./appointment-card.component.scss'],
})
export class AppointmentCardComponent implements OnInit {
    @Input() appointment: AppointmentResponse;
    photoUrl: string = environment.imageUrl + '/tire-photo/';

    constructor(private settingControllerService: SettingControllerService,
    ) {
    }

    ngOnInit() {
        console.log(this.appointment);

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
