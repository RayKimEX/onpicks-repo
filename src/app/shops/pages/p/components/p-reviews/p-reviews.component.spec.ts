import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PReviewsComponent } from './p-reviews.component';
import {StoreModule} from '@ngrx/store';
import {PReducer} from '../../pages/store/p.reducer';

describe('PReviewsComponent', () => {
  let component: PReviewsComponent;
  let fixture: ComponentFixture<PReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
