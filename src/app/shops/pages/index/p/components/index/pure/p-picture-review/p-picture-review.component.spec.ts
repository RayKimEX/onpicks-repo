import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPictureReviewComponent } from './p-picture-review.component';

describe('PCustomerComponent', () => {
  let component: PPictureReviewComponent;
  let fixture: ComponentFixture<PPictureReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPictureReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPictureReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
