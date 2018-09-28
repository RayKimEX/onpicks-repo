import {ActionReducerMap} from '@ngrx/store';
import * as MenuActions from '../../shops/pages/p/store/p.actions';

export interface AppState {
  region: string;
}



// export interface State {
//   helpfulFlag: boolean[];
//   menuPosition: number;
// }

export function AppReducers: ActionReducerMap<AppState> = {
};

//
//
// export function PReducer (state = initialState, action: MenuActions.MenuActions) {
//   console.log(action);
//   switch ( action.type ) {
//     case MenuActions.UPDATE_MENUPOSITION:
//       return {
//         ...state,
//         menuPosition : action.payload
//       };
//
//     case MenuActions.ADD_HELPFULFLAG:
//       return action.payload;
//     default:
//       return state;
//   }
// }
