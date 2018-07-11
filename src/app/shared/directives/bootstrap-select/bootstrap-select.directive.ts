import {AfterViewInit, Directive, ElementRef, forwardRef, Input, NgZone, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

declare const jQuery: any;

@Directive({
  selector: '[bootstrapSelect]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BootstrapSelectDirective),
      multi: true
    }
  ]
})
export class BootstrapSelectDirective implements AfterViewInit, ControlValueAccessor {

  $instance: any;
  value;
  onChange = (_: any) => {};

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone
  ) { }

  ngAfterViewInit(): void {
    this.initSelect();
  }

  private initSelect(): void {
    this.zone.runOutsideAngular(() => {
      this.$instance = jQuery(this.elementRef.nativeElement);
      this.$instance.selectpicker();

      this.$instance.on('changed.bs.select', (event) => {
        this.zone.run(() => {
          this.onChange(event.target.value);
        });
      });
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    this.value = value;
    if (this.$instance && value) {
      this.zone.runOutsideAngular(() => {
        this.$instance.selectpicker('val', value);
      });
    }
  }

}
