import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRefundComponent } from './p-refund.component';

describe('PRefundComponent', () => {
  let component: PRefundComponent;
  let fixture: ComponentFixture<PRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
