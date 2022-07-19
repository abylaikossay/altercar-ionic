import { Injectable } from '@angular/core';
import {HttpService} from '../http.service';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {BannersResponse} from '../../../models/responses/BannersResponse';
import {IspResponse} from '../../../models/responses/IspResponse';

@Injectable({
  providedIn: 'root'
})
export class IspControllerService {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  getUserInfo() {
    return this.httpService.get('/api/isp/me')
        .pipe(map(value => value.body as IspResponse));
  }
}
