import { Injectable } from '@angular/core';
import {CategoryControllerService} from './category-controller.service';
import {CatalogControllerService} from './catalog-controller.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private catalogControllerService: CatalogControllerService) {
  }




}
