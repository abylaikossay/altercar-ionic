import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {NavController} from '@ionic/angular';
import {LoginService} from '../../../../services/roots/business/login.service';
import {StorageLocalService} from '../../../../services/storages/storage-local.service';
import {RegisterRequest} from '../../../../models/requests/RegisterRequest';

@Component({
  selector: 'app-password-confirm',
  templateUrl: './password-confirm.page.html',
  styleUrls: ['./password-confirm.page.scss'],
})
export class PasswordConfirmPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.LOGIN();
  password: any = '';
  confirmPassword: any = '';

  constructor(private navCtrl: NavController,
              private loginService: LoginService,
              private storageLocalService: StorageLocalService) {
  }

  ngOnInit() {
  }

  registerUser() {
    const registerRequest: RegisterRequest = {
      activationCode: this.storageLocalService.getActivationCode(),
      password: this.password,
      phone: this.storageLocalService.getAuthorizationPhoneNumber(),
    };
    this.loginService.registerUser(registerRequest);
  }
}
