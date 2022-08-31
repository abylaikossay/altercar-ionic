import { Injectable } from '@angular/core';
import { CategoryControllerService } from './category-controller.service';
import { CatalogControllerService } from './catalog-controller.service';
import { TireCatalogTypeEnum } from '../../../models/responses/TireCatalogTypeEnum';

@Injectable({
    providedIn: 'root',
})
export class CatalogService {
    constructor(private catalogControllerService: CatalogControllerService) {
    }

    getByType(tireCatalogTypeEnum: TireCatalogTypeEnum) {
        return this.catalogControllerService.getByType(tireCatalogTypeEnum);
    }


}
