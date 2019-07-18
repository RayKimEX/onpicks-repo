import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutKrComponent } from './checkout-kr.component';

describe('CheckoutKrComponent', () => {
  let component: CheckoutKrComponent;
  let fixture: ComponentFixture<CheckoutKrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutKrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutKrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
