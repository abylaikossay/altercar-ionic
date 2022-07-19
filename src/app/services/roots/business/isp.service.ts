import { Injectable } from '@angular/core';
import {IspControllerService} from './isp-controller.service';

@Injectable({
  providedIn: 'root'
})
export class IspService {

  constructor(private ispControllerService: IspControllerService) { }


  getIspInfo() {
      return this.ispControllerService.getUserInfo();
  }
}
