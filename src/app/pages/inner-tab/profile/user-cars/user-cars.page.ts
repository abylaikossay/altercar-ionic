import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { UserCarResponse } from '../../../../models/responses/UserCarResponse';
import { UserCarService } from '../../../../services/roots/business/user-car.service';
import { environment } from '../../../../../environments/environment';
import { IonRefresher, NavController } from '@ionic/angular';
import { RefreshListener } from '../../../../models/commons/RefreshListener';
import { ResolveOnListenerService } from '../../../../services/roots/resolve-on-listener.service';
import { ResolveControlService } from '../../../../services/roots/resolve-control.service';

@Component({
    selector: 'app-user-cars',
    templateUrl: './user-cars.page.html',
    styleUrls: ['./user-cars.page.scss'],
})
export class UserCarsPage implements OnInit, RefreshListener, OnDestroy {
    moviliHeader: MoviliHeader = MoviliHeader.MY_CARS();
    userCars: UserCarResponse[] = [];
    @ViewChild('ionRefresher') ionRefresh: IonRefresher;
    logoUrl: string = environment.imageUrl + '/car-brand-logo/';
    constructor(private userCarService: UserCarService,
                private resolveControlService: ResolveControlService,
                private resolveOnListener: ResolveOnListenerService,
                private navCtrl: NavController) {
    }

    ngOnInit() {
        this.getUserCars();
    }
    refreshPage(event) {
        this.resolveOnListener.call();
        this.resolveControlService.forceRunCurrentGuards(this.ionRefresh);
    }

    ngOnDestroy(): void {
        this.resolveOnListener.delete('user-car');
    }

    ionViewWillEnter() {
        this.resolveOnListener.add('user-car', this.call.bind(this));
    }

    ionViewWillLeave() {
        this.resolveOnListener.delete('user-car');
    }

    call() {
        this.getUserCars();
    }

    getUserCars() {
        this.userCarService.getUserCars().toPromise().then(response => {
            console.log(response);
            this.userCars = response;
        }).catch(error => {
            console.error(error);
        });
    }

    goToCar(id: any) {
        this.navCtrl.navigateForward(['add-user-car/' + id]);

    }

    addCar() {
        this.navCtrl.navigateForward(['add-user-car']);
    }
}
