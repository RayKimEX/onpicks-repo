import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyProductWarningComponent } from './healthy-product-warning.component';

describe('HealthyProductWarningComponent', () => {
  let component: HealthyProductWarningComponent;
  let fixture: ComponentFixture<HealthyProductWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyProductWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyProductWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
