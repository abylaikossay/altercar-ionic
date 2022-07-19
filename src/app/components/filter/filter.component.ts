import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/controllers/modal.service';
import { MoviliHeader } from '../../models/commons/MoviliHeader';
import { SettingControllerService } from 'src/app/services/controllers/setting-controller.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  categories: any = [
    {id: 1, name: 'По рейтингу', checked: false},
    {id: 2, name: 'По популярности', checked: false},
    {id: 3, name: 'По цене', checked: false},
    {id: 4, name: 'Новые', checked: true}];

    constructor(private modalService: ModalService) {
    }

  moviliHeader: MoviliHeader = MoviliHeader.FILTER();

  ngOnInit() {
  }

  checkCategory(category) {
    category.checked = category.checked !== true;
  }

    applyFilter() {
        this.modalService.dismiss(this.categories);
    }
}
