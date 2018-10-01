import {ActionReducerMap} from '@ngrx/store';
import * as MenuActions from '../../shops/pages/p/store/p.actions';

export interface AppState {
  // region: from
  // auth: fromAuth.State
}




// export interface AppState {
//   shoppingList: fromShoppingList.State,
//   auth: fromAuth.State
// }
//
// export const reducers: ActionReducerMap<AppState> = {
//   shoppingList: fromShoppingList.shoppingListReducer,
//   auth: fromAuth.authReducer
// };
// export interface State {
//   helpfulFlag: boolean[];
//   menuPosition: number;
// }

export const reducers: ActionReducerMap<AppState> = {
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
