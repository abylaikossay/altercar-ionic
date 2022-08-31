import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/controllers/modal.service';
import { MoviliHeader } from '../../models/commons/MoviliHeader';
import { CatalogService } from '../../services/roots/business/catalog.service';
import { TireCatalogTypeEnum } from '../../models/responses/TireCatalogTypeEnum';
import { TireCatalogResponse } from '../../models/responses/TireCatalogResponse';
import { TireFilterRequest } from '../../models/requests/TireFilterRequest';
import { CarModelResponse } from '../../models/responses/CarModelResponse';
import { SettingControllerService } from '../../services/controllers/setting-controller.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
    tireFilter: TireFilterRequest = new TireFilterRequest();
    seasons: TireCatalogResponse[] = [];
    widths: TireCatalogResponse[] = [];
    heights: TireCatalogResponse[] = [];
    diameters: TireCatalogResponse[] = [];

    constructor(private modalService: ModalService,
                private settingControllerService: SettingControllerService,
                private catalogService: CatalogService) {
    }

    moviliHeader: MoviliHeader = MoviliHeader.FILTER();

    ngOnInit() {
        this.getCatalog();
    }

    getCatalog() {
        this.catalogService.getByType(TireCatalogTypeEnum.DIAMETER).toPromise().then(resp => {
            this.diameters = resp;
        }).catch(err => {
            console.log(err);
        });
        this.catalogService.getByType(TireCatalogTypeEnum.WIDTH).toPromise().then(resp => {
            this.widths = resp;
        }).catch(err => {
            console.log(err);
        });
        this.catalogService.getByType(TireCatalogTypeEnum.HEIGHT).toPromise().then(resp => {
            this.heights = resp;
        }).catch(err => {
            console.log(err);
        });
        this.catalogService.getByType(TireCatalogTypeEnum.SEASON).toPromise().then(resp => {
            this.seasons = resp;
        }).catch(err => {
            console.log(err);
        });
    }

    checkCategory(category) {
        category.checked = category.checked !== true;
    }

    applyFilter() {
        console.log(this.tireFilter);
        this.modalService.dismiss(this.tireFilter);
    }

    cleanFilter() {
        this.tireFilter = new TireFilterRequest();

    }

    goBack() {
        this.modalService.dismiss(null);
    }

    async openAlertSeason(header: string) {
        const alertChooseFilter = this.settingControllerService.setAlertChooseFilter(this.seasons, header);
        const value = await alertChooseFilter.present();
        console.log(value);
        if (value.data) {
            this.tireFilter.seasonId = value.data.id;
            this.tireFilter.seasonName = value.data.filterName;
        }
    }

    async openAlertWidth(header: string) {
        const alertChooseFilter = this.settingControllerService.setAlertChooseFilter(this.widths, header);
        const value = await alertChooseFilter.present();
        console.log(value);
        if (value.data) {
            this.tireFilter.widthId = value.data.id;
            this.tireFilter.widthName = value.data.filterName;
        }
    }

    async openAlertHeight(header: string) {
        const alertChooseFilter = this.settingControllerService.setAlertChooseFilter(this.heights, header);
        const value = await alertChooseFilter.present();
        console.log(value);
        if (value.data) {
            this.tireFilter.heightId = value.data.id;
            this.tireFilter.heightName = value.data.filterName;
        }
    }

    async openAlertDiameter(header: string) {
        const alertChooseFilter = this.settingControllerService.setAlertChooseFilter(this.diameters, header);
        const value = await alertChooseFilter.present();
        console.log(value);
        if (value.data) {
            this.tireFilter.diameterId = value.data.id;
            this.tireFilter.diameterName = value.data.filterName;
        }
    }
}
