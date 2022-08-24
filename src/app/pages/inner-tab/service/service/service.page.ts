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
            name: 'Тест банер 1',
            description: 'Тестово описание банера',
            outPhoto: 'partner-logo/partner-logo_1658995124546.png',
        },
        {
            id: 2,
            name: 'Тест банер 2',
            description: 'Описание',
            outPhoto: 'tire-brand-logo/tire-brand-logo_1658995161984.png',
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
