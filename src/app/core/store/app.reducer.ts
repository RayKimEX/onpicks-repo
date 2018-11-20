import {ActionReducerMap} from '@ngrx/store';

import * as MenuActions from '../../shops/pages/index/p/store/p.actions';
import {AuthReducer} from './auth/auth.reducer';
import {AuthState} from './auth/auth.model';
import {UiReducer, UiState} from './ui/ui.reducer';



export interface AppState {
  // region: from
  auth: AuthState;
  ui: UiState;
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
  // user: UserReducer,
  auth: AuthReducer,
  ui: UiReducer,
};





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
//   ingredients: Ingredient[];
//   editedIngredient: Ingredient;
//   editedIngredientIndex: number;
// }

// const initialState: State = {
//   ingredients: [
//     new Ingredient('Apples', 5),
//     new Ingredient('Tomatoes', 10),
//   ],
//   editedIngredient: null,
//   editedIngredientIndex: -1
// };

// export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
//   switch (action.type) {
//     case ShoppingListActions.ADD_INGREDIENT:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, action.payload]
//       };
//     case ShoppingListActions.ADD_INGREDIENTS:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, ...action.payload]
//       };
//     case ShoppingListActions.UPDATE_INGREDIENT:
//       const ingredient = state.ingredients[state.editedIngredientIndex];
//       const updatedIngredient = {
//         ...ingredient,
//         ...action.payload.ingredient
//       };
//       const ingredients = [...state.ingredients];
//       ingredients[state.editedIngredientIndex] = updatedIngredient;
//       return {
//         ...state,
//         ingredients: ingredients,
//         editedIngredient: null,
//         editedIngredientIndex: -1
//       };
//     case ShoppingListActions.DELETE_INGREDIENT:
//       const oldIngredients = [...state.ingredients];
//       oldIngredients.splice(state.editedIngredientIndex, 1);
//       return {
//         ...state,
//         ingredients: oldIngredients,
//         editedIngredient: null,
//         editedIngredientIndex: -1
//       };
//     case ShoppingListActions.START_EDIT:
//       const editedIngredient = {...state.ingredients[action.payload]};
//       return {
//         ...state,
//         editedIngredient: editedIngredient,
//         editedIngredientIndex: action.payload
//       };
//     case ShoppingListActions.STOP_EDIT:
//       return {
//         ...state,
//         editedIngredient: null,
//         editedIngredientIndex: -1
//       };
//     default:
//       return state;
//   }
// }

// ------------ //

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
