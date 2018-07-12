import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselComponent } from './components/slick-carousel/slick-carousel.component';
import {SlickCarouselItemDirective} from './directives/slick-carousel/slick-carousel-item.directive';
import { BootstrapSelectComponent } from './components/bootstrap-select/bootstrap-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BootstrapSelectDirective } from './directives/bootstrap-select/bootstrap-select.directive';
import { BootstrapSelectItemDirective } from './directives/bootstrap-select/bootstrap-select-item.directive';
import {JqueryMaskDirective} from './directives/jquery-mask/jquery-mask.directive';

@NgModule({
  declarations: [
    SlickCarouselComponent,
    SlickCarouselItemDirective,
    BootstrapSelectComponent,
    BootstrapSelectDirective,
    BootstrapSelectItemDirective,
    JqueryMaskDirective
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
    BootstrapSelectDirective,
    BootstrapSelectItemDirective,
    JqueryMaskDirective
  ]
})
export class SharedModule { }
