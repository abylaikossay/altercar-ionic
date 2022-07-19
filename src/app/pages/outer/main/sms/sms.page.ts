import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {NavController} from '@ionic/angular';
import {StorageLocalService} from '../../../../services/storages/storage-local.service';
import {LoginService} from '../../../../services/roots/business/login.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.SMS();
  phoneNumber: string = '';
  smsCode: any = '';
  constructor(private navCtrl: NavController,
              private storageLocalService: StorageLocalService,
              private loginService: LoginService) {
    this.phoneNumber = '+' + storageLocalService.getAuthorizationPhoneNumber();
  }

  ngOnInit() {
  }

  goToLocation() {
    console.log(this.smsCode);
    console.log(this.storageLocalService.getAuthorizationPhoneNumber());
    this.loginService.checkUserCode(this.smsCode, this.storageLocalService.getAuthorizationPhoneNumber());
    // this.navCtrl.navigateForward(['/password-confirm']);

  }

  resendCode() {

  }
}
