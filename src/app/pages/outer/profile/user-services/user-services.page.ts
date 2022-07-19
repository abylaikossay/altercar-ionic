import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {ServiceResponse} from '../../../../models/responses/ServiceResponse';
import {ActivatedRoute} from '@angular/router';
import { map, take } from 'rxjs/operators';
import {OnInitResolver} from '../../../../models/abstracts/OnInitResolver';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-user-services',
  templateUrl: './user-services.page.html',
  styleUrls: ['./user-services.page.scss'],
})
export class UserServicesPage implements OnInit, OnInitResolver {
  movilieHeader: MoviliHeader = MoviliHeader.SERVICE_PAGE();
  services: ServiceResponse[];

  constructor(public route: ActivatedRoute,
              private navCtrl: NavController) {
    this.initResolvers();

  }

  ngOnInit() {
  }

  initResolvers() {
    this.route.data
        .pipe(map(value => value.service),
            take(1)).subscribe(value => {
      this.services = value;
      console.log(this.services);
    });
  }
  openServiceProducts(service: any) {
    console.log(service);
    this.navCtrl.navigateForward(['/select-category/service/' + service.id]);
  }

  goNext() {

  }
}
