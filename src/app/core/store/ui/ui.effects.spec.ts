import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UiEffects } from './ui.effects';

describe('UiEffects', () => {
  let actions$: Observable<any>;
  let effects: UiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UiEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(UiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
