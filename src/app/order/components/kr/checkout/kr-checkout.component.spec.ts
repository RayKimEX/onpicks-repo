import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrCheckoutComponent } from './kr-checkout.component';

describe('CheckoutKrComponent', () => {
  let component: KrCheckoutComponent;
  let fixture: ComponentFixture<KrCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
