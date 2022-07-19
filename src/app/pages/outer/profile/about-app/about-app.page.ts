import {Component, OnInit} from '@angular/core';
import {MoviliHeader} from '../../../../models/commons/MoviliHeader';

@Component({
    selector: 'app-about-app',
    templateUrl: './about-app.page.html',
    styleUrls: ['./about-app.page.scss'],
})
export class AboutAppPage implements OnInit {
    moviliHeader: MoviliHeader = MoviliHeader.ABOUT('О приложении');

    constructor() {
    }

    ngOnInit() {
    }


    goToAferta() {

    }

    rateApp() {

    }
}
