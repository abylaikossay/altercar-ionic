import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserCarResponse } from '../../../../models/responses/UserCarResponse';
import { ActivatedRoute } from '@angular/router';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { AutoServiceService } from '../../../../services/roots/business/auto-service.service';
import { environment } from '../../../../../environments/environment';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-service-list',
    templateUrl: './service-list.page.html',
    styleUrls: ['./service-list.page.scss'],
})
export class ServiceListPage implements OnInit {
    url: Subscription;
    userCarId: number;
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Автосервисы');
    categories: any[] = [];
    photoUrl: string = environment.imageUrl + '/category-logo/';

    constructor(private route: ActivatedRoute,
                private navCtrl: NavController,
                private autoServiceService: AutoServiceService,
    ) {
    }

    ngOnInit() {
        this.getAllCategories();
        this.url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                console.log(data.id);
                this.userCarId = data.id;
                // this.getUserCar();
            }
        });
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
        console.log(category);
        console.log(this.userCarId);
        if (this.userCarId) {
            this.navCtrl.navigateForward([`tabs/home-tab/auto-service-list/${category.id}/car/${this.userCarId}`]);
        } else {
            this.navCtrl.navigateForward([`tabs/service-tab/auto-service-list/${category.id}`]);
        }
    }

    goToFavorite() {
        if (this.userCarId) {
            this.navCtrl.navigateForward([`tabs/home-tab/auto-service-list/0/car/${this.userCarId}`]);
        } else {
            this.navCtrl.navigateForward([`tabs/service-tab/auto-service-list/0`]);
        }
    }
}
