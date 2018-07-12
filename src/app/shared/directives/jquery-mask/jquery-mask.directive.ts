import {AfterViewInit, Directive, ElementRef, Input, NgZone} from '@angular/core';
import {MaskInput} from '../../models/MaskInput';

declare const jQuery: any;

@Directive({
  selector: '[jquery-mask]'
})
export class JqueryMaskDirective implements AfterViewInit {

  @Input() mask: MaskInput;
  $instance: any;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone
  ) { }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.$instance = jQuery(this.elementRef.nativeElement);
      this.$instance.mask(this.mask.value, this.mask.params);
    });
  }

}
