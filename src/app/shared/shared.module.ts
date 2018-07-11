import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselComponent } from './components/slick-carousel/slick-carousel.component';
import {SlickCarouselItemDirective} from './directives/slick-carousel/slick-carousel-item.directive';
import { BootstrapSelectComponent } from './components/bootstrap-select/bootstrap-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BootstrapSelectDirective } from './directives/bootstrap-select/bootstrap-select.directive';

@NgModule({
  declarations: [
    SlickCarouselComponent,
    SlickCarouselItemDirective,
    BootstrapSelectComponent,
    BootstrapSelectDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselComponent,
    SlickCarouselItemDirective,
    BootstrapSelectComponent,
    BootstrapSelectDirective
  ]
})
export class SharedModule { }
