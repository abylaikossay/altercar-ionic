import {Component, ViewChild} from '@angular/core';

import {AppService} from './services/app.service';
import {IonRefresher} from '@ionic/angular';
import {getRouterUrl} from './shares/util-method';
import {ActivatedRoute} from '@angular/router';
import {ResolveControlService} from './services/roots/resolve-control.service';
import {ResolveOnListenerService} from './services/roots/resolve-on-listener.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    @ViewChild('ionRefresher') ionRefresh: IonRefresher;

    constructor(private appService: AppService,
                private route: ActivatedRoute,
                private resolveControlService: ResolveControlService,
                private resolveOnListener: ResolveOnListenerService,

    ) {
        this.appService.initializeApp();
    }

    refreshPage(event) {
        this.resolveOnListener.call();
        if (!this.exceptMethod(getRouterUrl(this.route))) {
            this.resolveControlService.forceRunCurrentGuards(this.ionRefresh);
        } else {
            event.target.complete();
        }
    }

    exceptMethod(url: string) {
        /*
        * нужно добавлять только те страницы, которые нужно исключить обновление
        * */
        const methods: string[] = [
            '/tabs/profile-tab',
        ];
        return methods.some((item: string) => {
            return url.includes(item);
        });
    }
}
