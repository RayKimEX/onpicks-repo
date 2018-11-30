import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PEffects } from './p.effects';

describe('PEffects', () => {
  let actions$: Observable<any>;
  let effects: PEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
