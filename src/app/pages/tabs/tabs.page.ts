import {Component, OnInit, ViewChild} from '@angular/core';
import {IonTabs} from '@ionic/angular';
import {IonicTab} from '../../models/commons/IonicTab';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

    @ViewChild('ionTabs') ionTabs: IonTabs;

    HOME_TAB = 'home-tab';
    SERVICE_TAB = 'service-tab';
    HISTORY_TAB = 'history-tab';
    SERVICE_HISTORY_TAB = 'service-history-tab';
    PROFILE_TAB = 'profile-tab';
    tabs: IonicTab[] = [];
    list: string[] = [
        this.HOME_TAB,
        this.SERVICE_TAB,
        this.HISTORY_TAB,
        this.SERVICE_HISTORY_TAB,
        this.PROFILE_TAB,
    ];
    selected: string = '';

    constructor() {
    }

    ionTabsWillChange(event: any) {
        this.selected = this.list.filter(tab => tab === event?.tab)[0];
    }

}
