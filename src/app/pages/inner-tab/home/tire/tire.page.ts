import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../../../services/controllers/toast.service';
import { NavController } from '@ionic/angular';
import { MoviliHeader } from '../../../../models/commons/MoviliHeader';
import { TireService } from '../../../../services/roots/business/tire.service';
import { TireResponse } from '../../../../models/responses/TireResponse';
import { environment } from '../../../../../environments/environment';
import { PartnerService } from '../../../../services/roots/business/partner.service';

@Component({
    selector: 'app-tire',
    templateUrl: './tire.page.html',
    styleUrls: ['./tire.page.scss'],
})
export class TirePage implements OnInit {
    url: Subscription;
    tireId: number;
    tire: TireResponse = new TireResponse();
    moviliHeader: MoviliHeader = MoviliHeader.TITLE_WITH_BACK('Купить шину');
    imgUrl: string = environment.imageUrl + '/tire-photo/';
    partners: any[] = [];

    constructor(private route: ActivatedRoute,
                private toastService: ToastService,
                private navCtrl: NavController,
                private tireService: TireService,
                private partnerService: PartnerService,
    ) {
    }

    ngOnInit() {
        this.url = this.route.params.subscribe(data => {
            if (data.id) {
                console.log(data.id);
                this.tireId = data.id;
                this.getCar();
                this.getPartner();
            }
        });
    }

    getCar() {
        this.tireService.getTireById(this.tireId).toPromise().then(resp => {
            console.log(resp);
            this.tire = resp;
            // this.getModels(resp.carBrand.id);
            this.moviliHeader = MoviliHeader.TITLE_WITH_BACK('Купить ' + resp.name);
        }).catch(err => {
            console.log(err);
        });
    }

    getPartner() {
        this.partnerService.getPartnersByTireId(this.tireId).toPromise().then(resp => {
            console.log(resp);
            this.partners = resp;
        }).catch(err => {
            console.log(err);
        });
    }

}