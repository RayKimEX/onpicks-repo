
import * as CartActions from './cart.actions';

export interface CartState {
  cartList: {};
  cartInfo: {
    free: any;
    pack: any;
    total: {};
    isPopUp: boolean,
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
        shipping_fee : 0,
        subtotal : 0
      }
    ],
    total: {},
    isPopUp : false,
  },
  wishList : [],
};

export function CartReducer(state = initialState, action: CartActions.CartActions): CartState {

  switch (action.type) {
    case CartActions.DELETE_WISH_LIST_SUCCESS :
      state.wishList.splice(action.payload, 1);
      return {
        ...state,
        wishList : [...state.wishList],
      }

    case CartActions.GET_WISH_LIST_INFO_SUCCESS :
      console.log(action.payload);
      state.wishList = action.payload;
      // state.wishList.push(action.payload)

      return {
        ...state
      }

    case CartActions.ADD_TO_WISH_LIST_SUCCESS :
      state.wishList.push(action.payload.response);

      return {
        ...state,
      }

    case CartActions.GET_CART_INFO_SUCCESS :
      let object = {}

      const cartObjectItems = [];

      action.payload.results.forEach( (value, index) => {

         if ( value.items.length === 0 ) { return; };

         value.items.forEach( (xItem, ii) => {
           xItem['itemIndex'] = ii;
           cartObjectItems.push(xItem);
         });
      })

      const tempForInfo = Object.assign({}, ...cartObjectItems.map( k => ({ [k.product] : k})));
      object = { ...object, ...tempForInfo };

      return {
        ...state,
        cartInfo : {
          ...state.cartInfo,
          free : action.payload.results[0],
          pack : action.payload.results.slice(1, action.payload.results.length),
          total : {
            total_discounts :  action.payload.total_discounts,
            total_items : action.payload.total_items,
            total_shipping_costs : action.payload.total_shipping_costs
          }
        },
        cartList : object,
      }

    case CartActions.CREATE_TO_CART_SUCCESS :

      if ( action.payload.packIndex !== 'free' ){
        const createTemp = state.cartInfo.pack[action.payload.packIndex];
        createTemp.subtotal = action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].subtotal;
        createTemp.shipping_fee =                action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].shipping_fee;
        createTemp.items = action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].items;
        state.cartInfo.pack[action.payload.packIndex] = createTemp;
      } else {
        const createForFreeTemp = state.cartInfo.free;
        createForFreeTemp.subtotal = action.payload.cartInfo.results.slice(0, 1)[0].subtotal;
        createForFreeTemp.items = action.payload.cartInfo.results.slice(0, 1)[0].items;
        state.cartInfo.free = createForFreeTemp;
      }

      return {
        ...state,
        cartList : {
          ...state.cartList,
          [action.payload.productSlug]: {
            ...state.cartList[action.payload.productSlug],
            product : action.payload.productSlug,
            quantity : 1,
          }
        },
        cartInfo : {
          ...state.cartInfo,
          free : {
            ...state.cartInfo.free
          },
          pack : [...state.cartInfo.pack],
          total : {
            total_discounts :  action.payload.cartInfo.total_discounts,
            total_items : action.payload.cartInfo.total_items,
            total_shipping_costs : action.payload.cartInfo.total_shipping_costs
          },
          isPopUp : action.payload.isPopUp,
        },
      }

    case CartActions.ADD_TO_CART_SUCCESS :
      if ( action.payload.packIndex !== 'free' ) {
        const addTemp = state.cartInfo.pack[action.payload.packIndex];
        console.log(action.payload.packIndex);
        console.log(action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length));
        addTemp.subtotal = action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].subtotal;
        addTemp.shipping_fee = action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].shipping_fee;


        state.cartInfo.pack[action.payload.packIndex] = addTemp;
      } else {
        const addForFreeTemp = state.cartInfo.free;
        addForFreeTemp.subtotal = action.payload.cartInfo.results.slice(0, 1)[0].subtotal;
        state.cartInfo.free = addForFreeTemp;
      }
      return {
        ...state,
        cartList : {
          ...state.cartList,
          [action.payload.productSlug] : {
            ...state.cartList[action.payload.productSlug],
            quantity : action.payload.amount,
          }
        },
        cartInfo : {
          ...state.cartInfo,
          free : {
            ...state.cartInfo.free,
          },
          // pack : action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length),
          pack : [...state.cartInfo.pack],
          total : {
            total_discounts :  action.payload.cartInfo.total_discounts,
            total_items : action.payload.cartInfo.total_items,
            total_shipping_costs : action.payload.cartInfo.total_shipping_costs
          },
          isPopUp : action.payload.isPopUp,
        },
      }

    case CartActions.SUBTRACT_FROM_CART_SUCCESS :

      if ( action.payload.packIndex !== 'free' ) {
        const subtractTemp = state.cartInfo.pack[action.payload.packIndex];

        subtractTemp.subtotal = action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].subtotal;
        subtractTemp.shipping_fee = action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].shipping_fee;
        state.cartInfo.pack[action.payload.packIndex] = subtractTemp;
      } else {
        const subtractForFreeTemp = state.cartInfo.free;
        subtractForFreeTemp.subtotal = action.payload.cartInfo.results.slice(0, 1)[0].subtotal;
        state.cartInfo.free = subtractForFreeTemp;
      }
      return {
        ...state,
        cartList : {
          ...state.cartList,
          [action.payload.productSlug] : {
            ...state.cartList[action.payload.productSlug],
            quantity : action.payload.amount,
          }
        },
        cartInfo : {
          ...state.cartInfo,
          free : {
            ...state.cartInfo.free,
          },
          pack : [...state.cartInfo.pack],
          total : {
            total_discounts :  action.payload.cartInfo.total_discounts,
            total_items : action.payload.cartInfo.total_items,
            total_shipping_costs : action.payload.cartInfo.total_shipping_costs
          },
          isPopUp : action.payload.isPopUp,
        }
      }

    case CartActions.DELETE_FROM_CART_SUCCESS :
      console.log(action.payload);
      if ( action.payload.packIndex !== 'free' ) {
        const deleteTemp = state.cartInfo.pack[action.payload.packIndex];


        deleteTemp.subtotal = action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].subtotal;
        deleteTemp.shipping_fee = action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].shipping_fee;
        deleteTemp.items = action.payload.cartInfo.results.slice(1, action.payload.cartInfo.results.length)[action.payload.packIndex].items;
        state.cartInfo.pack[action.payload.packIndex] = deleteTemp;

      } else {
        const deleteForFreeTemp = state.cartInfo.free;
        deleteForFreeTemp.subtotal = action.payload.cartInfo.results.slice(0, 1)[0].subtotal;
        deleteForFreeTemp.shipping_fee = action.payload.cartInfo.results.slice(0, 1)[0].shipping_fee;
        deleteForFreeTemp.items = action.payload.cartInfo.results.slice(0, 1)[0].items;
        state.cartInfo.free = deleteForFreeTemp;
      }
      delete state.cartList[action.payload.productSlug];
      return {
        ...state,
        cartList : {
          ...state.cartList,
          // [action.payload.productSlug]: {
          //   ...state.cartList[action.payload.productSlug],
          //   quantity: 0,
          // }
        },
        cartInfo : {
          ...state.cartInfo,
          free : {
            ...state.cartInfo.free,
          },
          pack : [...state.cartInfo.pack],
          total : {
            total_discounts :  action.payload.cartInfo.total_discounts,
            total_items : action.payload.cartInfo.total_items,
            total_shipping_costs : action.payload.cartInfo.total_shipping_costs
          },
          isPopUp : action.payload.isPopUp,
        }
        // cartInfo : {
        //   ...state.cartInfo,
        // },
      };


    case CartActions.SET_FALSE_VIEW_CART :
      return {
        ...state,
      }

    default:
      return state;
  }
}
