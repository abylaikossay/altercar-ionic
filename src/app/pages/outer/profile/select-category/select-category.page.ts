import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';
import {CategoryResponse} from '../../../../models/responses/CategoryResponse';
import {CategoryService} from '../../../../services/roots/business/category.service';
import {environment} from '../../../../../environments/environment';
import {ServiceResponse} from '../../../../models/responses/ServiceResponse';
import {NavController} from '@ionic/angular';
import {ToastService} from '../../../../services/controllers/toast.service';

@Component({
    selector: 'app-select-category',
    templateUrl: './select-category.page.html',
    styleUrls: ['./select-category.page.scss'],
})
export class SelectCategoryPage implements OnInit {
    $url: Subscription;
    service: ServiceResponse;
    categories: CategoryResponse[] = [];
    imageUrl: string = environment.imageUrl + '/usluga/';
    moviliHeader: MoviliHeader = MoviliHeader.CATEGORIES_PAGE();

    constructor(private route: ActivatedRoute,
                private categoryService: CategoryService,
                private navCtrl: NavController,
                private toastService: ToastService) {

    }

    ngOnInit() {
        this.getCategoriesByServiceId();
    }

    getCategoriesByServiceId() {
        this.$url = this.route.params.subscribe(data => {
            console.log(data);
            if (data.id) {
                this.categoryService.getCategoriesByUsluga(data.id).subscribe(response => {
                    console.log(response);
                    this.service = response;
                    this.categories = response.categoryResponses;
                    this.imageUrl += response.photo;
                    console.log(this.categories);
                }, error => {
                    console.error(error);
                });
            }
        });
    }

    checkCategory(category) {
        category.selected = category.selected !== true;
        console.log(this.categories);
    }

    goNext() {
        let goNext = false;
        this.categories.forEach(category => {
            if (category.selected) {
                goNext = true;
                return;
            }
        });
        if (goNext) {
            const categoryIds = [];
            this.categories.forEach(category => {
                if (category.selected) {
                    categoryIds.push(category.id);
                }
            });
            console.log(categoryIds);
            const ids = categoryIds.join(',');
            console.log(ids);
            this.categoryService.addTemplateCategories(ids).toPromise().then(resp => {
                console.log(resp);
                this.navCtrl.navigateForward(['/isp-new-products']);
            }).catch(err => {
                console.error(err);
            })
        } else {
            this.toastService.present('Пожалуйста выберите категорю');
        }
    }
}
