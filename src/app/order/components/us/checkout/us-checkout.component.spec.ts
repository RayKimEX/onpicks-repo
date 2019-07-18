import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutUsComponent } from './checkout-us.component';

describe('CheckoutUsComponent', () => {
  let component: CheckoutUsComponent;
  let fixture: ComponentFixture<CheckoutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
