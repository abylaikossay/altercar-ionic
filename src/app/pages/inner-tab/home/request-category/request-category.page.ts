import { Component, OnInit } from '@angular/core';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { environment } from '../../../../../environments/environment';
import { NavController } from '@ionic/angular';
import { AutoServiceService } from '../../../../services/roots/business/auto-service.service';

@Component({
    selector: 'app-request-category',
    templateUrl: './request-category.page.html',
    styleUrls: ['./request-category.page.scss'],
})
export class RequestCategoryPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Создать запрос');
    categories: any[] = [];
    photoUrl: string = environment.imageUrl + '/category-logo/';

    constructor(private navCtrl: NavController,
                private autoServiceService: AutoServiceService,
    ) {
    }

    ngOnInit() {
        this.getAllCategories();
    }

    getAllCategories() {
        this.autoServiceService.getAllCategories().toPromise().then(resp => {
            console.log(resp);
            this.categories = resp;
        }).catch(err => {
            console.log(err);
        });
    }

    goToServices(category: any) {
        this.navCtrl.navigateForward([`tabs/service-tab/create-request/${category.id}`]);
    }

    goToFavorite() {
        this.navCtrl.navigateForward([`tabs/service-tab/create-request/0`]);
    }

}
