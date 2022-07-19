import { Component, OnInit } from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {IspService} from '../../../../services/roots/business/isp.service';
import {IspResponse} from '../../../../models/responses/IspResponse';
import {OnInitResolver} from '../../../../models/abstracts/OnInitResolver';
import {map, take} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.page.html',
  styleUrls: ['./author-profile.page.scss'],
})
export class AuthorProfilePage implements OnInit {
  moviliHeader: MoviliHeader = MoviliHeader.AUTHOR_PROFILE();
  ispResponse: IspResponse = new IspResponse();
  imageUrl: string = environment.imageUrl + '/isp_portfolio/';

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController) {
    // this.initResolvers();
  }

  ngOnInit() {
  }
  // initResolvers() {
  //   this.route.data
  //       .pipe(map(value => value.profile),
  //           take(1)).subscribe(value => {
  //             console.log(value);
  //             this.ispResponse = value;
  //   });
  // }

  editUser() {
    this.navCtrl.navigateForward(['/edit-profile']);
  }
}
