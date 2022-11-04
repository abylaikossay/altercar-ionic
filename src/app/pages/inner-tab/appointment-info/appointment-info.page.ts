import { Component, OnInit } from '@angular/core';
import { MoviliHeader } from '../../../models/commons/MoviliHeader';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastService } from '../../../services/controllers/toast.service';
import { environment } from '../../../../environments/environment';
import { NavController } from '@ionic/angular';
import { PartnerService } from '../../../services/roots/business/partner.service';
import { PartnerResponse } from '../../../models/responses/PartnerResponse';
import { AppointmentService } from '../../../services/roots/business/appointment.service';
import { AppointmentRequest } from '../../../models/requests/AppointmentRequest';
import { UserCarResponse } from '../../../models/responses/UserCarResponse';
import { UserCarService } from '../../../services/roots/business/user-car.service';
import { SettingControllerService } from '../../../services/controllers/setting-controller.service';
import { PartnerJobService } from '../../../services/roots/business/partner-job.service';
import { PartnerCategoryJobResponse } from '../../../models/responses/PartnerCategoryJobResponse';

@Component({
    selector: 'app-appointment-info',
    templateUrl: './appointment-info.page.html',
    styleUrls: ['./appointment-info.page.scss'],
})
export class AppointmentInfoPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.APPOINTMENT_INFO();
    $url: Subscription;
    appointmentRequest: AppointmentRequest = new AppointmentRequest();
    min: any;
    constructor(private route: ActivatedRoute,
                private partnerService: PartnerService,
                private toastService: ToastService,
                private appointmentService: AppointmentService,
                private userCarService: UserCarService,
                private settingControllerService: SettingControllerService,
                private partnerJobService: PartnerJobService,
                private navCtrl: NavController) {
        this.min = new Date().toISOString();
    }

    fullUrl: string = environment.imageUrl + '/partner-logo/';
    services: any = [{productName: 'test'}, {productName: 'test3'}, {productName: 'test2'}];
    userCarId: number;
    categoryId: number;
    userCarResponse: UserCarResponse;
    partnerId: number;
    partner: PartnerResponse = new PartnerResponse();
    jobs: PartnerCategoryJobResponse[] = [];
    selectedJobs: PartnerCategoryJobResponse[] = [new PartnerCategoryJobResponse()];

    // works: any[] = [{text: ''}];

    ngOnInit() {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.partnerId = data.id;
                this.partnerService.getById(data.id).toPromise().then(resp => {
                    console.log(resp);
                    this.partner = resp;
                    this.getJobs();
                    // this.services[0] = {
                    //     productName: resp.productName,
                    //     ispProductId: resp.ispProductId,
                    //     ispProductPrice: resp.ispProductPrice,
                    //     productId: resp.productId,
                    // };
                }).catch(err => {
                    console.log(err);
                    this.toastService.present('Произошла ошибка сервера');
                });
            }
            if (data.carId) {
                this.userCarId = data.carId;
                this.getUserCar();
            }
            if (data.categoryId) {
                this.categoryId = data.categoryId;
            }

        });
        this.$url.unsubscribe();
    }

    getJobs() {
        this.partnerJobService.getByPartnerAndCategory(this.partnerId, this.categoryId).toPromise().then(resp => {
            console.log(resp);
            this.jobs = resp;
        }).catch(err => {
            console.error(err);
        });
    }

    getUserCar() {
        this.userCarService.getCarById(this.userCarId).toPromise().then(resp => {
            this.userCarResponse = resp;
            console.log(this.userCarResponse);
        }).catch(err => {
            console.error(err);
        });
    }

    call(partnerResponse: PartnerResponse) {
        console.log(partnerResponse);
        // this.applicationService.submitApp(application.appId).toPromise().then(resp => {
        //     console.log(resp);
        //     this.toastService.present(resp.message);
        // }).catch(err => {
        //     this.toastService.present(err.error.message);
        //     this.navCtrl.navigateRoot([`tabs/home-tab`]);
        //     console.error(err);
        // })
    }

    appoint(partnerResponse: PartnerResponse) {
        if (!this.userCarResponse) {
            this.toastService.present('Выберите для начала машину');
        } else {
            this.appointmentRequest.userCarId = this.userCarId;
            this.appointmentRequest.partnerId = this.partnerId;
            const partnerCategoryJobId = [];
            this.selectedJobs.forEach(selectedJob => {
                if (selectedJob.id) {
                    partnerCategoryJobId.push(selectedJob.id);
                }
            });
            this.appointmentRequest.partnerCategoryJobId = partnerCategoryJobId;
            // this.appointmentRequest.partnerCategoryJobId = [];
            // this.works.forEach(element => {
            //     this.appointmentRequest.setOfWorks.push(element.text);
            // });
            console.log(this.appointmentRequest);
            this.appointmentService.create(this.appointmentRequest).toPromise().then(resp => {
                console.log(resp);
                this.toastService.present(resp.message);
                this.navCtrl.navigateRoot(['/tabs/home-tab']);
            }).catch(err => {
                console.log(err);
            });
        }
    }

    addWork() {
        // this.works.push({text: ''});
    }

    addNewJob() {
        console.log('add new');
        this.selectedJobs.push(new PartnerCategoryJobResponse());

    }

    async selectCar() {
        this.userCarService.getUserCars().toPromise().then(async resp => {
            const alertChooseCar = this.settingControllerService.setAlertUserCar(resp);
            const value = await alertChooseCar.present();
            console.log(value);
            if (value.data) {
                if (value.data !== 'New') {
                    this.userCarResponse = value.data;
                    this.userCarId = this.userCarResponse.id;
                } else {
                    this.navCtrl.navigateForward(['/add-user-car']);
                }
            }
        }).catch(err => {
            console.error(err);
        });
    }

    carRemoved(event: any) {
        console.log(event);
        this.userCarResponse = null;

    }

    async getJobsList(index) {
        const alertСhooseJob = this.settingControllerService.setAlertJobs(this.jobs);
        const value = await alertСhooseJob.present();
        if (value.data) {
            if (value.data !== 'New') {
                console.log(index);
                if (index !== -1) {
                    this.selectedJobs[index] = value.data;
                }
                console.log(value.data);
                console.log(this.selectedJobs);
                // this.selectedJobs.push(value.data);
                // this.works.push({text: value.data.jobName});
                // this.userCarResponse = value.data;
                // this.userCarId = this.userCarResponse.id;
            } else {
                // this.navCtrl.navigateForward(['/add-user-car']);
            }
        }
    }

    removeJob(index: number) {
        if (index > -1) {
            this.selectedJobs.splice(index, 1);
        }
        console.log(index);
    }
}
