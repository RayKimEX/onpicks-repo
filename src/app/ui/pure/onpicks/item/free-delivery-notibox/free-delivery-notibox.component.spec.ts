import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDeliveryNotiboxComponent } from './free-delivery-notibox.component';

describe('FreeDeliveryNotiboxComponent', () => {
  let component: FreeDeliveryNotiboxComponent;
  let fixture: ComponentFixture<FreeDeliveryNotiboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeDeliveryNotiboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeDeliveryNotiboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
