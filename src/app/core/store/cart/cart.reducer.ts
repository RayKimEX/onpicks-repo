
import * as CartActions from './cart.actions';

export interface CartState {
  cartList: {};
  cartInfo: {
    free: any;
    pack: any;
  },
}

export const initialState: CartState = {
  cartList: {},
  cartInfo: {
    free: {},
    pack: [],
  },
};

export function CartReducer(state = initialState, action: CartActions.CartActions): CartState {

  switch (action.type) {

    case CartActions.GET_CART_INFO_SUCCESS :
      let object = {}
      action.payload.forEach( v => {

         if ( v.items.length === 0 ) { return; };

         // @ts-ignore
        const tempForInfo = Object.assign(...v.items.map( k => ({ [k.product] : k})));// Object.assign(...v.items.map(k => ({ [k].product: 0 })));

        object = {...object, ...tempForInfo};
      })

      return {
        ...state,
        cartInfo : {
          free : action.payload[0],
          pack : action.payload.slice(1, action.payload.length - 1),
        },
        cartList : object,
      }

    case CartActions.CREATE_TO_CART_SUCCESS :
      // console.log('deleted!!!!');
      // console.log(action.payload.productSlug);
      // console.log(state.cartList);

      console.log(action.payload.product);
      console.log(state.cartList);
      return {
        ...state,
        cartList : {
          ...state.cartList,
          [action.payload.product] : action.payload,
          // [action.payload.productSlug]: {
          //
          // }
        }
      };


    case CartActions.ADD_TO_CART_SUCCESS :
      console.log(action.payload);
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

    case CartActions.SUBTRACT_FROM_CART_SUCCESS :
      console.log('subtracted!!!');
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
      console.log('deleted!!!!');
      console.log(action.payload.productSlug);
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
