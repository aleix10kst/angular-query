import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselComponent } from './components/slick-carousel/slick-carousel.component';
import {SlickCarouselItemDirective} from './directives/slick-carousel/slick-carousel-item.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select/bootstrap-select.directive';

@NgModule({
  declarations: [
    SlickCarouselComponent,
    SlickCarouselItemDirective,
    BootstrapSelectDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SlickCarouselComponent,
    SlickCarouselItemDirective
  ]
})
export class SharedModule { }
