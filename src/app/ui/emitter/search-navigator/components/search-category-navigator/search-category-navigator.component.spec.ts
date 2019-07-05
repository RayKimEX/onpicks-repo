import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoryNavigatorComponent } from './search-category-navigator.component';

describe('SearchCategoryNavigatorComponent', () => {
  let component: SearchCategoryNavigatorComponent;
  let fixture: ComponentFixture<SearchCategoryNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCategoryNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCategoryNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
