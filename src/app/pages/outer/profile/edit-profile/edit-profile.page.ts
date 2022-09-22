import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {environment} from '../../../../../environments/environment';
import {AccountService} from '../../../../services/roots/business/account.service';
import {NavController} from '@ionic/angular';
import {UserResponse} from '../../../../models/responses/UserResponse';
import {SettingControllerService} from '../../../../services/controllers/setting-controller.service';
import {UserEditRequest} from '../../../../models/requests/UserEditRequest';
import {UserLocationResponse} from '../../../../models/responses/UserLocationResponse';
import {ToastService} from '../../../../services/controllers/toast.service';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.page.html',
    styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.EDIT_PROFILE();
    userResponse: UserResponse = new UserResponse();
    imageUrl: string = environment.imageUrl + '/isp_portfolio/';
    userRequest: UserEditRequest = new UserEditRequest();

    constructor(private accountService: AccountService,
                private navCtrl: NavController,
                private toastService: ToastService,
                private settingControllerService: SettingControllerService,
    ) {
    }

    ngOnInit() {
        this.getUserInfo();
    }

    getUserInfo() {
        this.accountService.getUserInfo().toPromise().then(response => {
            this.userResponse = response;
            if (this.userResponse.gender === 'MALE') {
                this.userResponse.genderName = 'Мужской';
            } else if (this.userResponse.gender === 'FEMALE') {
                this.userResponse.genderName = 'Женский';
            } else {
                this.userResponse.genderName = 'Не определенно';
            }
            this.userResponse.cityName = 'Алматы';
            console.log(this.userResponse);
        }).catch(error => {
            console.log(error);
        });
    }


    editPhoto() {
        console.log('edit photo');
    }


    saveUserProfile() {
        this.userRequest.name = this.userResponse.name;
        this.userRequest.surname = this.userResponse.surname;
        this.userRequest.gender = this.userResponse.gender;
        this.userRequest.email = this.userResponse.email;
        this.userRequest.cityId = this.userResponse.cityId;
        this.userRequest.language = this.userResponse.language;
        this.accountService.updateProfile(this.userRequest).toPromise().then(resp => {
            console.log(resp);
            this.toastService.present('Профиль успешно обновлен');
            this.navCtrl.navigateRoot([`tabs/profile-tab`]);
        }).catch( err => {
            console.error(err);
            this.toastService.present('Ошибка сервера!');
        });


    }

    async openAlertGender() {
        const alertChooseCity = this.settingControllerService.setAlertChooseGender();
        const value = await alertChooseCity.present();
        console.log(value);
        if (value.data) {
            this.userResponse.genderName = value?.data || null;
        }
        if (value.data === 'Мужской') {
            this.userResponse.gender = 'MALE';
        } else if (value.data === 'Женский') {
            this.userResponse.gender = 'FEMALE';
        } else {
            this.userResponse.gender = 'UNI';
        }
    }

    async openAlertLocation() {
        const userLocationResponse: UserLocationResponse[] =
            [
                {cityId: 1, location: 'Алматы', locationId: 1},
                {cityId: 2, location: 'Шымкент', locationId: 2},
            ];
        const alertChooseCity = this.settingControllerService.setAlertUserLocation(userLocationResponse);
        const value = await alertChooseCity.present();
        console.log(value);
        if (value.data) {
            this.userResponse.cityName = value.data.location;
        }

    }


}
