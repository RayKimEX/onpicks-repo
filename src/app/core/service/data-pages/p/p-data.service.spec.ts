import { TestBed } from '@angular/core/testing';

import { PDataService } from './p-data.service';

describe('PDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PDataService = TestBed.get(PDataService);
    expect(service).toBeTruthy();
  });
});
