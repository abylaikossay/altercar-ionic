import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { OrderService } from '../../../../services/roots/business/order.service';
import { AppointmentService } from '../../../../services/roots/business/appointment.service';
import { RefreshListener } from '../../../../models/commons/RefreshListener';
import { ResolveOnListenerService } from '../../../../services/roots/resolve-on-listener.service';
import { ResolveControlService } from '../../../../services/roots/resolve-control.service';
import { IonRefresher } from '@ionic/angular';

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
    @ViewChild('ionRefresher') ionRefresh: IonRefresher;

    constructor(private appointmentService: AppointmentService,
                private resolveControlService: ResolveControlService,
                private resolveOnListener: ResolveOnListenerService,
    ) {
    }
    refreshPage(event) {
        this.resolveOnListener.call();
        this.resolveControlService.forceRunCurrentGuards(this.ionRefresh);
    }
    ngOnInit() {
        this.getAllOrders();
    }

    ngOnDestroy(): void {
        this.resolveOnListener.delete('appointment');
    }

    ionViewWillEnter() {
        this.resolveOnListener.add('appointment', this.call.bind(this));
    }

    ionViewDidLeave() {
        this.resolveOnListener.delete('appointment');
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
