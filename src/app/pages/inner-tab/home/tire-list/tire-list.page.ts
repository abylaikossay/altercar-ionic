import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserCarService } from '../../../../services/roots/business/user-car.service';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { UserCarResponse } from '../../../../models/responses/UserCarResponse';
import { TireService } from '../../../../services/roots/business/tire.service';
import { TireResponse } from '../../../../models/responses/TireResponse';
import { SettingControllerService } from '../../../../services/controllers/setting-controller.service';
import { ModalController, NavController } from '@ionic/angular';
import { TireFilterRequest } from '../../../../models/requests/TireFilterRequest';
import { FilterComponent } from '../../../../components/filter/filter.component';

@Component({
    selector: 'app-tire-list',
    templateUrl: './tire-list.page.html',
    styleUrls: ['./tire-list.page.scss'],
})
export class TireListPage implements OnInit {
    url: Subscription;
    userCarId: number;
    userCar: UserCarResponse = new UserCarResponse();
    tireResponses: TireResponse[] = [];
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Все шины');
    tireFilter: TireFilterRequest = new TireFilterRequest();

    constructor(private route: ActivatedRoute,
                private userCarService: UserCarService,
                private tireService: TireService,
                private modalCtrl: ModalController,
                // private settingControllerService: SettingControllerService,
                private navCtrl: NavController,
    ) {
    }

    ngOnInit() {
        this.url = this.route.params.subscribe(data => {
            if (data.id) {
                console.log(data.id);
                this.userCarId = data.id;
                this.getUserCar();
                this.getAllCarTires();
            } else {
                this.getAllTires();
            }
        });
    }

    getAllCarTires() {
        this.tireService.getAllTiresByUserCar(this.userCarId).toPromise().then(resp => {
            console.log(resp);
            this.tireResponses = resp;
        }).catch(err => {
            console.log(err);
        });
    }


    getAllTires() {
        this.tireService.getAllTires().toPromise().then(resp => {
            console.log(resp);
            this.tireResponses = resp;
        }).catch(err => {
            console.log(err);
        });
    }

    getUserCar() {
        this.userCarService.getCarById(this.userCarId).toPromise().then(resp => {
            console.log(resp);
            this.userCar = resp;
            this.moviliHeader = MoviliHeader.TITLE_WITH_BACK('Шины для ' + resp.carBrand.name + ' ' + resp.carModel.name);
        }).catch(err => {
            console.log(err);
        });
    }

    async goToFilter() {
        const modal = await this.modalCtrl.create({
            component: FilterComponent,
            componentProps: { tireFilter: this.tireFilter},
        });
        modal.present();

        const {data, role} = await modal.onWillDismiss();
        if (data) {
            this.tireFilter = data;
            console.log(this.tireFilter);
        }
    }

    goToTire(tireResponse: TireResponse) {
        console.log(tireResponse);
        if (this.userCarId) {
            this.navCtrl.navigateForward([`tabs/home-tab/tire/${tireResponse.id}`]);
        } else {
            this.navCtrl.navigateForward([`tabs/service-tab/tire/${tireResponse.id}`]);
        }
    }
}
