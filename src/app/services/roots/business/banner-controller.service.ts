import { Injectable } from '@angular/core';
import {HttpService} from '../http.service';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {BannersResponse} from '../../../models/responses/BannersResponse';
import {StorageLocalService} from '../../storages/storage-local.service';

@Injectable({
  providedIn: 'root'
})
export class BannerControllerService {
  roleName: string = environment.roleName;
  constructor(private httpService: HttpService,
              private storageLocalService: StorageLocalService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  getBanners() {
    return this.httpService.get('/api/info/banner')
        .pipe(map(value => value.body as BannersResponse[]));
  }

  getWelcomePage() {
    return this.httpService.get('/api/info/welcome-page?roleName=' + this.roleName)
        .pipe(map(value => value.body as any[]));
  }
}
