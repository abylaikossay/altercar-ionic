import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../models/commons/MoviliHeader';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ToastService} from '../../../services/controllers/toast.service';
import {environment} from '../../../../environments/environment';
import {NavController} from '@ionic/angular';
import {PartnerService} from '../../../services/roots/business/partner.service';
import {PartnerResponse} from '../../../models/responses/PartnerResponse';
import {AppointmentService} from '../../../services/roots/business/appointment.service';
import {AppointmentRequest} from '../../../models/requests/AppointmentRequest';

@Component({
    selector: 'app-appointment-info',
    templateUrl: './appointment-info.page.html',
    styleUrls: ['./appointment-info.page.scss'],
})
export class AppointmentInfoPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.APPOINTMENT_INFO();
    $url: Subscription;
    appointmentRequest: AppointmentRequest = new AppointmentRequest();

    constructor(private route: ActivatedRoute,
                private partnerService: PartnerService,
                private toastService: ToastService,
                private appointmentService: AppointmentService,
                private navCtrl: NavController) {
    }

    fullUrl: string = environment.imageUrl + '/partner-logo/';
    services: any = [];
    userCarId: number;
    partnerId: number;
    partner: PartnerResponse = new PartnerResponse();
    works: any[] = [{text: ''}];

    ngOnInit() {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.partnerId = data.id;
                this.partnerService.getById(data.id).toPromise().then(resp => {
                    console.log(resp);
                    this.partner = resp;
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
            }

        });
        this.$url.unsubscribe();
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
        this.appointmentRequest.userCarId = this.userCarId;
        this.appointmentRequest.partnerId = this.partnerId;
        this.appointmentRequest.appointmentDate = new Date();
        this.appointmentRequest.setOfWorks = [];
        this.works.forEach(element => {
            this.appointmentRequest.setOfWorks.push(element.text);
        });
        console.log(this.appointmentRequest);
        this.appointmentService.create(this.appointmentRequest).toPromise().then(resp => {
            console.log(resp);
            this.toastService.present(resp.message);
            this.navCtrl.navigateRoot(['/tabs/home-tab']);
        }).catch(err => {
            console.log(err);
        });
        // this.applicationService.hideApp(application.appId).toPromise().then(resp => {
        //     console.log(resp);
        //     this.toastService.present(resp.message);
        // }).catch(err => {
        //     this.toastService.present(err.error.message);
        //     this.navCtrl.navigateRoot([`tabs/home-tab`]);
        //     console.error(err);
        // })
    }

    addWork() {
        this.works.push({text: ''});
    }
}
