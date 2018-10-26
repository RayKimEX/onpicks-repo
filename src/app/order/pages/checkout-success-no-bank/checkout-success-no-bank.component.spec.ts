import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSuccessNoBankComponent } from './checkout-success-no-bank.component';

describe('CheckoutSuccessNoBankComponent', () => {
  let component: CheckoutSuccessNoBankComponent;
  let fixture: ComponentFixture<CheckoutSuccessNoBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutSuccessNoBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSuccessNoBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
