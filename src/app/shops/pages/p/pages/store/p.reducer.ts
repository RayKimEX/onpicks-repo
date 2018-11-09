import * as PActions from './p.actions';


export interface State {
  helpfulFlag: boolean[];
  menuPosition: number;
  popupReviews: boolean;
}

const initialState: State = {
  helpfulFlag : [],
  menuPosition : 0,
  popupReviews : false,
};

export function PReducer (state = initialState, action: PActions.PActions) {

  switch ( action.type ) {
    case PActions.UPDATE_MENUPOSITION:
      return {
        ...state,
        menuPosition : action.payload
      };

    case PActions.TOGGLE_POPUP_COMMUNICATE_BOX:
      return action.payload;
    default:
      return state;
  }
}


