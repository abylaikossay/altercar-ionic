import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SettingControllerService} from '../../../../services/controllers/setting-controller.service';
import {LoginService} from '../../../../services/roots/business/login.service';
import {UserLocationRequest} from '../../../../models/requests/UserLocationRequest';
import {map, take} from 'rxjs/operators';
import {OnInitResolver} from '../../../../models/abstracts/OnInitResolver';
import {LocationResponse} from '../../../../models/responses/LocationResponse';

@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, OnInitResolver {
    moviliHeader: MoviliHeader = MoviliHeader.SMS();
    cityList: any;
    city: LocationResponse;
    cityName: any = '';
    address: any;

    constructor(private navCtrl: NavController,
                private route: ActivatedRoute,
                private settingControllerService: SettingControllerService,
                private loginService: LoginService,
    ) {
        this.initResolvers();
    }

    ngOnInit() {
    }

    submitCity() {
        console.log(this.city);
        console.log(this.address);
        const locationRequest: UserLocationRequest = {
            cityId: this.city.id,
            location: this.address,
        };
        this.loginService.changeUserLocation(locationRequest).subscribe(response => {
            console.log(response);
        }, error => {
            console.error(error);
        });
        this.navCtrl.navigateForward(['/tabs/home-tab']);
    }

    initResolvers() {
        this.route.data
            .pipe(map(value => value.cityList),
                take(1)).subscribe(value => {
            this.cityList = value;
            console.log(this.cityList);
        });
    }

    async openAlertCity() {
        const alertChooseCity = this.settingControllerService.setAlertSelectCity(this.cityList);
        const value = await alertChooseCity.present();
        console.log(value);
        if (value.data) {
            this.city = value?.data || null;
            this.cityName = value?.data?.ruName || '';
        }
        // this.form.get('cityLink').setValue((value?.data?.title || null));
    }
}
