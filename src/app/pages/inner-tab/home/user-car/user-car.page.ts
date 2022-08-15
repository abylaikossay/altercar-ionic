import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {UserCarService} from '../../../../services/roots/business/user-car.service';
import {UserCarResponse} from '../../../../models/responses/UserCarResponse';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-user-car',
    templateUrl: './user-car.page.html',
    styleUrls: ['./user-car.page.scss'],
})
export class UserCarPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Моя машина');
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
        if (service.id === 'TIRES') {
            this.navCtrl.navigateForward('/tabs/home-tab/tire-list/' + this.userCarId);
        } else if (service.id === 'SERVICES') {
            this.navCtrl.navigateForward('/tabs/home-tab/service-list/' + this.userCarId);
        }
    }
}
