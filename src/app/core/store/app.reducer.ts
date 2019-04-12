import {ActionReducerMap} from '@ngrx/store';
import {AuthReducer} from './auth/auth.reducer';
import {AuthState} from './auth/auth.model';
import {UiReducer, UiState} from './ui/ui.reducer';
import {CartReducer, CartState} from './cart/cart.reducer';
import {SearchReducer, SearchState} from './search/search.reducer';
import {AuthActions} from './auth/auth.actions';
import {UiActions} from './ui/ui.actions';
import {CartActions} from './cart/cart.actions';
import {SearchActions} from './search/search.actions';
import {ModalReducer, ModalState} from './modal/modal.reducer';
import {ModalActions} from './modal/modal.actions';



export interface AppState {
  // region: from
  auth: AuthState;
  ui: UiState;
  cart: CartState;
  search: SearchState;
  modal: ModalState;
}


export const reducers: {
  auth: (state: AuthState, action: AuthActions) => ({ user: any; isAuthenticated: boolean } | { isAuthenticated: boolean } | AuthState);
  ui: (state: UiState, action: UiActions) => UiState;
  cart: (state: CartState, action: CartActions) => CartState;
  search: (state: SearchState, action: SearchActions) => SearchState;
  modal: (state: ModalState, action: ModalActions) => ModalState;
} = {
  // user: UserReducer,
  auth: AuthReducer,
  ui: UiReducer,
  cart: CartReducer,
  search: SearchReducer,
  modal: ModalReducer
};

