import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPictureReviewSubComponent } from './p-picture-review-sub.component';

describe('PPictureReviewSubComponent', () => {
  let component: PPictureReviewSubComponent;
  let fixture: ComponentFixture<PPictureReviewSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPictureReviewSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPictureReviewSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
