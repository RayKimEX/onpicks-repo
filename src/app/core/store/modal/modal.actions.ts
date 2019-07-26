import { Action } from '@ngrx/store';

export const SHOW_CURRENCY_MODAL = '[MODAL] SHOW_CURRENCY_MODAL';
export const HIDE_CURRENCY_MODAL = '[MODAL] HIDE_CURRENCY_MODAL';

export const SHOW_REGION_MODAL = '[MODAL] SHOW_REGION_MODAL';
export const HIDE_REGION_MODAL = '[MODAL] HIDE_REGION_MODAL';

export class ShowCurrencyModal implements Action {
  readonly type = SHOW_CURRENCY_MODAL;
}

export class HideCurrencyModal implements Action {
  readonly type = HIDE_CURRENCY_MODAL;
}


export class ShowRegionModal implements Action {
  readonly type = SHOW_REGION_MODAL;
}

export class HideRegionModal implements Action {
  readonly type = HIDE_REGION_MODAL;
}

export type ModalActions =
  ShowRegionModal |
  HideRegionModal |
  ShowCurrencyModal |
  HideCurrencyModal;
