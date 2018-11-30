import * as PActions from './p.actions';


export interface PState {
  helpfulFlag: boolean[];
  menuPosition: number;
  review: {
    reviewIndex: number;
    content: []
  };
}

const initialState: PState = {
  helpfulFlag : [],
  menuPosition : 0,
  review : {
    reviewIndex : 0,
    content : [],
  },

};

export function PReducer (state = initialState, action: PActions.PActions) {

  switch ( action.type ) {
    case PActions.UPDATE_MENUPOSITION:
      return {
        ...state,
        menuPosition : action.payload
      };

    case PActions.GET_REVIEWS_PRODUCT_SUCCESS :
      console.log('GET_REVIEW_PRODUCT_SUCCESS_REDUCER');
      console.log(action.payload);
      return {
        ...state,
        review : {
          ...state.review,
        }
      }


    case PActions.UPDATE_COMMENT_INDEX :
      let commentIndex = state.review.reviewIndex;
      switch (action.payload) {
        case 'increase' :
          commentIndex++;
          break;

        case 'decrease' :
          commentIndex--;
          break;

      }
      return {
        ...state,
        review : {
          ...state.review,
          reviewIndex : commentIndex,
        }
      }

    case PActions.ADD_COMMENT :
      return {
        ...state,
      }
    default:
      return state;
  }
}


