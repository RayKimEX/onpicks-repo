// Section 2

import {Action} from '@ngrx/store';

export const UPDATE_MENUPOSITION    = '[P] UPDATE_MENUPOSITION';

export const UPDATE_COMMENT_INDEX = '[P] UPDATE_COMMENT_INDEX';

export const UPDATE_PRODUCT_INDEX = '[P] UPDATE_PRODUCT_INDEX';

export const GET_REVIEWS_PRODUCT = '[P] GET_REVIEWS_PRODUCT';
export const GET_REVIEWS_PRODUCT_SUCCESS = '[P] GET_REVIEWS_PRODUCT_SUCCESS';
export const GET_REVIEWS_PRODUCT_FAILURE = '[P] GET_REVIEWS_PRODUCT_FAILURE';

export const ADD_COMMENT = '[P] ADD_COMMENT';


export class UpdateMenuPosition implements Action {
  readonly type = UPDATE_MENUPOSITION;

  constructor(public payload: number) {}
}

export class UpdateProductIndex implements Action {
  readonly type = UPDATE_PRODUCT_INDEX;

  constructor(public payload: any) {}

}

export class UpdateCommentIndex implements Action {
  readonly type = UPDATE_COMMENT_INDEX;

  constructor(public payload: string) {}

}

export class GetReviewProduct implements Action {
  readonly type = GET_REVIEWS_PRODUCT;

  constructor(public payload: string) {}
}


export class GetReviewProductSuccess implements Action {
  readonly type = GET_REVIEWS_PRODUCT_SUCCESS;

  constructor(public payload: { }) {}
}


export class GetReviewProductFailure implements Action {
  readonly type = GET_REVIEWS_PRODUCT_FAILURE;

  constructor(public payload: { error: any }) {}
}

export class AddComment implements Action {
  readonly type = ADD_COMMENT;

  constructor(public payload: { author: string, content: string }) { }
}

export type PActions =
  UpdateMenuPosition |
  UpdateCommentIndex |
  UpdateProductIndex |
  GetReviewProduct |
  GetReviewProductSuccess |
  GetReviewProductFailure |
  AddComment;
