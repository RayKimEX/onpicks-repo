import { TestBed } from '@angular/core/testing';

import { SearchInfiniteLoadService } from './search-infinite-load.service';

describe('SearchInfiniteLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchInfiniteLoadService = TestBed.get(SearchInfiniteLoadService);
    expect(service).toBeTruthy();
  });
});
