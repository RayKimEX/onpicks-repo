import * as CActions from './c.actions';


export interface CState {
  viewCategoryFilter: boolean;
}

const initialState: CState = {
  viewCategoryFilter: false,
};

export function CReducer (state = initialState, action: CActions.CActions) {

  switch ( action.type ) {
    case CActions.UPDATE_FILTER_STATE:
      return {
        ...state,
        menuPosition : action.payload
      };
    default:
      return state;
  }
}


