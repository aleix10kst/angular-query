import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { SlickCarouselConfig } from './shared/models/slick-carousel/slick-carousel.config';

declare const jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Wrappers for jQuery plugins';
  bootstrapSelectGroup: FormGroup;
  bootstrapSelectDirectiveModel = 'Ketchup';

  options = [
    {
      title: 'Mustard', value: 'Mustard'
    },
    {
      title: 'Ketchup', value: 'Ketchup'
    },
    {
      title: 'Barbecue', value: 'Barbecue'
    }
  ];

  directiveOptions = [
    'Mustard',
    'Ketchup',
    'Barbecue'
  ];

  configuration: SlickCarouselConfig = {
    arrows: true,
    dots: false,
    draggable: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    appendArrows: jQuery('.selector-controls'),
    prevArrow: '<button type="button" class="slick-prev"><span class="icon icon-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="icon icon-chevron-right"></span></button>',
  };

  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.bootstrapSelectGroup = this.fb.group({
      bootstrapSelect: 'Barbecue'
    });
  }

  addSlide() {
    this.slides.push({img: 'http://placehold.it/350x150/777777'});
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  addSelectItem() {
    this.directiveOptions.push('Mayonnaise');
  }

  removeSelectItem() {
    this.directiveOptions.splice(0, 1);
  }

}
