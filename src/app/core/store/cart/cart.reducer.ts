
import * as CartActions from './cart.actions';

export interface CartState {
  cartList: {};
  cartInfo: {
    free: any;
    pack: any;
    total: {};
  };
  wishList: any;
}

export const initialState: CartState = {
  cartList: {},
  cartInfo: {
    free: {},
    pack: [
      {
        location : {},
        items : [],
        free_shipping_threshold : 0,
        shipping_fee : 0,
        subtotal : 0
      }
    ],
    total: {},
  },
  wishList : [],
};

export function CartReducer(state = initialState, action: CartActions.CartActions): CartState {

  switch (action.type) {
    case CartActions.DELETE_WISH_LIST_SUCCESS :
      state.wishList.splice(action.payload, 1);
      return {
        ...state,
        wishList : state.wishList,
      }

    case CartActions.GET_WISH_LIST_INFO_SUCCESS :

      console.log(action.payload);
      state.wishList = action.payload.results;
      // state.wishList.push(action.payload)

      return {
        ...state
      }

    case CartActions.ADD_TO_WISH_LIST_SUCCESS :
      console.log(action.payload)
      state.wishList.push(action.payload);

      return {
        ...state,
      }

    case CartActions.GET_CART_INFO_SUCCESS :
      console.log(action.payload);
      let object = {}

      const cartObjectItems = [];
      action.payload.results.forEach( (value, index) => {

         if ( value.items.length === 0 ) { return; };

         if ( index !== 0 ) {
           let temp = {}
           value.items.forEach( (xItem, index) => {
             xItem['itemIndex'] = index;
             cartObjectItems.push(xItem);
           });

           console.log(cartObjectItems);

         }

         // @ts-ignore
        const tempForInfo = Object.assign(...cartObjectItems.map( k => ({ [k.product] : k})));
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
      console.log(action.payload);
      // state.cartInfo.pack.items.push(action.payload)
      return {
        ...state,
        cartList : {
          ...state.cartList,
          [action.payload.product]: {
            ...state.cartList[action.payload.product],
            quantity: action.payload.amount,
          }
        },
      }

    case CartActions.ADD_TO_CART_SUCCESS :
      console.log(action.payload);
      return {
        ...state,
        cartList : {
          ...state.cartList,
          [action.payload.payload.productSlug] : {
            ...state.cartList[action.payload.payload.productSlug],
            quantity : action.payload.payload.amount,
          }
        },
        cartInfo : {
          free : action.payload.cartInfo.results[0],
          pack : action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length),
          total : {
            total_discounts :  action.payload.cartInfo.total_discounts,
            total_items : action.payload.cartInfo.total_items,
            total_shipping_fee : action.payload.cartInfo.total_shipping_fee
          }
        }
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


      console.log(state);
      console.log(state.cartInfo[action.payload.packType][action.payload.packIndex].items);
      state.cartInfo[action.payload.packType][action.payload.packIndex].items.splice(action.payload.itemIndex, 1); // [action.payload.itemIndex]

      console.log(state.cartInfo[action.payload.packType][action.payload.packIndex].items);
      console.log(state);
      return {
        ...state,
        cartList : {
          ...state.cartList,
        },
        cartInfo : {
          ...state.cartInfo,
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
