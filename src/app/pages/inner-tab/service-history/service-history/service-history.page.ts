import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {OrderService} from '../../../../services/roots/business/order.service';
import {AppointmentService} from '../../../../services/roots/business/appointment.service';
import {RefreshListener} from '../../../../models/commons/RefreshListener';
import {ResolveOnListenerService} from '../../../../services/roots/resolve-on-listener.service';

@Component({
    selector: 'app-service-history',
    templateUrl: './service-history.page.html',
    styleUrls: ['./service-history.page.scss'],
})
export class ServiceHistoryPage implements OnInit, RefreshListener, OnDestroy {
    moviliHeader: MoviliHeader = MoviliHeader.HISTORY('История записей');
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
    history: any[] = [];

    constructor(private appointmentService: AppointmentService,
                private resolveOnListener: ResolveOnListenerService
    ) {
    }

    ngOnInit() {
        this.getAllOrders();
    }

    ngOnDestroy(): void {
        this.resolveOnListener.delete('service-history');
    }

    ionViewWillEnter() {
        this.resolveOnListener.add('service-history', this.call.bind(this));
    }

    ionViewDidLeave() {
        this.resolveOnListener.delete('service-history');
    }

    call() {
        this.getAllOrders();
    }

    getAllOrders() {
        this.appointmentService.getOrders(this.selectedCategory.id).toPromise().then(resp => {
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
