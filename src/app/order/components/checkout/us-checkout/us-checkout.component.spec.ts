import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCheckoutComponent } from './us-checkout.component';

describe('CheckoutUsComponent', () => {
  let component: UsCheckoutComponent;
  let fixture: ComponentFixture<UsCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
