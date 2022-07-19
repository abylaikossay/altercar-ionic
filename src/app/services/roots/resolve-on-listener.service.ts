import { Injectable } from '@angular/core';
import {
    ActivatedRoute,
    PRIMARY_OUTLET,
    Router,
    RunGuardsAndResolvers,
} from '@angular/router';
import { IonRefresher } from '@ionic/angular';
import { RefreshCacheService } from '../caches/refresh-cache.service';
import { RefreshListener } from '../../models/commons/RefreshListener';

// todo https://habr.com/ru/post/517958/

@Injectable({
    providedIn: 'root',
})
export class ResolveOnListenerService {


    lists: any[] = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private refreshCacheService: RefreshCacheService) {
    }


    add(name: string, func) {
        this.lists.push({name, func});
    }

    call() {
        this.lists.forEach(item => {
            item.func();
        });
    }

    delete(name) {
        let number = this.lists.findIndex((value) => {
                return value.name === name;
            },
        );
        if (number !== -1) {
            this.lists.splice(number, 1);
            console.error(this.lists);
        }
    }

}
