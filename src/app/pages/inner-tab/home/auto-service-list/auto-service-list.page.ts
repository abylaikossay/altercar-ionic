import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AutoServiceService} from '../../../../services/roots/business/auto-service.service';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {PartnerService} from '../../../../services/roots/business/partner.service';
import { IonRefresher, NavController } from '@ionic/angular';
import { CategoryService } from '../../../../services/roots/business/category.service';
import { RefreshListener } from '../../../../models/commons/RefreshListener';
import { ResolveControlService } from '../../../../services/roots/resolve-control.service';
import { ResolveOnListenerService } from '../../../../services/roots/resolve-on-listener.service';

@Component({
    selector: 'app-auto-service-list',
    templateUrl: './auto-service-list.page.html',
    styleUrls: ['./auto-service-list.page.scss'],
})
export class AutoServiceListPage implements OnInit, RefreshListener, OnDestroy {
    url: Subscription;
    categoryId: number;
    userCarId: number;
    partners: any[] = [];
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Сервис');
    filters: any[] = [];
    @ViewChild('ionRefresher') ionRefresh: IonRefresher;

    constructor(private route: ActivatedRoute,
                private autoServiceService: AutoServiceService,
                private navCtrl: NavController,
                private partnerService: PartnerService,
                private resolveControlService: ResolveControlService,
                private resolveOnListener: ResolveOnListenerService) {
    }

    refreshPage(event) {
        this.resolveOnListener.call();
        this.resolveControlService.forceRunCurrentGuards(this.ionRefresh);
    }

    ngOnDestroy(): void {
        this.resolveOnListener.delete('auto-service-list');
    }

    ionViewWillEnter() {
        this.resolveOnListener.add('auto-service-list', this.call.bind(this));
    }

    ionViewDidLeave() {
        this.resolveOnListener.delete('auto-service-list');
    }

    call() {
        this.getPartners();
    }

    ngOnInit() {
        this.url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.categoryId = data.id;
                console.log(data.id);
                this.getCategory(data.id);
                this.getPartners();
            }
            if (data.carId) {
                this.userCarId = data.carId;
            }
        });
    }

    getPartners() {
        // this.autoServiceService.getPartnersByCategoryId(this.categoryId).toPromise().then(resp => {
        //     console.log(resp);
        // }).catch(err => {
        //     console.log(err);
        // });
        // this.partnerService.getAllServicePartners(this.categoryId).toPromise().then(resp => {
        //     this.partners = resp;
        //     console.log(resp);
        // }).catch(err => {
        //     console.error(err);
        // });
        // tslint:disable-next-line:triple-equals
        if (this.categoryId == 0) {
            this.autoServiceService.getFavoritePartners().toPromise().then(resp => {
                console.log(resp);
                this.partners = resp;
            }).catch(err => {
                console.log(err);
            });
        } else {
            this.autoServiceService.getPartnersByCategoryId(this.categoryId).toPromise().then(resp => {
                console.log(resp);
                this.partners = resp;
            }).catch(err => {
                console.log(err);
            });
        }

        // this.partnerService.getAll().toPromise().then(resp => {
        //     console.log(resp);
        // }).catch(err => {
        //     console.error(err);
        // });
    }

    getCategory(id: number) {
        // tslint:disable-next-line:triple-equals
        if (id == 0) {
            this.moviliHeader = MoviliHeader.TITLE_WITH_BACK('Избранные сервисы');
        } else {
            this.autoServiceService.getCategoryById(id).toPromise().then(resp => {
                this.moviliHeader = MoviliHeader.TITLE_WITH_BACK(resp.name);
                console.log(resp);
            }).catch(err => {
                console.error(err);
            });
        }
    }

    goToPartner(partner: any) {
        if (this.userCarId) {
            this.navCtrl.navigateForward([`appointment-info/${partner.id}/user-car/${this.userCarId}/${this.categoryId}`]);
        } else {
            this.navCtrl.navigateForward([`appointment-info/${partner.id}/${this.categoryId}`]);
        }
    }
}
