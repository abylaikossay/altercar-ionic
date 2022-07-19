import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { switchMap, tap } from 'rxjs/operators';
import { AuthControllerService } from './auth-controller.service';
import { StorageLocalService } from '../../storages/storage-local.service';
import { ToastService } from '../../controllers/toast.service';
import { SessionRequestPassword } from '../../../models/requests/SessionRequestPassword';
import { UserTemplateRequest } from '../../../models/requests/UserTemplateRequest';
import { RegisterRequest } from '../../../models/requests/RegisterRequest';
import { UserLocationRequest } from '../../../models/requests/UserLocationRequest';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    fullUrl = environment.url + '/api/auth';

    constructor(
        private authControllerService: AuthControllerService,
        private storageLocalService: StorageLocalService,
        private authService: AuthService,
        private toastService: ToastService,
        private http: HttpClient,
        private navCtrl: NavController) {
    }


    login(sessionRequestPassword: SessionRequestPassword): Observable<any> {
        return this.http.post(this.fullUrl + '/login', sessionRequestPassword);
    }

    authorize = (perf, username) => {
        console.log(perf);
        this.storageLocalService.setRole(perf.role);
        this.authService.setSession(perf?.token);
        this.authService.setPhoneNumber(username);
        this.authService.goByMainPage();

        // localStorage.setItem(environment.apiToken, perf.token);
        // localStorage.setItem(environment.roleName, perf.role);
    };

    // async sendPassword(password: SessionRequestPassword) {
    //     let isUser = false;
    //     await this.authControllerService.sendPasswordLogin(password)
    //         .pipe(
    //             tap(async (value) => {
    //                 console.log(value);
    //                 console.log(value?.role);
    //                 isUser = true;
    //                 if (value?.role === 'ROLE_USER') {
    //                     isUser = true;
    //                     this.storageLocalService.setRole(value?.role);
    //                     await this.authService.setPhoneNumber(password.username);
    //                 }
    //                 if (value.role.name === 'ROLE_ISP') {
    //                     this.storageLocalService.setRole(value?.role?.name);
    //                     await this.authService.setPhoneNumber(value?.phoneNumber);
    //                     this.authService.setSession(value?.token);
    //                 } else {
    //                     this.toastService.present('Не верная роль!');
    //                 }
    //             }),
    //         )
    //         .toPromise();
    //     if (isUser) {
    //         await this.authService.goByMainPage();
    //     }
    // }

    async registerTemplateUser(userTemplateRequest: UserTemplateRequest) {
        await this.authControllerService.registerTemplateUser(userTemplateRequest).toPromise()
            .then(response => {
                console.log(response);
                this.storageLocalService.setAuthorizationPhoneNumber(userTemplateRequest.phone);
                this.navCtrl.navigateForward(['/main/sms']);
            }).catch(err => {
                if (err.error) {
                    this.toastService.present(err.error.debugMessage);
                } else {
                    this.toastService.present('Ошибка сервера');
                }
                console.log(err);
            });
    }

    async checkUserCode(activationCode: string, phone: string) {
        await this.authControllerService.checkActivationCode(activationCode, phone).toPromise()
            .then(response => {
                console.log(response);
                this.storageLocalService.setActivationCode(activationCode);
                this.toastService.present(response.message);
                this.navCtrl.navigateForward(['/main/login']);
            }).catch(error => {
                if (error.error) {
                    this.toastService.present(error.error.debugMessage);
                } else {
                }
                console.log(error);
            });
    }

    async registerUser(registerRequest: RegisterRequest) {
        await this.authControllerService.confirmRegister(registerRequest).toPromise()
            .then(async response => {
                const sessionRequestPassword: SessionRequestPassword = {
                    password: registerRequest.password,
                    username: registerRequest.phone,
                };
                await this.authControllerService.sendPasswordLogin(sessionRequestPassword)
                    .toPromise().then(async value => {
                        // this.storageLocalService.setRole(value?.role?.name);
                        // await this.authService.setPhoneNumber(value?.phoneNumber);
                        // this.authService.setSession(value?.token);
                    }).catch(error => {
                        this.toastService.present('Произошла ошибка, повторите позже.');
                        return;
                    });
                await this.navCtrl.navigateForward(['/main/location']);
            }).catch(err => {
                console.log(err);
                if (err.error) {
                    this.toastService.present(err.error.message);
                } else {
                    this.toastService.present('Ошибка сервера');
                }
            });
    }


    changeUserLocation(userLocationRequest: UserLocationRequest) {
        return this.authControllerService.setUserLocation(userLocationRequest);
    }

    async logout() {
        this.authService.clearAllSession();
        // this.navCtrl.navigateRoot(['/main/login']);
    }

}
