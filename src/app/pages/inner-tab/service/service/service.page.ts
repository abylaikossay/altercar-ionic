import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {BannersResponse} from '../../../../models/responses/BannersResponse';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-service',
    templateUrl: './service.page.html',
    styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.HOME('Алматы');
    banners: BannersResponse[] = [
        {
            id: 1,
            name: '',
            description: 'Тестово описание банера',
            outPhoto: 'car-brand-logo/car-brand-logo_1661921501623.png',
        },
        {
            id: 2,
            name: '',
            description: 'Описание',
            outPhoto: 'car-brand-logo/car-brand-logo_1661921501623.png',
        },
    ];
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


    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    goToType(service: any) {
        switch (service.id) {
            case 'TIRES':
                this.navCtrl.navigateForward('/tabs/service-tab/tire-list');
                break;
            case 'SERVICES':
                this.navCtrl.navigateForward('/tabs/service-tab/service-list');
                break;
            case 'CAR_WASH':
                this.navCtrl.navigateForward('/appointment-info/4/6');
                break;
            case 'AUTOPARTS':
                console.log('test AUTOPARTS');
                break;
            case 'HELP':
                console.log('test HELP');
                break;
        }
    }

    goToCategories() {
        this.navCtrl.navigateRoot(['/tabs/service-tab/user-car/']);

    }
}
