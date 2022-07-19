import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
import { MoviliHeader } from '../../../models/commons/MoviliHeader';
import { SettingControllerService } from '../../../services/controllers/setting-controller.service';
import { LocationService } from '../../../services/roots/business/location.service';
import { ToastService } from '../../../services/controllers/toast.service';
import { UserLocationResponse } from '../../../models/responses/UserLocationResponse';

@Component({
    selector: 'app-common-header',
    templateUrl: './common-header.component.html',
    styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent implements OnInit {

    moviliHeader: MoviliHeader = {};
    @Input() route: string = undefined;

    @Input() isWhite: boolean = false;


    @Input()
    public set header(value: MoviliHeader) {
        this.moviliHeader = value;
        this.setModeDark();
    }

    @Output() onFinishAction: EventEmitter<any> = new EventEmitter<any>();
    emptyProfile: boolean = true;

    constructor(private settingControllerService: SettingControllerService,
                private statusBar: StatusBar,
                private locationService: LocationService,
                private navCtrl: NavController,
                private toastService: ToastService) {

    }

    ngOnInit() {

    }

    setModeDark() {
        if (!this.moviliHeader?.darkMode) {
            return;
        }

    }


    goToChat() {
        this.navCtrl.navigateForward(['chat']);
    }

    goBack() {
        if (!!this.route) {
            this.navCtrl.navigateBack([this.route]);
            return;
        }
        this.navCtrl.back({animated: true});
    }

    async openAlertLocation() {
            const userLocationResponse: UserLocationResponse[] = [
                {cityId: 1, location: 'Алматы', locationId: 1},
                {cityId: 2, location: 'Шымкент', locationId: 2}];
            const alertChooseCity = this.settingControllerService.setAlertUserLocation(userLocationResponse);
            const value = await alertChooseCity.present();
            console.log(value);
            if (value.data) {
                this.moviliHeader.location = value.data.location;
            }
        // this.locationService.getUserLocations().toPromise().then(async response => {
        //     const userLocationResponse: UserLocationResponse[] = [
        //         {cityId: 1, location: 'Алматы', locationId: 1},
        //         {cityId: 2, location: 'Шымкент', locationId: 2}];
        //     const alertChooseCity = this.settingControllerService.setAlertUserLocation(userLocationResponse);
        //     const value = await alertChooseCity.present();
        //     console.log(value);
        //     if (value.data) {
        //         this.locationService.updateUserLocation(value.data.locationId).toPromise().then(resp => {
        //             console.log(resp);
        //             this.toastService.present('Ваш адрес успешно изменен');
        //             this.moviliHeader.location = value.data.location;
        //         }).catch(error => {
        //             console.error(error);
        //         });
        //         // this.locationService.changeUserLocation(value.data)
        //     }
        // }).catch(error => {
        //     console.error(error);
        // });

    }

    addNewProduct() {
        console.log('add new product');
        this.navCtrl.navigateForward(['user-services']);
    }

    finishAction() {
        this.onFinishAction.emit();
    }
}
