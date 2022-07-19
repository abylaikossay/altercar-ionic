import { Injectable } from '@angular/core';
import {IspControllerService} from './isp-controller.service';
import { AccountControllerService } from './account-controller.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private accountControllerService: AccountControllerService) { }


  getUserInfo() {
      return this.accountControllerService.getUserInfo();
  }
}
