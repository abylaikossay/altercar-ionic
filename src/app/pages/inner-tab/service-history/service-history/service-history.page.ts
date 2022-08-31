import { Component, OnInit } from '@angular/core';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';

@Component({
    selector: 'app-service-history',
    templateUrl: './service-history.page.html',
    styleUrls: ['./service-history.page.scss'],
})
export class ServiceHistoryPage implements OnInit {
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

    constructor() {
    }

    ngOnInit() {
    }

    getAllOrders() {
        // this.appointm.getOrders(this.selectedCategory.id).toPromise().then(resp => {
        //     console.log(resp);
        //     this.history = resp;
        // }).catch(err => {
        //     console.error(err);
        // });
    }

    changeProducts(category: any) {
        this.categories.forEach(element => element.selected = false);
        category.selected = true;
        this.selectedCategory = category;
        this.getAllOrders();
    }

}
