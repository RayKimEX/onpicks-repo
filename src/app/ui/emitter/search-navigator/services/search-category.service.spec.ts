import { TestBed } from '@angular/core/testing';

import { SearchCategoryService } from './search-category.service';

describe('SearchCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCategoryService = TestBed.get(SearchCategoryService);
    expect(service).toBeTruthy();
  });
});
