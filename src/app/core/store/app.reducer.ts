import {ActionReducerMap} from '@ngrx/store';

import * as MenuActions from '../../shops/pages/index/p/store/p.actions';
import {AuthReducer} from './auth/auth.reducer';
import {AuthState} from './auth/auth.model';
import {UiReducer, UiState} from './ui/ui.reducer';
import {PState} from '../../shops/pages/index/p/store/p.reducer';
import {CartReducer, CartState} from './cart/cart.reducer';



export interface AppState {
  // region: from
  auth: AuthState;
  ui: UiState;
  cart: CartState;
}


export const reducers: ActionReducerMap<AppState> = {
  // user: UserReducer,
  auth: AuthReducer,
  ui: UiReducer,
  cart: CartReducer,
};

