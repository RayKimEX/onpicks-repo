import { Action } from '@ngrx/store';

// export enum CartActionTypes {
//
// }

export const GET_CART_INFO = '[Cart] GET_CART_INFO';
export const GET_CART_INFO_SUCCESS = '[Cart] GET_CART_SUCCESS';
export const GET_CART_INFO_FAILURE = '[Cart] GET_CART_FAILURE';

export const ADD_OR_CREATE_TO_CART = '[Cart] ADD_OR_CREATE_TO_CART';
export const ADD_TO_CART_SUCCESS = '[Cart] ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = '[Cart] ADD_TO_CART_FAILURE';
export const CREATE_TO_CART_SUCCESS = '[Cart] CREATE_TO_CART_SUCCESS'
export const CREATE_TO_CART_FAILURE = '[Cart] CREATE_TO_CART_FAILURE'

export const SUBTRACT_OR_DELETE_FROM_CART = '[Cart] SUBTRACT_OR_DELETE_FROM_CART';
export const SUBTRACT_FROM_CART_SUCCESS = '[Cart] SUBTRACT_FROM_CART_SUCCESS';
export const SUBTRACT_FROM_CART_FAILURE = '[Cart] SUBTRACT_FROM_CART_FAILURE';

export const DELETE_FROM_CART = '[Cart] DELETE_FROM_CART';
export const DELETE_FROM_CART_SUCCESS = '[Cart] DELETE_FROM_CART_SUCCESS';
export const DELETE_FROM_CART_FAILURE = '[Cart] DELETE_FROM_CART_FAILURE';


export const SET_TRUE_VIEW_CART = '[Cart] SET_TRUE_VIEW_CART';
export const SET_FALSE_VIEW_CART = '[Cart] SET_FALSE_VIEW_CART';


export class GetCartInfo implements Action {
  readonly type = GET_CART_INFO;
}

export class GetCartInfoSuccess implements Action {
  readonly type = GET_CART_INFO_SUCCESS;

  constructor( public payload: any ) {

  }
}

export class GetCartInfoFailure implements Action {
  readonly type = GET_CART_INFO_FAILURE;

  constructor( public payload: { error }) {

  }
}


export class AddOrCreateToCart implements Action {
  readonly type = ADD_OR_CREATE_TO_CART;

  constructor( public payload: { productSlug, amount, increaseOrCreate }) {
    console.log('created AddToCart!!');
  }
}

export class AddToCartSuccess implements Action {
  readonly type = ADD_TO_CART_SUCCESS;

  constructor( public payload: any) {

  }
}

export class AddToCartFailure implements Action {
  readonly type = ADD_TO_CART_FAILURE;

  constructor( public payload: { error }) {

  }
}

export class CreateToCartSuccess implements Action {
  readonly type = CREATE_TO_CART_SUCCESS;

  constructor( public payload: any) {

  }
}
export class CreateToCartFailure implements Action {
  readonly type = CREATE_TO_CART_FAILURE;

  constructor( public payload: { error }) {

  }
}


export class SubtractOrDeleteFromCart implements Action {
  readonly type = SUBTRACT_OR_DELETE_FROM_CART;

  constructor( public payload: { productSlug, amount, subtractOrDelete }) {

  }
}

export class SubtractFromSuccess implements Action {
  readonly type = SUBTRACT_FROM_CART_SUCCESS;

  constructor( public payload: any) {

  }
}

export class SubtractFromFailure implements Action {
  readonly type = SUBTRACT_FROM_CART_FAILURE;

  constructor( public payload: { error }) {

  }
}

export class DeleteFromCart implements Action {
  readonly type = DELETE_FROM_CART;

  constructor( public payload: any ) {

  }
}



export class DeleteFromCartSuccess implements Action {
  readonly type = DELETE_FROM_CART_SUCCESS;

  constructor ( public payload: { productSlug }) {

  }
}

export class DeleteFromCartFailure implements Action {
  readonly type = DELETE_FROM_CART_FAILURE;

  constructor( public payload: { error } ) {

  }
}


export class SetTrueViewCart implements Action {
  readonly type = SET_TRUE_VIEW_CART;

  constructor() {

  }
}


export class SetFalseViewCart implements Action {
  readonly type = SET_FALSE_VIEW_CART;

  constructor() {

  }
}



export type CartActions =
  GetCartInfo |
  GetCartInfoSuccess |
  GetCartInfoFailure |
  AddOrCreateToCart |
  AddToCartSuccess |
  AddToCartFailure |
  CreateToCartSuccess |
  CreateToCartFailure |
  SubtractOrDeleteFromCart |
  SubtractFromSuccess |
  SubtractFromFailure |
  DeleteFromCart |
  DeleteFromCartSuccess |
  DeleteFromCartFailure |
  SetFalseViewCart;
