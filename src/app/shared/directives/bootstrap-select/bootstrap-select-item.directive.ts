import {AfterViewInit, Directive, ElementRef, Host, OnDestroy, OnInit} from '@angular/core';
import {BootstrapSelectDirective} from './bootstrap-select.directive';

declare const jQuery: any;

@Directive({
  selector: '[bootstrap-select-item]'
})
export class BootstrapSelectItemDirective implements AfterViewInit, OnDestroy {

  constructor(
    private elementRef: ElementRef,
    @Host() private select: BootstrapSelectDirective
  ) {}

  ngAfterViewInit() {
    this.select.updateView();
  }


  ngOnDestroy() {
    this.select.updateView(this.elementRef.nativeElement.value);
  }
}
