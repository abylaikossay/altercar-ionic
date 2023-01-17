import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { OrderService } from '../../../../services/roots/business/order.service';
import { AppointmentService } from '../../../../services/roots/business/appointment.service';
import { RefreshListener } from '../../../../models/commons/RefreshListener';
import { ResolveOnListenerService } from '../../../../services/roots/resolve-on-listener.service';
import { ResolveControlService } from '../../../../services/roots/resolve-control.service';
import { IonRefresher } from '@ionic/angular';
import { ServiceRequestService } from '../../../../services/roots/business/service-request.service';

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
        {
            id: 'SERVICE_REQUEST',
            name: 'Мои запросы',
            selected: false,
        },
    ];
    selectedCategory: any = {id: 'PROCESS', name: 'В процессе', selected: true};
    histories: any[] = [];
    requests: any[] = [];
    @ViewChild('ionRefresher') ionRefresh: IonRefresher;

    constructor(private appointmentService: AppointmentService,
                private resolveControlService: ResolveControlService,
                private resolveOnListener: ResolveOnListenerService,
                private serviceRequestService: ServiceRequestService,
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
        if (this.selectedCategory.id !== 'SERVICE_REQUEST') {
            this.appointmentService.getOrders(this.selectedCategory.id).toPromise().then(resp => {
                console.log(resp);
                this.histories = resp;
            }).catch(err => {
                console.error(err);
            });
        } else {
            this.histories = [];
            this.serviceRequestService.getAll().toPromise().then(resp => {
                console.log(resp);
                this.requests = resp;
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
