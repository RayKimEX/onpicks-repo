// Section 2

import {Action} from '@ngrx/store';

export const UPDATE_MENUPOSITION    = '[P] UPDATE_MENUPOSITION';

export const UPDATE_COMMENT_INDEX = '[P] UPDATE_COMMENT_INDEX';
export const ADD_COMMENT = '[P] ADD_COMMENT';


export class UpdateMenuPosition implements Action {
  readonly type = UPDATE_MENUPOSITION;

  constructor(public payload: number) {}
}


export class UpdateCommentIndex implements Action {
  readonly type = UPDATE_COMMENT_INDEX;

  constructor(public payload: string) {}

}


export class AddComment implements Action {
  readonly type = ADD_COMMENT;

  constructor(public payload: { author: string, content: string }) { }
}

export type PActions =
  UpdateMenuPosition |
  UpdateCommentIndex |
  AddComment;
