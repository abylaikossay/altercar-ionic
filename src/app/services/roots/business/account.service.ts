import {Injectable} from '@angular/core';
import {IspControllerService} from './isp-controller.service';
import {AccountControllerService} from './account-controller.service';
import {UserEditRequest} from '../../../models/requests/UserEditRequest';

@Injectable({
    providedIn: 'root',
})
export class AccountService {

    constructor(private accountControllerService: AccountControllerService) {
    }


    getUserInfo() {
        return this.accountControllerService.getUserInfo();
    }

    updateProfile(userRequest: UserEditRequest) {
        return this.accountControllerService.updateProfile(userRequest);
    }
}
