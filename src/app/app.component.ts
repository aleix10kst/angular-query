import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  configuration = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];

  addSlide() {
    this.slides.push({img: 'http://placehold.it/350x150/777777'});
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
}
