import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {IspResponse} from '../../../../models/responses/IspResponse';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {environment} from '../../../../../environments/environment';
import {UserResponse} from '../../../../models/responses/UserResponse';
import {AccountService} from '../../../../services/roots/business/account.service';

@Component({
    selector: 'app-author-profile',
    templateUrl: './author-profile.page.html',
    styleUrls: ['./author-profile.page.scss'],
})
export class AuthorProfilePage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.AUTHOR_PROFILE();
    userResponse: UserResponse = new UserResponse();
    ispResponse: IspResponse = new IspResponse();
    imageUrl: string = environment.imageUrl + '/isp_portfolio/';
    avatarUrl: string = environment.imageUrl + '/avatar/';

    constructor(private route: ActivatedRoute,
                private accountService: AccountService,
                private navCtrl: NavController) {
    }

    ngOnInit() {
        this.getProfile();
    }

    getProfile() {
        this.accountService.getUserInfo().toPromise().then(response => {
            this.userResponse = response;
            console.log(response);
        }).catch(error => {
            console.log(error);
        });

    }

    editUser() {
        this.navCtrl.navigateForward(['/edit-profile']);
    }
}
