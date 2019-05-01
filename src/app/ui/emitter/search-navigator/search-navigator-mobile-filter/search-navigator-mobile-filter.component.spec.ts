import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavigatorMobileFilterComponent } from './search-navigator-mobile-filter.component';

describe('SearchNavigatorMobileFilterComponent', () => {
  let component: SearchNavigatorMobileFilterComponent;
  let fixture: ComponentFixture<SearchNavigatorMobileFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNavigatorMobileFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNavigatorMobileFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
