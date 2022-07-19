import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../../services/roots/business/product.service';
import {ProductResponse} from '../../../../models/responses/ProductResponse';
import {NavController} from '@ionic/angular';
import {SettingControllerService} from '../../../../services/controllers/setting-controller.service';

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.page.html',
    styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.PRODUCT_DETAIL('Детали услуги');
    $url: Subscription;
    product: ProductResponse = new ProductResponse();

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private navCtrl: NavController,
                private settingControllerService: SettingControllerService,
    ) {
    }

    ngOnInit() {
        this.getProductById();
    }

    getProductById() {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.productService.getProductById(data.id).toPromise().then(response => {
                    this.product = response;
                    console.log(this.product);
                }).catch(error => {
                    console.error(error);
                });

            }
        });
    }

    saveProduct() {
        console.log(this.product);
        this.navCtrl.navigateRoot(['/isp-products']);
    }

    editPhoto() {

    }

    addNewPhoto() {

    }

    editPrice() {

    }

    async editDuration() {
        const alertChooseAction = this.settingControllerService.setAlertOrderAction();
        const value = await alertChooseAction.present();
    }
}
