import { Action } from '@ngrx/store';
import {HIDE_CURRENCY_MODAL, HIDE_REGION_MODAL, ModalActions, SHOW_CURRENCY_MODAL, SHOW_REGION_MODAL} from './modal.actions';


export interface ModalState {
  currencyModal: any;
  regionModal: any;
}

export const initialState: ModalState = {
  currencyModal: false,
  regionModal: false
};

export function ModalReducer(state = initialState, action: Action): ModalState {
  switch (action.type) {

    case HIDE_REGION_MODAL:
      return {
        ...state,
        regionModal: false
      }
    case SHOW_REGION_MODAL:
      return {
        ...state,
        regionModal: true
      }
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
