import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {Subscription} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {AppointmentService} from '../../../../services/roots/business/appointment.service';
import {PartnerService} from '../../../../services/roots/business/partner.service';
import {PartnerResponse} from '../../../../models/responses/PartnerResponse';
import {AppointmentResponse} from '../../../../models/responses/AppointmentResponse';

@Component({
    selector: 'app-service-info',
    templateUrl: './service-info.page.html',
    styleUrls: ['./service-info.page.scss'],
})
export class ServiceInfoPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.APPOINTMENT_INFO();
    $url: Subscription;
    fullUrl: string = environment.imageUrl + '/partner-logo/';
    history: AppointmentResponse = new AppointmentResponse();
    partner: PartnerResponse = new PartnerResponse();

    constructor(private route: ActivatedRoute,
                private appointmentService: AppointmentService,
                private partnerService: PartnerService,
    ) {
    }

    ngOnInit() {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.appointmentService.getById(data.id).toPromise().then(resp => {
                    console.log(resp);
                    this.getPartner(resp.partner.id);
                    this.history = resp;
                }).catch(err => {
                    console.error(err);
                });
            }
        });
    }

    getPartner(id: number) {
        this.partnerService.getById(id).toPromise().then(resp => {
            this.partner = resp;
        }).catch(err => {
            console.error(err);
        });
    }

    decline(history: AppointmentResponse) {

    }

    complain(history: AppointmentResponse) {

    }
}
