import {Injectable} from '@angular/core';
import {BannerControllerService} from './banner-controller.service';
import {LocationControllerService} from './location-controller.service';

@Injectable({
    providedIn: 'root',
})
export class LocationService {

    constructor(private locationControllerService: LocationControllerService) {
    }

    getUserLocations() {
      return this.locationControllerService.getUserLocations();
    }

    updateUserLocation(locationId: number) {
        return this.locationControllerService.updateUserLocation(locationId);
    }

}
