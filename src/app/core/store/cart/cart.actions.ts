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


export const TRY_ADD_TO_WISH_LIST = '[Cart] TRY_ADD_TO_WISH_LIST';
export const ADD_TO_WISH_LIST_SUCCESS = '[Cart] ADD_TO_WISH_LIST_SUCCESS';
export const ADD_TO_WISH_LIST_FAILURE = '[Cart] ADD_TO_WISH_LIST_FAILURE';

export const TRY_GET_WISH_LIST_INFO = '[Cart] TRY_GET_WISH_LIST_INFO';
export const GET_WISH_LIST_INFO_SUCCESS = '[Cart] TRY_GET_WISH_LIST_INFO_SUCCESS';
export const GET_WISH_LIST_INFO_FAILURE = '[Cart] TRY_GET_WISH_LIST_INFO_FAILURE';

export const TRY_DELETE_WISH_LIST = '[Cart] TRY_DELETE_WISH_LIST';
export const DELETE_WISH_LIST_SUCCESS = '[Cart] DELETE_WISH_LIST_SUCCESS';
export const DELETE_WISH_LIST_FAILURE = '[Cart] DELETE_WISH_LIST_FAILURE';



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

  constructor( public payload: {
    isPopUp,
    productSlug,
    amount,
    packIndex,
    increaseOrCreate
  }) { }
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

  constructor( public payload: {
    isPopUp,
    productSlug,
    amount,
    packIndex,
    subtractOrDelete
  }) { }
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

  constructor( public payload: {
    productSlug,
    packType,
    packIndex,
    itemIndex
  } ) {

  }
}


export class DeleteFromCartSuccess implements Action {
  readonly type = DELETE_FROM_CART_SUCCESS;

  constructor ( public payload: any) { }
}

export class DeleteFromCartFailure implements Action {
  readonly type = DELETE_FROM_CART_FAILURE;

  constructor( public payload: { error } ) { }
}


// export const TRY_ADD_TO_WISH_LIST = '[Cart] TRY_ADD_TO_WISH_LIST';
// export const ADD_TO_WISH_LIST_SUCCESS = '[Cart] ADD_TO_WISH_LIST_SUCCESS';
// export const ADD_TO_WISH_LIST_FAILURE = '[Cart] ADD_TO_WISH_LIST_FAILURE';
export class TryAddToWishList implements Action {
  readonly type = TRY_ADD_TO_WISH_LIST;

  constructor ( public payload: any ) { }
}

export class AddToWishListSuccess implements Action {
  readonly type = ADD_TO_WISH_LIST_SUCCESS;

  constructor ( public payload: {response} ) { }
}

export class AddToWishListFailure implements Action {
  readonly type = ADD_TO_WISH_LIST_FAILURE;

  constructor ( public payload: any ) { }
}

// export const TRY_GET_WISH_LIST = '[Cart] TRY_GET_WISH_LIST';
// export const GET_WISH_LIST_SUCCESS = '[Cart] TRY_GET_WISH_LIST_SUCCESS';
// export const GET_WISH_LIST_FAILURE = '[Cart] TRY_GET_WISH_LIST_FAILURE';

export class TryGetWishListInfo implements Action {
  readonly type = TRY_GET_WISH_LIST_INFO;

}

export class GetWishListInfoSuccess implements Action {
  readonly type = GET_WISH_LIST_INFO_SUCCESS;


  constructor ( public payload: any ) { }
}

export class GetWishListInfoFailure implements Action {
  readonly type = GET_WISH_LIST_INFO_FAILURE;

  constructor ( public payload: { error }) { }
}


//
// export const TRY_DELETE_WISH_LIST = '[Cart] TRY_DELETE_WISH_LIST';
// export const DELETE_WISH_LIST_SUCCESS = '[Cart] DELETE_WISH_LIST_SUCCESS';
// export const DELETE_WISH_LIST_FAILURE = '[Cart] DELETE_WISH_LIST_FAILURE';


export class TryDeleteWishList implements Action {
  readonly type = TRY_DELETE_WISH_LIST;

  constructor ( public payload: { wishListId, index } ) { }
}

export class DeleteWishListSuccess implements Action {
  readonly type = DELETE_WISH_LIST_SUCCESS;


  constructor ( public payload: any ) { }
}

export class DeleteWishListFailure implements Action {
  readonly type = DELETE_WISH_LIST_FAILURE;

  constructor ( public payload: { error }) { }
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
  TryAddToWishList |
  AddToWishListFailure |
  AddToWishListSuccess |

  //
  TryGetWishListInfo |
  GetWishListInfoSuccess |
  GetWishListInfoSuccess |

  TryDeleteWishList |
  DeleteWishListSuccess |
  DeleteWishListFailure |
  //
  SetFalseViewCart;
