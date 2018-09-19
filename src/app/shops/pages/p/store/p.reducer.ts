import { Action } from '@ngrx/store';
import * as MenuActions from './p.actions';

export const UPDATE_MENUPOSITION = 'UPDATE_MENUPOSITION';

export const ADD_HELPFULFLAG = 'ADD_HELPFULFLAG';



export interface State {
  helpfulFlag: boolean[];
  menuPosition: number;
}

const initialState: State = {
  helpfulFlag : [],
  menuPosition : 0
};

export function PReducer (state = initialState, action: MenuActions.MenuActions) {
  switch ( action.type ) {
    case MenuActions.UPDATE_MENUPOSITION:
      return {
        ...state,
        menuPosition : action.payload
      };

    case MenuActions.ADD_HELPFULFLAG:
      return action.payload;
  }
}


