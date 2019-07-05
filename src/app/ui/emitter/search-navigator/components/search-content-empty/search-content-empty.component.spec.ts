import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContentEmptyComponent } from './search-content-empty.component';

describe('SearchContentEmptyComponent', () => {
  let component: SearchContentEmptyComponent;
  let fixture: ComponentFixture<SearchContentEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchContentEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContentEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
