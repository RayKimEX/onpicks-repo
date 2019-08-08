import { TestBed } from '@angular/core/testing';

import { UniversalInterceptorService } from './universal-interceptor.service';

describe('UniversalInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversalInterceptorService = TestBed.get(UniversalInterceptorService);
    expect(service).toBeTruthy();
  });
});
