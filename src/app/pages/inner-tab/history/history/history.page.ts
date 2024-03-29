import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { OrderService } from '../../../../services/roots/business/order.service';
import { OrderResponse } from '../../../../models/responses/OrderResponse';
import { RefreshListener } from '../../../../models/commons/RefreshListener';
import { ResolveOnListenerService } from '../../../../services/roots/resolve-on-listener.service';
import { PurchaseOrderService } from '../../../../services/roots/business/purchase-order.service';
import { PurchaseOrderResponse } from '../../../../models/responses/PurchaseOrderResponse';
import { ResolveControlService } from '../../../../services/roots/resolve-control.service';
import { IonRefresher } from '@ionic/angular';

@Component({
    selector: 'app-history',
    templateUrl: './history.page.html',
    styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit, RefreshListener, OnDestroy {
    moviliHeader: MoviliHeader = MoviliHeader.HISTORY('История');
    categories: any = [
        {
            id: 'PROCESS',
            name: 'В процессе',
            selected: true,
        },
        {
            id: 'DECLINED',
            name: 'Отклоненные',
            selected: false,
        },
        {
            id: 'SUCCESS',
            name: 'Успешные',
            selected: false,
        },
        {
            id: 'PURCHASE_ORDER',
            name: 'Сервисная книжка',
            selected: false,
        },
    ];
    selectedCategory: any = {id: 'PROCESS', name: 'В процессе', selected: true};
    histories: OrderResponse[] = [];
    purchases: PurchaseOrderResponse[] = [];
    @ViewChild('ionRefresher') ionRefresh: IonRefresher;

    constructor(private orderService: OrderService,
                private purchaseOrderService: PurchaseOrderService,
                private resolveControlService: ResolveControlService,
                private resolveOnListener: ResolveOnListenerService) {
    }

    ngOnInit() {
        //todo add ResolveOnListenerService
        this.getAllOrders();
    }

    refreshPage(event) {
        this.resolveOnListener.call();
        this.resolveControlService.forceRunCurrentGuards(this.ionRefresh);
    }

    ngOnDestroy(): void {
        this.resolveOnListener.delete('history');
    }

    ionViewWillEnter() {
        this.resolveOnListener.add('history', this.call.bind(this));
    }

    ionViewDidLeave() {
        this.resolveOnListener.delete('history');
    }

    call() {
        this.getAllOrders();
    }

    getAllOrders() {
        if (this.selectedCategory.id !== 'PURCHASE_ORDER') {
            this.orderService.getOrders(this.selectedCategory.id).toPromise().then(resp => {
                console.log(resp);
                this.histories = resp;
            }).catch(err => {
                console.error(err);
            });
        } else {
            this.histories = [];
            this.purchaseOrderService.getOrders().toPromise().then(resp => {
                console.log(resp);
                this.purchases = resp;
            }).catch(err => {
                console.error(err);
            });
        }
    }

    changeProducts(category: any) {
        this.categories.forEach(element => element.selected = false);
        category.selected = true;
        this.selectedCategory = category;
        this.getAllOrders();
    }

}
