import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POtherSellerComponent } from './p-other-seller.component';

describe('POtherSellerComponent', () => {
  let component: POtherSellerComponent;
  let fixture: ComponentFixture<POtherSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POtherSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POtherSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
