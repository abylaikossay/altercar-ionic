import {Component, OnDestroy, OnInit} from '@angular/core';
import {RefreshListener} from '../../../../models/commons/RefreshListener';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {ApplicationResponse} from '../../../../models/responses/ApplicationResponse';
import {BannersResponse} from '../../../../models/responses/BannersResponse';
import {TireResponse} from '../../../../models/responses/TireResponse';
import {UserCarResponse} from '../../../../models/responses/UserCarResponse';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../../../services/controllers/modal.service';
import {SettingControllerService} from '../../../../services/controllers/setting-controller.service';
import {NavController} from '@ionic/angular';
import {BannerService} from '../../../../services/roots/business/banner.service';
import {ResolveOnListenerService} from '../../../../services/roots/resolve-on-listener.service';
import {ApplicationService} from '../../../../services/roots/business/application.service';
import {TireService} from '../../../../services/roots/business/tire.service';
import {UserCarService} from '../../../../services/roots/business/user-car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, RefreshListener {
  moviliHeader: MoviliHeader = MoviliHeader.HOME('Алматы');
  applications: ApplicationResponse[];
  banners: BannersResponse[] = [
    {
      id: 1,
      name: '',
      description: 'Тестово описание банера',
      outPhoto: 'car-brand-logo/car-brand-logo_1661921468066.png',
    },
    {
      id: 2,
      name: '',
      description: 'Описание',
      outPhoto: 'car-brand-logo/car-brand-logo_1661921468066.png',
    },
  ];
  categories: any = [
    {
      id: 1,
      name: 'Все записи',
      selected: true,
    },
    {
      id: 2,
      name: 'Индивидуальные записи',
      selected: false,
    },
  ];
  headerText: string = 'Популярные шины';
  products: TireResponse[] = [];
  userCars: UserCarResponse[] = [];

  constructor(public route: ActivatedRoute,
              private modalService: ModalService,
              private settingControllerService: SettingControllerService,
              private navCtrl: NavController,
              private bannerService: BannerService,
              private resolveOnListener: ResolveOnListenerService,
              private applicationService: ApplicationService,
              private tireService: TireService,
              private userCarService: UserCarService) {
  }

  ngOnInit() {
    this.getAllTires();
    this.getUserCars();
    // this.getAllApplications(this.applicationType);
  }

  ngOnDestroy(): void {
    this.resolveOnListener.delete('home');
  }

  ionViewWillEnter() {
    this.resolveOnListener.add('home', this.call.bind(this));
  }

  ionViewWillLeave() {
    this.resolveOnListener.delete('home');
  }

  getAllTires() {
    this.tireService.getAllTires().toPromise().then(resp => {
      console.log(resp);
      this.products = resp;
      console.log(this.products);
    }).catch(err => {
      console.log(err);
    });
  }

  getUserCars() {
    this.userCarService.getUserCars().toPromise().then(response => {
      console.log(response);
      this.userCars = response;
    }).catch(error => {
      console.error(error);
    });
  }


  call() {
    this.getAllTires();
    // this.getAllApplications(this.applicationType);
  }

  // getAllTires() {
  //     this.tireService;
  // }


  // getAllApplications(id: number) {
  //     this.applicationType = id;
  //     if (id === 1) {
  //         this.applicationService.getAllApplications().toPromise().then(resp => {
  //             console.log(resp);
  //             this.applications = resp.content;
  //         }).catch(err => {
  //             console.error(err);
  //         });
  //     } else if (id === 2) {
  //         this.applicationService.getMyApplications().toPromise().then(resp => {
  //             console.log(resp);
  //             this.applications = resp;
  //         }).catch(err => {
  //             console.error(err);
  //         });
  //     }
  //
  // }

  getBanners() {
    this.bannerService.getBanners().toPromise().then(response => {
      console.log(response);
      // this.banners = response;
    }).catch(error => {
      console.error(error);
    });
  }

  // initResolvers() {
  //     this.route.data
  //         .pipe(map(value => value.userLocation,
  //             take(1))).subscribe(value => {
  //         console.log(value);
  //         this.userLocations = value;
  //         if (this.userLocations?.length) {
  //             this.moviliHeader = MoviliHeader.HOME(this.userLocations[0]?.location);
  //         }
  //     });
  // }

  goToApplication(application: ApplicationResponse) {
    this.navCtrl.navigateForward([`appointment-info/${application.appId}`]);
  }

  // changeProducts(category: any) {
  //     console.log(category);
  //     this.categories.forEach(element => element.selected = false);
  //     category.selected = true;
  //     // this.getAllApplications(category.id);
  //     if (category.id === 2) {
  //         this.headerText = 'Индивидуальные записи';
  //     } else {
  //         this.headerText = 'Все записи';
  //     }
  // }
  goToTire(product: any) {
    console.log(product);
    this.navCtrl.navigateForward([`tabs/home-tab/tire/${product.id}`]);
  }

  goToCar(userCar: UserCarResponse) {
    console.log(userCar);
    this.navCtrl.navigateForward([`tabs/home-tab/user-car/${userCar.id}`]);

  }
}
