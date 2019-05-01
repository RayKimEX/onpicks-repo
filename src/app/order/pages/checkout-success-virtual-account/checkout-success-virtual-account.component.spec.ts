import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSuccessVirtualAccountComponent } from './checkout-success-virtual-account.component';

describe('CheckoutSuccessNoBankComponent', () => {
  let component: CheckoutSuccessVirtualAccountComponent;
  let fixture: ComponentFixture<CheckoutSuccessVirtualAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutSuccessVirtualAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSuccessVirtualAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
