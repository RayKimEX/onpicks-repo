import { Action } from '@ngrx/store';

export const GET_CATEGORY_ALL = '[UI Search] GET_CATEGORY_ALL';

export const GET_CATEGORY_ALL_SUCCESS = '[UI Search] GET_CATEGORY_ALL_SUCCESS';
export const GET_CATEGORY_ALL_FAILURE = '[UI Search] GET_CATEGORY_ALL_FAILURE';

export const UPDATE_CATEGORY = '[UI Search] UPDATE_CATEGORY';

export const UPDATE_URL_ACTIVE = '[URL Active] UPDATE_URL_ACTIVE';

export const DISPLAY_ALERT_MESSAGE = '[UI] DISPLAY_ALERT_MESSAGE';
export const REMOVE_ALERT_MESSAGE = '[UI] REMOVE_ALERT_MESSAGE';



export class GetCategoryAll implements Action {
  readonly type = GET_CATEGORY_ALL;


  constructor(public payload: any) {
  }

}

export class GetCategoryAllSuccess implements Action {
  readonly type = GET_CATEGORY_ALL_SUCCESS;

  constructor(public payload: {
    type: any,
    data: any,
    categoryTitle: any,
    secondSortKey: number,
    thirdSortKey: number,
    fourthSortKey: number,
  }) {

  }
}

export class GetCategoryFailure implements Action {
  readonly type = GET_CATEGORY_ALL_FAILURE;

  constructor(public payload: any) {}
}

export class UpdateCategory implements Action {
  readonly type = UPDATE_CATEGORY;

  constructor(public payload: any) {

  }
}

export class UpdateUrlActive implements Action {
  readonly type = UPDATE_URL_ACTIVE;

  constructor(public payload: any) {

  }
}

export class DisplayAlertMessage implements Action {
  readonly type = DISPLAY_ALERT_MESSAGE;

  constructor( public payload: any ) {

  }
}
export class RemoveAlertMessage implements Action {
  readonly type = REMOVE_ALERT_MESSAGE;

  constructor( ) {

  }
}

export type UiActions =
  GetCategoryAll |
  GetCategoryAllSuccess |
  GetCategoryFailure |
  UpdateCategory |
  UpdateUrlActive |
  DisplayAlertMessage |
  RemoveAlertMessage;
