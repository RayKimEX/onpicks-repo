import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingReviewsComponent } from './trending-reviews.component';

describe('TrendingReviewsComponent', () => {
  let component: TrendingReviewsComponent;
  let fixture: ComponentFixture<TrendingReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
