import * as PActions from './p.actions';


export interface PState {
  helpfulFlag: boolean[];
  menuPosition: number;
  popupReviews: boolean;
  reviewIndex: number;
}

const initialState: PState = {
  helpfulFlag : [],
  menuPosition : 0,
  popupReviews : false,
  reviewIndex : 0,
};

export function PReducer (state = initialState, action: PActions.PActions) {

  switch ( action.type ) {
    case PActions.UPDATE_MENUPOSITION:
      return {
        ...state,
        menuPosition : action.payload
      };

    case PActions.UPDATE_COMMENT_INDEX :
      let commentIndex = state.reviewIndex;
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
        reviewIndex : commentIndex,
      }
    case PActions.ADD_COMMENT :
      return {
        ...state,
      }
    default:
      return state;
  }
}


