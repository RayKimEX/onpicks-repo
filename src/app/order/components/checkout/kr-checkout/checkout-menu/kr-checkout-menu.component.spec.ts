import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrCheckoutMenuComponent } from './kr-checkout-menu.component';

describe('KrCheckoutMenuComponent', () => {
  let component: KrCheckoutMenuComponent;
  let fixture: ComponentFixture<KrCheckoutMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrCheckoutMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrCheckoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
