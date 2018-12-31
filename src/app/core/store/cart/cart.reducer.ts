
import * as CartActions from './cart.actions';

export interface CartState {
  cartList: {};
  cartInfo: {
    free: any;
    pack: any;
    total: {};
  },
}

export const initialState: CartState = {
  cartList: {},
  cartInfo: {
    free: {},
    pack: [],
    total: {},
  },
};

export function CartReducer(state = initialState, action: CartActions.CartActions): CartState {

  switch (action.type) {

    case CartActions.GET_CART_INFO_SUCCESS :
      console.log(action.payload);
      let object = {}
      action.payload.results.forEach( v => {

         if ( v.items.length === 0 ) { return; };

         // @ts-ignore
        const tempForInfo = Object.assign(...v.items.map( k => ({ [k.product] : k})));

        object = { ...object, ...tempForInfo };
      })

      return {
        ...state,
        cartInfo : {
          free : action.payload.results[0],
          pack : action.payload.results.slice(1, action.payload.length),
          total : {
            total_discounts :  action.payload.total_discounts,
            total_items : action.payload.total_items,
            total_shipping_fee : action.payload.total_shipping_fee
          }

        },
        cartList : object,
      }

    case CartActions.CREATE_TO_CART_SUCCESS :

      console.log(action.payload.product);
      console.log(state.cartList);
      return {
        ...state,
        cartList : {
          ...state.cartList,
          [action.payload.product] : action.payload,
        }
      };


    case CartActions.ADD_TO_CART_SUCCESS :
      console.log(action.payload.payload);
      return {
        ...state,
        cartList : {
          ...state.cartList,
          [action.payload.payload.productSlug] : {
            ...state.cartList[action.payload.payload.productSlug],
            quantity : action.payload.payload.amount,
          }
        },
      }

    case CartActions.SUBTRACT_FROM_CART_SUCCESS :
      return {
        ...state,
        cartList : {
          ...state.cartList,
          [action.payload.productSlug] : {
            ...state.cartList[action.payload.productSlug],
            quantity : action.payload.amount,
          }
        },
      }

    case CartActions.DELETE_FROM_CART_SUCCESS :
      console.log(state.cartList);
      delete state.cartList[action.payload.productSlug];
      console.log(state.cartList);
      return {
        ...state,
        cartList : {
          ...state.cartList,
        },
      };


    case CartActions.SET_FALSE_VIEW_CART :
      return {
        ...state,
      }

    default:
      return state;
  }
}
