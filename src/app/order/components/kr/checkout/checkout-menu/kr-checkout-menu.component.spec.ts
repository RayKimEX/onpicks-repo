import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingCheckoutComponent } from './floating-checkout.component';

describe('FloatingCheckoutComponent', () => {
  let component: FloatingCheckoutComponent;
  let fixture: ComponentFixture<FloatingCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
