// Section 2

import {Action} from '@ngrx/store';

export const UPDATE_FILTER_STATE    = '[C] UPDATE_FILTER_STATE';
export const FETCH_CATEGORY_DATA = '[C] FETCH_CATEGORY_DATA';

export class UpdateFilterState implements Action {
  readonly type = UPDATE_FILTER_STATE;

  constructor(public payload: boolean) { }
}

export class FetchCategoryData implements Action {
  readonly type = FETCH_CATEGORY_DATA;

  constructor(public payload: boolean) { }
}

export type CActions =
  UpdateFilterState |
  FetchCategoryData;
