import {ActionReducerMap} from '@ngrx/store';
import {AuthReducer} from './auth/auth.reducer';
import {AuthState} from './auth/auth.model';
import {UiReducer, UiState} from './ui/ui.reducer';
import {CartReducer, CartState} from './cart/cart.reducer';
import {SearchReducer, SearchState} from './search/search.reducer';



export interface AppState {
  // region: from
  auth: AuthState;
  ui: UiState;
  cart: CartState;
  search: SearchState;
}


export const reducers: ActionReducerMap<AppState> = {
  // user: UserReducer,
  auth: AuthReducer,
  ui: UiReducer,
  cart: CartReducer,
  search: SearchReducer,
};

