import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFailureComponent } from './checkout-failure.component';

describe('CheckoutFailureComponent', () => {
  let component: CheckoutFailureComponent;
  let fixture: ComponentFixture<CheckoutFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
