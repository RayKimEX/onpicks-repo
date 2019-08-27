import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavigatorComponent } from './order-navigator.component';

describe('OrderNavigatorComponent', () => {
  let component: OrderNavigatorComponent;
  let fixture: ComponentFixture<OrderNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
