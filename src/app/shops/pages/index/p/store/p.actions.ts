import { Action } from '@ngrx/store';

export const UPDATE_MENUPOSITION    = '[P] UPDATE_MENUPOSITION';
export const UPDATE_PRODUCT_INDEX = '[P] UPDATE_PRODUCT_INDEX';

export const TRY_GET_PRODUCT_INFO = '[P] TRY_GET_PRODUCT_INFO';
export const GET_PRODUCT_INFO_SUCCESS = '[P] GET_PRODUCT_INFO_SUCCESS';
export const GET_PRODUCT_INFO_FAILURE = '[P] GET_PRODUCT_INFO_FAILURE';

export const TRY_GET_REVIEWS_PRODUCT = '[P] TRY_GET_REVIEWS_PRODUCT';
export const GET_REVIEWS_PRODUCT_SUCCESS = '[P] GET_REVIEWS_PRODUCT_SUCCESS';
export const GET_REVIEWS_PRODUCT_FAILURE = '[P] G' +
  'ET_REVIEWS_PRODUCT_FAILURE';

export const TRY_GET_COMMENTS_PRODUCT = '[P] TRY_GET_COMMENTS_PRODUCT';
export const GET_COMMENTS_PRODUCT_SUCCESS = '[P] GET_COMMENTS_PRODUCT_SUCCESS';
export const GET_COMMENTS_PRODUCT_FAILURE = '[P] GET_REVIEWS_PRODUCT_FAILURE';

export const TRY_ADD_COMMENT = '[P] TRY_ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = '[P] ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = '[P] ADD_COMMENT_FAILURE';


/* UPDATE_UI */
export class UpdateMenuPosition implements Action {
  readonly type = UPDATE_MENUPOSITION;

  constructor(public payload: number) {}
}

export class UpdateProductIndex implements Action {
  readonly type = UPDATE_PRODUCT_INDEX;

  constructor(public payload: any) {}

}

/* GET_PRODUCT_INFO */
export class TryGetProductInfo implements Action {
  readonly type = TRY_GET_PRODUCT_INFO

  constructor(public payload: string) {}
}

export class GetProductInfoSuccess implements Action {
  readonly type = GET_PRODUCT_INFO_SUCCESS;

  constructor(public payload: { results }) {}
}

export class GetProductInfoFailure implements Action {
  readonly type = GET_PRODUCT_INFO_FAILURE;

  constructor(public payload: { error: any }) {}
}


/* GET_REVIEWS */
export class TryGetReviewProduct implements Action {
  readonly type = TRY_GET_REVIEWS_PRODUCT;

  constructor(public payload: string) {}
}

export class GetReviewProductSuccess implements Action {
  readonly type = GET_REVIEWS_PRODUCT_SUCCESS;

  constructor(public payload: { results }) {}
}

export class GetReviewProductFailure implements Action {
  readonly type = GET_REVIEWS_PRODUCT_FAILURE;

  constructor(public payload: { error: any }) {

  }
}



/* GET_COMMENTS */
export class TryGetCommentsProduct implements Action {
  readonly type = TRY_GET_COMMENTS_PRODUCT;

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




/* ADD_COMMENTS */
export class TryAddComment implements Action {
  readonly type = TRY_ADD_COMMENT;

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
  //
  UpdateMenuPosition |
  UpdateProductIndex |
  //
  TryGetProductInfo |
  GetProductInfoSuccess |
  GetProductInfoFailure |
  //
  TryGetReviewProduct |
  GetReviewProductSuccess |
  GetReviewProductFailure |
  //
  TryGetCommentsProduct |
  GetCommentsProductSuccess |
  GetCommentsProductFailure |
  //
  TryAddComment |
  AddCommentSuccess|
  AddCommentFailure;
