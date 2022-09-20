import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  $url: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.$url = this.route.params.subscribe(data => {
      console.log(data);
      if (data.id) {
        // this.partnerId = data.id;
        // this.partnerService.getById(data.id).toPromise().then(resp => {
        //   console.log(resp);
        //   this.partner = resp;
        //   // this.services[0] = {
        //   //     productName: resp.productName,
        //   //     ispProductId: resp.ispProductId,
        //   //     ispProductPrice: resp.ispProductPrice,
        //   //     productId: resp.productId,
        //   // };
        // }).catch(err => {
        //   console.log(err);
        //   this.toastService.present('Произошла ошибка сервера');
        // });
      }
    });
    this.$url.unsubscribe();
  }

}
