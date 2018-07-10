import {AfterViewInit, Component, ElementRef, forwardRef, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

declare const jQuery: any;

@Component({
  selector: 'bootstrap-select',
  templateUrl: './bootstrap-select.component.html',
  styleUrls: ['./bootstrap-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BootstrapSelectComponent),
      multi: true
    }
  ]
})
export class BootstrapSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit {

  @ViewChild('selectpicker') elementRef;
  $instance;
  value;
  onChange = (_: any) => {};

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.initSelect();
  }

  ngAfterViewInit() {
    // this.initSelect();
  }

  initSelect() {
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

  writeValue(value: any): void {
    this.value = value;
    if (this.$instance && value) {
      this.zone.runOutsideAngular(() => {
        this.$instance.selectpicker('val', value);
      });
    }
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

}
