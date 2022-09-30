import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ToastService} from '../../../../services/controllers/toast.service';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {SessionRequestPassword} from '../../../../models/requests/SessionRequestPassword';
import {to} from '../../../../shares/util-method';
import {LoginService} from '../../../../services/roots/business/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.LOGIN_PAGE();
    phoneNumber: any = '';
    password: any = '';

    constructor(
        private navCtrl: NavController,
        private toastService: ToastService,
        private loginService: LoginService,
    ) {
    }

    ngOnInit() {
    }

    forgotPassword() {
    }

    async login() {
        if (!this.password?.length || !this.phoneNumber?.length) {
            await this.toastService.present('Поле Пароль и Номер телефона не должны быть пустыми');
            return;
        }
        const sessionRequestPassword: SessionRequestPassword = {
            password: this.password,
            username: '7' + this.phoneNumber,
        };
        this.loginService.login(sessionRequestPassword).toPromise().then(resp => {
            console.log(resp);
            this.loginService.authorize(resp, sessionRequestPassword.username);
        }).catch(err => {
            console.log(err);
            this.toastService.present('Не верный логин или пароль!');
        });
        // const [error, response] = await to(this.loginService.sendPassword(sessionRequestPassword));
        // if (error) {
        //     this.toastService.present('Произошла ошибка, повторите позже.');
        //     return;
        // }
    }

    changePhoneNumber($event: any) {
        if ($event === undefined || $event === '') {
            setTimeout(() => {
                (document as any).getElementById('phoneNumberId').value = '+7 ';
            }, 0);
        }
    }

    goToRegister() {
        this.navCtrl.navigateForward(['/main/registration']);
    }
}
