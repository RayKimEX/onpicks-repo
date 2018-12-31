import { Action } from '@ngrx/store';


export const TRY_GET_CART_INFO = '[Cart] TRY_GET_CART_INFO';
export const GET_CART_INFO_SUCCESS = '[Cart] GET_CART_SUCCESS';
export const GET_CART_INFO_FAILURE = '[Cart] GET_CART_FAILURE';

export const TRY_ADD_OR_CREATE_TO_CART = '[Cart] TRY_ADD_OR_CREATE_TO_CART';
export const ADD_TO_CART_SUCCESS = '[Cart] ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = '[Cart] ADD_TO_CART_FAILURE';
export const CREATE_TO_CART_SUCCESS = '[Cart] CREATE_TO_CART_SUCCESS'
export const CREATE_TO_CART_FAILURE = '[Cart] CREATE_TO_CART_FAILURE'

export const TRY_SUBTRACT_OR_DELETE_FROM_CART = '[Cart] TRY_SUBTRACT_OR_DELETE_FROM_CART';
export const SUBTRACT_FROM_CART_SUCCESS = '[Cart] SUBTRACT_FROM_CART_SUCCESS';
export const SUBTRACT_FROM_CART_FAILURE = '[Cart] SUBTRACT_FROM_CART_FAILURE';

export const TRY_DELETE_FROM_CART = '[Cart] TRY_DELETE_FROM_CART';
export const DELETE_FROM_CART_SUCCESS = '[Cart] DELETE_FROM_CART_SUCCESS';
export const DELETE_FROM_CART_FAILURE = '[Cart] DELETE_FROM_CART_FAILURE';

export const SET_FALSE_VIEW_CART = '[Cart] SET_FALSE_VIEW_CART';




//
export class TryGetCartInfo implements Action {
  readonly type = TRY_GET_CART_INFO;
}

export class GetCartInfoSuccess implements Action {
  readonly type = GET_CART_INFO_SUCCESS;

  constructor( public payload: any ) { }
}

export class GetCartInfoFailure implements Action {
  readonly type = GET_CART_INFO_FAILURE;

  constructor( public payload: { error }) { }
}




//
export class TryAddOrCreateToCart implements Action {
  readonly type = TRY_ADD_OR_CREATE_TO_CART;

  constructor( public payload: { productSlug, amount, increaseOrCreate }) { }
}

export class AddToCartSuccess implements Action {
  readonly type = ADD_TO_CART_SUCCESS;

  constructor( public payload: any) { }
}

export class AddToCartFailure implements Action {
  readonly type = ADD_TO_CART_FAILURE;

  constructor( public payload: { error }) { }
}

export class CreateToCartSuccess implements Action {
  readonly type = CREATE_TO_CART_SUCCESS;

  constructor( public payload: any) { }
}

export class CreateToCartFailure implements Action {
  readonly type = CREATE_TO_CART_FAILURE;

  constructor( public payload: { error }) { }
}





//
export class TrySubtractOrDeleteFromCart implements Action {
  readonly type = TRY_SUBTRACT_OR_DELETE_FROM_CART;

  constructor( public payload: { productSlug, amount, subtractOrDelete }) { }
}

export class SubtractFromSuccess implements Action {
  readonly type = SUBTRACT_FROM_CART_SUCCESS;

  constructor( public payload: any) { }
}

export class SubtractFromFailure implements Action {
  readonly type = SUBTRACT_FROM_CART_FAILURE;

  constructor( public payload: { error }) { }
}




//
export class TryDeleteFromCart implements Action {
  readonly type = TRY_DELETE_FROM_CART;

  constructor( public payload: any ) {

  }
}

export class DeleteFromCartSuccess implements Action {
  readonly type = DELETE_FROM_CART_SUCCESS;

  constructor ( public payload: { productSlug, packType, packIndex, itemIndex }) { }
}

export class DeleteFromCartFailure implements Action {
  readonly type = DELETE_FROM_CART_FAILURE;

  constructor( public payload: { error } ) { }
}





//
export class SetFalseViewCart implements Action {
  readonly type = SET_FALSE_VIEW_CART;

  constructor() {}
}



export type CartActions =
  //
  TryGetCartInfo |
  GetCartInfoSuccess |
  GetCartInfoFailure |
  //
  TryAddOrCreateToCart |
  AddToCartSuccess |
  AddToCartFailure |
  CreateToCartSuccess |
  CreateToCartFailure |
  //
  TrySubtractOrDeleteFromCart |
  SubtractFromSuccess |
  SubtractFromFailure |
  //
  TryDeleteFromCart |
  DeleteFromCartSuccess |
  DeleteFromCartFailure |
  //
  SetFalseViewCart;
