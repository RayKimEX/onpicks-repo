import { Action } from '@ngrx/store';
import * as MenuActions from './p.actions';
import * as fromApp from '../../../../core/store/app.reducer';

export const UPDATE_MENUPOSITION = 'UPDATE_MENUPOSITION';

export const ADD_HELPFULFLAG = 'ADD_HELPFULFLAG';

export interface FeatureState extends fromApp.AppState {
  helpfulFlag: boolean[];
  menuPosition: number;
}

export interface State {
  helpfulFlag: boolean[];
  menuPosition: number;
}

const initialState: State = {
  helpfulFlag : [],
  menuPosition : 0
};

export function PReducer (state = initialState, action: MenuActions.MenuActions) {
  console.log(action);
  switch ( action.type ) {
    case MenuActions.UPDATE_MENUPOSITION:
      return {
        ...state,
        menuPosition : action.payload
      };

    case MenuActions.ADD_HELPFULFLAG:
      return action.payload;
    default:
      return state;
  }
}


