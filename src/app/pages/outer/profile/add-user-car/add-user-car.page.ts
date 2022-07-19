import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserCarService } from '../../../../services/roots/business/user-car.service';
import { CarBrandResponse } from '../../../../models/responses/CarBrandResponse';
import { UserCarResponse } from '../../../../models/responses/UserCarResponse';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { SettingControllerService } from '../../../../services/controllers/setting-controller.service';
import { CarModelResponse } from '../../../../models/responses/CarModelResponse';
import { ToastService } from '../../../../services/controllers/toast.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-add-user-car',
    templateUrl: './add-user-car.page.html',
    styleUrls: ['./add-user-car.page.scss'],
})
export class AddUserCarPage implements OnInit {
    url: Subscription;
    carBrands: CarBrandResponse[] = [];
    carModels: CarModelResponse[] = [];
    carId: number;
    userCar: UserCarResponse = new UserCarResponse();
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Добавить машину');

    constructor(private route: ActivatedRoute,
                private userCarService: UserCarService,
                private settingControllerService: SettingControllerService,
                private toastService: ToastService,
                private navCtrl: NavController
    ) {
        this.userCar.carBrand = new CarBrandResponse();
        this.userCar.carModel = new CarModelResponse();
    }

    ngOnInit() {
        this.getBrands();
        this.url = this.route.params.subscribe(data => {
            if (data.id) {
                console.log(data.id);
                this.carId = data.id;
                this.getCar();
            }
        });
    }

    getBrands() {
        this.userCarService.getAllBrands().toPromise().then(resp => {
            console.log(resp);
            this.carBrands = resp;
        }).catch(err => {
            console.log(err);
        });
    }

    getModels(id) {
        this.userCarService.getModelsByBrand(id).toPromise().then(resp => {
            console.log(resp);
            this.carModels = resp;
        }).catch(err => {
            console.log(err);
        });
    }

    getCar() {
        this.userCarService.getCarById(this.carId).toPromise().then(resp => {
            console.log(resp);
            this.userCar = resp;
            console.log(this.userCar);
            this.getModels(resp.carBrand.id);
            this.moviliHeader = MoviliHeader.TITLE_WITH_BACK('Редактировать ' + resp.carBrand.name);
        }).catch(err => {
            console.log(err);
        });
    }

    async openAlertBrand() {
        const alertChooseBrand = this.settingControllerService.setAlertChooseBrand(this.carBrands);
        const value = await alertChooseBrand.present();
        console.log(value);
        if (value.data) {
            this.userCar.carBrand = value?.data || null;
            this.userCar.carModel = new CarModelResponse();
            this.getModels(this.userCar.carBrand.id);
        }
    }

    async openAlertModel() {
        const alertChooseModel = this.settingControllerService.setAlertChooseModel(this.carModels);
        const value = await alertChooseModel.present();
        console.log(value);
        if (value.data) {
            this.userCar.carModel = value?.data || null;
        }
    }

    save() {
        const userCarRequest = {
            carBrandId: this.userCar.carBrand.id,
            carModelId: this.userCar.carModel.id,
            carYear: this.userCar.carYear,
            color: this.userCar.color,
            engineVolume: this.userCar.engineVolume,
            vinCode: this.userCar.vinCode,
        };
        if (this.carId) {
            this.userCarService.update(userCarRequest, this.carId).toPromise().then(resp => {
                this.toastService.present('Машина успешно обновлена!');
                this.navCtrl.navigateRoot(['user-cars']);
                console.log(resp);
            }).catch(err => {
                console.log(err);
            });
        } else {
            this.userCarService.add(userCarRequest).toPromise().then(resp => {
                console.log(resp);
                this.toastService.present('Машина успешно добавлена!');
                this.navCtrl.navigateRoot(['user-cars']);
            }).catch(err => {
                console.log(err);
            });
        }
        console.log(this.userCar);

    }

    delete() {
        this.userCarService.delete(this.carId).toPromise().then(resp => {
            this.toastService.present('Машина успешно удалена!');
            this.navCtrl.navigateRoot(['user-cars']);
            console.log(resp);
        }).catch(err => {
            console.log(err);
        });
    }
}
