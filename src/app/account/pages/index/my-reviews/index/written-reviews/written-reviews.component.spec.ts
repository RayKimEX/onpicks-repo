import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenReviewsComponent } from './written-reviews.component';

describe('WrittenReviewsComponent', () => {
  let component: WrittenReviewsComponent;
  let fixture: ComponentFixture<WrittenReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrittenReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
