import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { BannerService } from '../../../../services/roots/business/banner.service';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.page.html',
    styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
    @ViewChild('mySlider') slider: IonSlides;
    slideOpts = {
        initialSlide: 0,
        speed: 200,
    };
    slides: any = [
        {
            title: 'Первый слайд',
            description: 'Описание слайда',
            text: 'Далее',
        },
        {
            title: 'Второй слайд',
            description: 'Описание слайда',
            text: 'Начать!',
        }
    ];
    photoUrl: string = environment.imageUrl + '/welcome_page/';

    constructor(private navCtrl: NavController,
                private bannerService: BannerService) {
    }

    ngOnInit() {
        this.getAllSlidesForIsp();
    }

    getAllSlidesForIsp() {
        // this.bannerService.getWelcomePage().toPromise().then(resp => {
        //     console.log(resp);
        //     resp.forEach(element => {
        //         element.text = 'Далее';
        //     });
        //     resp[resp.length - 1].text = 'Начать!';
        //     this.slides = resp;
        // });
    }

    goNext(slide: any) {
        console.log(slide);
        this.slider.slideNext();
        if (slide.text === 'Начать!') {
            this.navCtrl.navigateForward(['/main/login']);
        }
    }
}
