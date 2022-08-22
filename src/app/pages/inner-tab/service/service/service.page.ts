import { Component, OnInit } from '@angular/core';
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

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  goToCategories() {
    this.navCtrl.navigateRoot(['/tabs/service-tab/user-car/']);

  }
}
