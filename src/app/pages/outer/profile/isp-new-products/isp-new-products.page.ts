import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {CategoryResponse} from '../../../../models/responses/CategoryResponse';
import {ProductResponse} from '../../../../models/responses/ProductResponse';
import {ProductService} from '../../../../services/roots/business/product.service';
import {CategoryService} from '../../../../services/roots/business/category.service';

@Component({
    selector: 'app-isp-new-products',
    templateUrl: './isp-new-products.page.html',
    styleUrls: ['./isp-new-products.page.scss'],
})
export class IspNewProductsPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.ISP_SERVICES();
    categories: CategoryResponse[];
    ispProducts: ProductResponse[];
    selectedCategoryId: number;

    constructor(private productService: ProductService,
                private categoryService: CategoryService) {
    }

    ngOnInit() {
        console.log('ya opened');
        this.emptyAll();
        //TODO ask Nazar to change ngoninit чтобы каждый раз открывалось
        this.getIspTemplateCategories();
    }

    emptyAll() {
        this.categories = [];
        this.ispProducts = [];
        this.selectedCategoryId = null;
    }

    async getIspTemplateCategories() {
        this.categoryService.getIspTemplateCategories().toPromise().then(resp => {
            console.log(resp);
            this.categories = resp;
            this.categories[0].selected = true;
            this.selectedCategoryId = this.categories[0].id;
            this.getProductsByCategory();
        }).catch(err => {
            console.error(err);
        });
    }

    async getProductsByCategory() {
        this.productService.getProductsByCategoryId(this.selectedCategoryId).toPromise().then(resp => {
            console.log(resp);
            this.ispProducts = resp;
        }).catch(err => {
            console.error(err);
        });
    }

    changeProducts(category: any) {
        this.categories.forEach(element => element.selected = false);
        category.selected = true;
        this.selectedCategoryId = category.id;
        this.getProductsByCategory();
    }

}
