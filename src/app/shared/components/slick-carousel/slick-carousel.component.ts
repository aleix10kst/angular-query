import {
  AfterViewInit,
  Component,
  ElementRef, forwardRef,
  Input,
  NgZone,
  OnDestroy
} from '@angular/core';
import {SlickCarouselItemDirective} from '../../directives/slick-carousel/slick-carousel-item.directive';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import { SlickCarouselConfig } from '../../models/slick-carousel/slick-carousel.config';
declare const jQuery: any;

@Component({
  selector: 'slick-carousel',
  templateUrl: './slick-carousel.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SlickCarouselComponent),
    multi: true
  }],
  styleUrls: ['./slick-carousel.component.css']
})
export class SlickCarouselComponent implements AfterViewInit, OnDestroy  {

  @Input() config: SlickCarouselConfig;

  public slides: any = [];
  public $instance: any;
  private initialized: Boolean = false;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone
  ) { }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.destroySlick();
  }

  initSlick() {
    this.zone.runOutsideAngular(() => {
      this.$instance = jQuery(this.elementRef.nativeElement);
      this.$instance.slick(this.config);

      // Tornem a dins a notificar que hem inicialitzat
      this.zone.run(() => {
        this.initialized = true;
      });
    });
  }

  public addSlide(slide: SlickCarouselItemDirective) {
    if (!this.initialized) {
      this.initSlick();
    }
    this.slides.push(slide);
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickAdd', slide.elementRef.nativeElement);
    });
  }

  public removeSlide(slide: SlickCarouselItemDirective) {
    const index = this.slides.indexOf(slide);
    this.slides = this.slides.filter((item) => item !== slide);
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickRemove', index);
    });
  }

  public slickGoTo(index: number) {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickGoTo', index);
    });
  }

  public slickNext() {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickNext');
    });
  }

  public slickPrev() {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickPrev');
    });
  }

  public slickPause() {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickPause');
    });
  }

  public slickPlay() {
    this.zone.runOutsideAngular(() => {
      this.$instance.slick('slickPlay');
    });
  }

  public destroySlick() {
    if (this.$instance) {
      this.zone.runOutsideAngular(() => {
        this.$instance.slick('unslick');
      });
    }
    this.initialized = false;
  }


}
