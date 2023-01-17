import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../../../services/roots/business/appointment.service';
import { ServiceRequestService } from '../../../../services/roots/business/service-request.service';
import { ServiceRequestResponse } from '../../../../models/responses/ServiceRequestResponse';
import { RequestStatusEnum } from '../../../../models/responses/RequestStatusEnum';

@Component({
    selector: 'app-request-info',
    templateUrl: './request-info.page.html',
    styleUrls: ['./request-info.page.scss'],
})
export class RequestInfoPage implements OnInit {
    $url: Subscription;
    moviliHeader: MoviliHeader = MoviliHeader.APPOINTMENT_INFO();
    fullUrl: string = environment.imageUrl + '/partner-logo/';
    request: ServiceRequestResponse = new ServiceRequestResponse();
    photoUrl: string = environment.url + '/api/file/service-request/';
    public get requestStatusEnum(): typeof RequestStatusEnum {
        return RequestStatusEnum;
    }
    constructor(private route: ActivatedRoute,
                private serviceRequestService: ServiceRequestService) {
    }

  ngOnInit() {
    this.$url = this.route.params.subscribe(data => {
      if (data.id) {
        this.serviceRequestService.getById(data.id).toPromise().then(resp => {
          console.log(resp);
          this.request = resp;
        }).catch(err => {
          console.error(err);
        });
      }
    });
  }

}
