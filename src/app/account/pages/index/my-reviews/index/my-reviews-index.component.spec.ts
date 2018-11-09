import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReviewsIndexComponent } from './my-reviews-index.component';

describe('MyReviewsIndexComponent', () => {
  let component: MyReviewsIndexComponent;
  let fixture: ComponentFixture<MyReviewsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReviewsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReviewsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
