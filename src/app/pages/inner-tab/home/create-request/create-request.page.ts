import { Component, OnInit } from '@angular/core';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { forkJoin, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AutoServiceService } from '../../../../services/roots/business/auto-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestForm } from '../../../../models/requests/RequestForm';
import { UserCarResponse } from '../../../../models/responses/UserCarResponse';
import { UserCarService } from '../../../../services/roots/business/user-car.service';
import { SettingControllerService } from '../../../../services/controllers/setting-controller.service';
import { NavController } from '@ionic/angular';
import { ServiceRequestService } from '../../../../services/roots/business/service-request.service';
import { element } from 'protractor';
import { map, switchMap } from 'rxjs/operators';
import { ToastService } from '../../../../services/controllers/toast.service';

@Component({
    selector: 'app-create-request',
    templateUrl: './create-request.page.html',
    styleUrls: ['./create-request.page.scss'],
})
export class CreateRequestPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Сервис');
    url: Subscription;
    categoryId: number;
    urlImage: any[] = [];
    videoUrl: any[] = [];
    attachedFiles: any[] = [];
    sendForm: FormGroup;
    request: RequestForm = new RequestForm();
    userCarResponse: UserCarResponse;

    constructor(private route: ActivatedRoute,
                private autoServiceService: AutoServiceService,
                private builder: FormBuilder,
                private settingControllerService: SettingControllerService,
                private userCarService: UserCarService,
                private navCtrl: NavController,
                private serviceRequestService: ServiceRequestService,
                private toastService: ToastService,
    ) {
    }

    ngOnInit() {
        this.sendFormReady();
        this.url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.categoryId = data.id;
                console.log(data.id);
                this.getCategory(data.id);
            }
        });
    }

    carRemoved(event: any) {
        this.userCarResponse = null;
    }

    async selectCar() {
        this.userCarService.getUserCars().toPromise().then(async resp => {
            const alertChooseCar = this.settingControllerService.setAlertUserCar(resp);
            const value = await alertChooseCar.present();
            console.log(value);
            if (value.data) {
                if (value.data !== 'New') {
                    this.userCarResponse = value.data;
                } else {
                    this.navCtrl.navigateForward(['/add-user-car']);
                }
            }
        }).catch(err => {
            console.error(err);
        });
    }

    sendFormReady() {
        this.sendForm = this.builder.group({
            description: ['', Validators.required],
            price: ['', Validators.required],
            categoryId: [''],
        });
    }

    getCategory(id: number) {
        // tslint:disable-next-line:triple-equals
        if (id == 0) {
            this.moviliHeader = MoviliHeader.TITLE_WITH_BACK('Избранные сервисы');
        } else {
            this.autoServiceService.getCategoryById(id).toPromise().then(resp => {
                this.moviliHeader = MoviliHeader.TITLE_WITH_BACK(resp.name);
                console.log(resp);
            }).catch(err => {
                console.error(err);
            });
        }
    }

    addPhoto() {
        console.log('add');
    }

    removeImage(i: number) {
        this.urlImage.splice(i, 1);
        this.attachedFiles.splice(i, 1);
    }

    photoLoad(event) {
        const files = event.target.files;
        if (files) {
            for (const file of files) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                if (file.type.includes('video')) {
                    reader.onload = (e: any) => {
                        this.videoUrl.push(e.target.result);
                    };
                } else if (file.type.includes('image')) {
                    reader.onload = (e: any) => {
                        this.urlImage.push(e.target.result);
                    };
                }
                this.attachedFiles.push(file);
            }
        }
    }

    async submit() {
        const requestFormData = new FormData();
        const requestForm = this.sendForm.getRawValue();
        // @ts-ignore
        requestFormData.append('categoryId', this.categoryId);
        // @ts-ignore
        requestFormData.append('requestDate', new Date());
        // @ts-ignore
        requestFormData.append('userCarId', this.userCarResponse.id);
        requestFormData.append('description', requestForm.description);
        requestFormData.append('price', requestForm.price);
        this.attachedFiles.forEach(photo => {
            requestFormData.append('photo', photo);
        });
        this.serviceRequestService.create(requestFormData).toPromise().then(resp => {
            console.log(resp);
            this.toastService.present('Заказ успешно создан!');
            this.navCtrl.navigateRoot(['/tabs/service-tab/request-category']);
        }).catch(err => {
            this.toastService.present('Произошла ошибка с созданием заявки!');
            console.log(err);
        });
        // this.attachedFiles.forEach(photo => {
        //     const photoFormData = new FormData();
        //     photoFormData.append('photo', photo);
        //     this.serviceRequestService.uploadPhoto(photoFormData).toPromise().then(resp => {
        //         console.log(resp);
        //         fileNames.push(resp.photoUrl);
        //         console.log(fileNames);
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // });


        // const photoFormData = new FormData();
        // this.attachedFiles.forEach(photo => {
        //     photoFormData.append('photos', photo);
        // });
        // this.serviceRequestService.uploadPhotos(photoFormData).toPromise().then(resp => {
        //     console.log(resp);
        // }).catch(err => {
        //     console.log(err);
        // });


        // const reuqestLists = this.attachedFiles.map(value => {
        //     const photoFormData = new FormData();
        //     photoFormData.append('photo', value);
        //     return this.serviceRequestService.uploadPhoto(photoFormData).pipe(map(el => el.photoUrl));
        // });
        // forkJoin([...reuqestLists])
        //     .pipe(
        //         switchMap((values) => {
        //             return this.sendRequest(values);
        //         }),
        //     )
        //     .subscribe();
    }
}
