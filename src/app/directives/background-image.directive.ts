import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { AppBackgroundImageInput } from '../models/commons/AppBackgroundImageInput';
import { ImageService } from '../services/caches/image.service';
import { environment } from '../../environments/environment';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective implements OnDestroy {

  @Input() indexUpload = 3;

  @Input('appBackgroundImage')
  public set appBackgroundImage(appBackgroundImageInput: AppBackgroundImageInput) {
    if (!appBackgroundImageInput) {
      appBackgroundImageInput = {
        id: '/assets/default.png',
        index: 1
      };
    }
    if (!appBackgroundImageInput?.id) {
      appBackgroundImageInput.id = '/assets/default.png';
    }
    const supports = 'loading' in HTMLImageElement.prototype;
    if (supports && false) {
      this.el.nativeElement.setAttribute('loading', 'lazy'); // todo use in img container
    } else {
      this.setInterSectionObserver(appBackgroundImageInput);
    }

  }

  private observer: IntersectionObserver;

  constructor(private el: ElementRef,
              private imageService: ImageService) {
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setInterSectionObserver(appBackgroundImageInput: AppBackgroundImageInput) {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observer = new IntersectionObserver(entries => {
      if (appBackgroundImageInput.index < (this.indexUpload || 3)) {
        this.setBackgroundImage(appBackgroundImageInput);
      }
      if (entries[0].isIntersecting === true) {
        this.setBackgroundImage(appBackgroundImageInput);
      }
    });
    this.observer.observe(this.el.nativeElement as HTMLElement);
  }

  setBackgroundImage(appBackgroundImageInput: AppBackgroundImageInput) {
    if (appBackgroundImageInput.id instanceof File) {
      this.el.nativeElement.src = `${URL.createObjectURL(appBackgroundImageInput.id)}`;
      return;
    }
    if (appBackgroundImageInput.id.includes('assets')) {
      this.el.nativeElement.src = `${appBackgroundImageInput.id}`;
      return;
    }
    const type = appBackgroundImageInput.id.split('_')[0];
    this.el.nativeElement.src = `${environment.imageUrl}/${type}/${appBackgroundImageInput.id}`;
    if (this.observer) {
      this.observer.unobserve(this.el.nativeElement as HTMLElement);
    }
  }


}
