import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { environment } from '../../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { PurchaseOrderService } from '../../../../services/roots/business/purchase-order.service';
import { PurchaseOrderResponse } from '../../../../models/responses/PurchaseOrderResponse';
import { PartnerResponse } from '../../../../models/responses/PartnerResponse';
import { PartnerService } from '../../../../services/roots/business/partner.service';

@Component({
    selector: 'app-purchase-info',
    templateUrl: './purchase-info.page.html',
    styleUrls: ['./purchase-info.page.scss'],
})
export class PurchaseInfoPage implements OnInit {
    $url: Subscription;
    moviliHeader: MoviliHeader = MoviliHeader.APPOINTMENT_INFO();
    fullUrl: string = environment.imageUrl + '/partner-logo/';
    purchase: PurchaseOrderResponse = new PurchaseOrderResponse();
    partner: PartnerResponse = new PartnerResponse();

    constructor(private route: ActivatedRoute,
                private purchaseService: PurchaseOrderService,
                private partnerService: PartnerService) {
    }

    ngOnInit() {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.purchaseService.getOrder(data.id).toPromise().then(resp => {
                    console.log(resp);
                    this.purchase = resp;
                    this.getPartner();
                }).catch(err => {
                    console.error(err);
                });
            }
        });
    }

    getPartner() {
        this.partnerService.getById(this.purchase.partner).toPromise().then(resp => {
            this.partner = resp;
            console.log(resp);
        }).catch(err => {
            console.error(err);
        });
    }

}
