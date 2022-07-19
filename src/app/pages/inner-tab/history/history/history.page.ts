import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { OrderService } from '../../../../services/roots/business/order.service';
import { OrderResponse } from '../../../../models/responses/OrderResponse';
import { RefreshListener } from '../../../../models/commons/RefreshListener';
import { ResolveOnListenerService } from '../../../../services/roots/resolve-on-listener.service';

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
    ];
    selectedCategory: any = {id: 'PROCESS', name: 'В процессе', selected: true};
    history: OrderResponse[] = [];

    constructor(private orderService: OrderService,
                private resolveOnListener: ResolveOnListenerService) {
    }

    ngOnInit() {
        //todo add ResolveOnListenerService
        this.getAllOrders();
    }

    ngOnDestroy(): void {
        this.resolveOnListener.delete('history');
    }

    ionViewWillEnter() {
        this.resolveOnListener.add('history', this.call.bind(this));
    }

    ionViewWillLeave() {
        this.resolveOnListener.delete('history');
    }

    call() {
        this.getAllOrders();
    }

    getAllOrders() {
        this.orderService.getOrders(this.selectedCategory.id).toPromise().then(resp => {
            console.log(resp);
            this.history = resp;
        }).catch(err => {
            console.error(err);
        });
    }

    changeProducts(category: any) {
        this.categories.forEach(element => element.selected = false);
        category.selected = true;
        this.selectedCategory = category;
        this.getAllOrders();
    }

}
