// Section 2

import {Action} from '@ngrx/store';

export const UPDATE_MENUPOSITION    = '[P] UPDATE_MENUPOSITION';

export const UPDATE_PRODUCT_INDEX = '[P] UPDATE_PRODUCT_INDEX';

export const GET_REVIEWS_PRODUCT = '[P] GET_REVIEWS_PRODUCT';
export const GET_REVIEWS_PRODUCT_SUCCESS = '[P] GET_REVIEWS_PRODUCT_SUCCESS';
export const GET_REVIEWS_PRODUCT_FAILURE = '[P] GET_REVIEWS_PRODUCT_FAILURE';

export const GET_COMMENTS_PRODUCT = '[P] GET_COMMENTS_PRODUCT';
export const GET_COMMENTS_PRODUCT_SUCCESS = '[P] GET_COMMENTS_PRODUCT_SUCCESS';
export const GET_COMMENTS_PRODUCT_FAILURE = '[P] GET_REVIEWS_PRODUCT_FAILURE';

export const ADD_COMMENT = '[P] ADD_COMMENT';

export const ADD_COMMENT_SUCCESS = '[P] ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = '[P] ADD_COMMENT_FAILURE';

export class UpdateMenuPosition implements Action {
  readonly type = UPDATE_MENUPOSITION;

  constructor(public payload: number) {}
}

export class UpdateProductIndex implements Action {
  readonly type = UPDATE_PRODUCT_INDEX;

  constructor(public payload: any) {}

}

export class GetReviewProduct implements Action {
  readonly type = GET_REVIEWS_PRODUCT;

  constructor(public payload: string) {}
}

export class GetReviewProductSuccess implements Action {
  readonly type = GET_REVIEWS_PRODUCT_SUCCESS;

  constructor(public payload: { results }) {}
}

export class GetReviewProductFailure implements Action {
  readonly type = GET_REVIEWS_PRODUCT_FAILURE;

  constructor(public payload: { error: any }) {}
}

/* COMMENTS */
export class GetCommentsProduct implements Action {
  readonly type = GET_COMMENTS_PRODUCT;

  constructor(public payload: { productId, reviewsId }) {}
}

export class GetCommentsProductSuccess implements Action {
  readonly type = GET_COMMENTS_PRODUCT_SUCCESS;

  constructor(public payload: { currentComments, reviewsId}) {}
}

export class GetCommentsProductFailure implements Action {
  readonly type = GET_COMMENTS_PRODUCT_FAILURE;

  constructor(public payload: any) {}
}




export class AddComment implements Action {
  readonly type = ADD_COMMENT;

  constructor(public payload: { addedText, productId, reviewsId }) {

  }
}

export class AddCommentSuccess implements  Action {
  readonly type = ADD_COMMENT_SUCCESS;

  constructor( public payload: { respond, reviewsId} ) {

  }
}


export class AddCommentFailure implements  Action {
  readonly type = ADD_COMMENT_FAILURE;

  constructor( public payload: { error } ) {

  }
}


export type PActions =
  UpdateMenuPosition |
  UpdateProductIndex |
  GetReviewProduct |
  GetReviewProductSuccess |
  GetReviewProductFailure |
  GetCommentsProduct |
  GetCommentsProductSuccess |
  GetCommentsProductFailure |
  AddComment |
  AddCommentSuccess|
  AddCommentFailure;
