import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCheckoutMenuComponent } from './us-checkout-menu.component';

describe('UsCheckoutMenuComponent', () => {
  let component: UsCheckoutMenuComponent;
  let fixture: ComponentFixture<UsCheckoutMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsCheckoutMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsCheckoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
