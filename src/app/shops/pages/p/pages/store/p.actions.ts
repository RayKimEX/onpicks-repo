// Section 2

import {Action} from '@ngrx/store';

export const UPDATE_MENUPOSITION    = '[P] UPDATE_MENUPOSITION';

export const TOGGLE_POPUP_COMMUNICATE_BOX    = '[P] TOGGLE_POPUP_REVIEWS';


export class UpdateMenuPosition implements Action {
  readonly type = UPDATE_MENUPOSITION;

  constructor(public payload: number) {}
}


export class TogglePopupReviews implements Action {
  readonly type = TOGGLE_POPUP_COMMUNICATE_BOX;

  constructor(public payload: boolean) {}
}

export type PActions = UpdateMenuPosition | TogglePopupReviews;
