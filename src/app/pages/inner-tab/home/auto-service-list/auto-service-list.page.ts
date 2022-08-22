import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AutoServiceService} from '../../../../services/roots/business/auto-service.service';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {PartnerService} from '../../../../services/roots/business/partner.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-auto-service-list',
    templateUrl: './auto-service-list.page.html',
    styleUrls: ['./auto-service-list.page.scss'],
})
export class AutoServiceListPage implements OnInit {
    url: Subscription;
    categoryId: number;
    userCarId: number;
    partners: any[] = [];
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Сервис');
    filters: any[] = [];

    constructor(private route: ActivatedRoute,
                private autoServiceService: AutoServiceService,
                private navCtrl: NavController,
                private partnerService: PartnerService) {
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
        this.partnerService.getAll().toPromise().then(resp => {
            console.log(resp);
            this.partners = resp;
        }).catch(err => {
            console.error(err);
        });
    }

    getCategory(id: number) {
        this.autoServiceService.getCategoryById(id).toPromise().then(resp => {
            this.moviliHeader = MoviliHeader.TITLE_WITH_BACK(resp.name);
            console.log(resp);
        }).catch(err => {
            console.error(err);
        });
    }

    goToPartner(partner: any) {
        if (this.userCarId) {
            this.navCtrl.navigateForward([`appointment-info/${partner.id}/user-car/${this.userCarId}`]);
        } else {
            this.navCtrl.navigateForward([`appointment-info/${partner.id}`]);
        }
    }
}
