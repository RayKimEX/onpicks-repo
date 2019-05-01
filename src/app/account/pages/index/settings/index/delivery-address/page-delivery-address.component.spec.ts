import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeliveryAddressComponent } from './page-delivery-address.component';

describe('DeliveryAddressComponent', () => {
  let component: PageDeliveryAddressComponent;
  let fixture: ComponentFixture<PageDeliveryAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDeliveryAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeliveryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
