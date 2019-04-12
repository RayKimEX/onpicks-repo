import { Action } from '@ngrx/store';

export const SHOW_CURRENCY_MODAL = '[MODAL] SHOW_CURRENCY_MODAL';
export const HIDE_CURRENCY_MODAL = '[MODAL] HIDE_CURRENCY_MODAL';

export class ShowCurrencyModal implements Action {
  readonly type = SHOW_CURRENCY_MODAL;
}

export class HideCurrencyModal implements Action {
  readonly type = HIDE_CURRENCY_MODAL;
}


export type ModalActions =
  ShowCurrencyModal |
  HideCurrencyModal;
