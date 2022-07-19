import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {ProductService} from '../../../../services/roots/business/product.service';
import {ProductResponse} from '../../../../models/responses/ProductResponse';
import {CategoryService} from '../../../../services/roots/business/category.service';
import {ToastService} from '../../../../services/controllers/toast.service';
import {CategoryResponse} from '../../../../models/responses/CategoryResponse';
import {OnInitResolver} from '../../../../models/abstracts/OnInitResolver';
import {map, take} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-isp-products',
    templateUrl: './isp-products.page.html',
    styleUrls: ['./isp-products.page.scss'],
})
export class IspProductsPage implements OnInit, OnInitResolver {
    moviliHeader: MoviliHeader = MoviliHeader.ISP_SERVICES();
    ispProducts: ProductResponse[];
    categories: CategoryResponse[];
    selectedCategoryId: number;

    constructor(private productService: ProductService,
                private categoryService: CategoryService,
                private route: ActivatedRoute,
                private toastService: ToastService) {
        this.initResolvers();
    }

    initResolvers() {
        this.route.data
            .pipe(map(value => value.categories),
                take(1)).subscribe(value => {
            this.categories = value;
            console.log(this.categories);
            this.categories[0].selected = true;
            this.selectedCategoryId = this.categories[0].id;
            this.getProductsByCategory();
        });
    }

    async getProductsByCategory() {
        this.productService.getIspProductsByCategoryId(this.selectedCategoryId).toPromise().then(resp => {
            console.log(resp);
            this.ispProducts = resp;
        }).catch(err => {
            console.error(err);
        });
    }

    ngOnInit() {
        console.log(this.selectedCategoryId);
        // this.getIspCategories();
        // this.getIspProducts();
    }

    // getIspCategories() {
    //     this.categoryService.getIspCategories().toPromise().then(resp => {
    //         console.log(resp);
    //         this.categories = resp;
    //         this.categories.forEach(category => {
    //             category.selected = false;
    //         });

    //     }).catch(error => {
    //         this.toastService.present('Ошибка сервера!');
    //     });
    // }

    changeProducts(category: any) {
        this.categories.forEach(element => element.selected = false);
        category.selected = true;
        this.selectedCategoryId = category.id;
        this.getProductsByCategory();
    }

    getIspProducts() {
        console.log('go to api');
        this.productService.getIspProducts().toPromise().then(response => {
            console.log(response);
            this.ispProducts = response;
        }).catch(error => {
            console.error(error);
        });
    }
}
