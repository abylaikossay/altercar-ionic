import { Injectable } from '@angular/core';
import {HttpService} from '../http.service';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {BannersResponse} from '../../../models/responses/BannersResponse';
import {UserLocationResponse} from '../../../models/responses/UserLocationResponse';

@Injectable({
  providedIn: 'root'
})
export class LocationControllerService {

  constructor(private httpService: HttpService) {
    this.httpService = this.httpService.setPrefix(environment.url);
  }

  getUserLocations() {
    return this.httpService.get('/api/location')
        .pipe(map(value => value.body as UserLocationResponse[]));
  }

  updateUserLocation(locationId: number) {
    return this.httpService.putJSON(`/api/location?locationId=${locationId}`, null)
        .pipe(map(value => value.body as any));

  }
}
