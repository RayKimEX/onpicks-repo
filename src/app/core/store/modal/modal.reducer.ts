import { Action } from '@ngrx/store';
import {HIDE_CURRENCY_MODAL, ModalActions, SHOW_CURRENCY_MODAL} from './modal.actions';


export interface ModalState {
  currencyModal: any;
}

export const initialState: ModalState = {
  currencyModal: false
};

export function ModalReducer(state = initialState, action: Action): ModalState {
  switch (action.type) {

    case SHOW_CURRENCY_MODAL:
      return {
        ...state,
        currencyModal: true
      }

    case HIDE_CURRENCY_MODAL:
      return {
        ...state,
        currencyModal: false
      }
    default:
      return state;
  }
}
