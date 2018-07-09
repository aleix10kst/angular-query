import {AfterViewInit, Directive, ElementRef, Host, OnDestroy} from '@angular/core';
import {SlickCarouselComponent} from '../../components/slick-carousel/slick-carousel.component';

@Directive({
  selector: '[slick-carousel-item]'
})
export class SlickCarouselItemDirective implements AfterViewInit, OnDestroy {

  constructor(public elementRef: ElementRef, @Host() private carousel: SlickCarouselComponent) {
  }

  ngAfterViewInit() {
    this.carousel.addSlide(this);
  }
  ngOnDestroy() {
    this.carousel.removeSlide(this);
  }

}
