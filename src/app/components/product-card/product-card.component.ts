import { Component, Input, OnInit } from '@angular/core';
import {ProductResponse} from '../../models/responses/ProductResponse';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  // product: any = {isSelected: false};

  @Input() product: ProductResponse;

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  addProduct() {
    // this.product.isSelected = this.product.isSelected !== true;
  }

  editProduct() {
    this.navCtrl.navigateForward(['/edit-product/' + this.product.ispProductId]);
  }
}
