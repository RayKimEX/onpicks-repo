import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableReviewsComponent } from './available-reviews.component';

describe('AvailableReviewsComponent', () => {
  let component: AvailableReviewsComponent;
  let fixture: ComponentFixture<AvailableReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
