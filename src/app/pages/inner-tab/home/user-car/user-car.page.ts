import { Component, OnInit } from '@angular/core';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserCarService } from '../../../../services/roots/business/user-car.service';
import { UserCarResponse } from '../../../../models/responses/UserCarResponse';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-user-car',
    templateUrl: './user-car.page.html',
    styleUrls: ['./user-car.page.scss'],
})
export class UserCarPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Сервисы');
    url: Subscription;
    userCarId: number;
    services: any[] = [
        {
            id: 'AUTOPARTS',
            name: 'Запчасти',
            imageName: 'autoparts.png',
        },
        {
            id: 'SERVICES',
            name: 'Автосервисы',
            imageName: 'service.jpg',
        },
        {
            id: 'HELP',
            name: 'Срочная помощь',
            imageName: 'help.jpg',
        },

        {
            id: 'TIRES',
            name: 'Шины',
            imageName: 'tire.jpg',
        },

        {
            id: 'CAR_WASH',
            name: 'Автомойки',
            imageName: 'car-wash.jpg',
        },
    ];
    userCar: UserCarResponse = new UserCarResponse();

    constructor(private route: ActivatedRoute,
                private userCarService: UserCarService,
                private navCtrl: NavController,
    ) {
    }

    ngOnInit() {
        this.url = this.route.params.subscribe(data => {
            if (data.id) {
                this.userCarId = data.id;
                this.getUserCar();
            }
        });
    }

    getUserCar() {
        this.userCarService.getCarById(this.userCarId).toPromise().then(resp => {
            console.log(resp);
            this.userCar = resp;
            this.moviliHeader = MoviliHeader.TITLE_WITH_BACK(resp.carBrand.name + ' ' + resp.carModel.name);
        }).catch(err => {
            console.log(err);
        });
    }

    goToType(service: any) {
        console.log(service);
        switch (service.id) {
            case 'TIRES':
                if (this.userCarId) {
                    this.navCtrl.navigateForward('/tabs/home-tab/tire-list/' + this.userCarId);
                } else {
                    this.navCtrl.navigateForward('/tabs/service-tab/tire-list');
                }
                break;
            case 'SERVICES':
                if (this.userCarId) {
                    this.navCtrl.navigateForward('/tabs/home-tab/service-list/' + this.userCarId);
                } else {
                    this.navCtrl.navigateForward('/tabs/service-tab/service-list');
                }
                break;
            case 'CAR_WASH':
                if (this.userCarId) {
                    this.navCtrl.navigateForward('/appointment-info/4/user-car/' + this.userCarId);
                } else {
                    this.navCtrl.navigateForward('/appointment-info/4');
                }
                break;
            case 'AUTOPARTS':
                console.log('test AUTOPARTS');
                break;
            case 'HELP':
                console.log('test HELP');
                break;
        }
        // if (service.id === 'TIRES') {
        //     if (this.userCarId) {
        //         this.navCtrl.navigateForward('/tabs/home-tab/tire-list/' + this.userCarId);
        //     } else {
        //         this.navCtrl.navigateForward('/tabs/home-tab/tire-list/');
        //     }
        // } else if (service.id === 'SERVICES') {
        //     if (this.userCarId) {
        //         this.navCtrl.navigateForward('/tabs/home-tab/service-list/' + this.userCarId);
        //     } else {
        //         this.navCtrl.navigateForward('/tabs/home-tab/service-list/');
        //     }
        // } else if (service.id === 'AUTOPARTS') {
        //     console.log('test AUTOPARTS');
        // } else if (service.id === 'HELP') {
        //     console.log('test HELP');
        // }
    }
}
