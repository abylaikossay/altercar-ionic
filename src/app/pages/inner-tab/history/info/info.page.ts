import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {environment} from '../../../../../environments/environment';
import {OrderService} from '../../../../services/roots/business/order.service';
import {OrderResponse} from '../../../../models/responses/OrderResponse';

@Component({
    selector: 'app-info',
    templateUrl: './info.page.html',
    styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
    $url: Subscription;
    moviliHeader: MoviliHeader = MoviliHeader.APPOINTMENT_INFO();
    fullUrl: string = environment.imageUrl + '/partner-logo/';
    history: OrderResponse = new OrderResponse();

    constructor(private route: ActivatedRoute,
                private orderService: OrderService) {
    }

    ngOnInit() {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.orderService.getOrders().toPromise().then(resp => {
                    console.log(resp);
                    this.history = resp[0];
                }).catch(err => {
                    console.error(err);
                });
            }
        });
    }

    decline(history: OrderResponse) {

    }

    complain(history: OrderResponse) {

    }
}
