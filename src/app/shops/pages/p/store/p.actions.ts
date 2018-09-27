// Section 2

import {Action} from '@ngrx/store';

export const UPDATE_MENUPOSITION    = 'UPDATE_MENUPOSITION';

export const ADD_HELPFULFLAG    = 'ADD_HELPFULFLAG';


export class UpdateMenuPosition implements Action {
  readonly type = UPDATE_MENUPOSITION;

  constructor(public payload: number) {}
}


export class AddHelpfulFlag implements Action {
  readonly type = ADD_HELPFULFLAG;

  constructor(public payload: boolean) {}
}

export type MenuActions = UpdateMenuPosition | AddHelpfulFlag;
