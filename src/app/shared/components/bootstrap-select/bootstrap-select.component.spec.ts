import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSelectComponent } from './bootstrap-select.component';

describe('BootstrapSelectComponent', () => {
  let component: BootstrapSelectComponent;
  let fixture: ComponentFixture<BootstrapSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
