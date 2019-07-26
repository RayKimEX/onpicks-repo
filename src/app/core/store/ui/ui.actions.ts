import { Action } from '@ngrx/store';

export const GET_CATEGORY_ALL = '[UI Search] GET_CATEGORY_ALL';

export const GET_CATEGORY_ALL_SUCCESS = '[UI Search] GET_CATEGORY_ALL_SUCCESS';
export const GET_CATEGORY_ALL_FAILURE = '[UI Search] GET_CATEGORY_ALL_FAILURE';

export const UPDATE_CATEGORY = '[UI Search] UPDATE_CATEGORY';

export const UPDATE_URL_ACTIVE = '[URL Active] UPDATE_URL_ACTIVE';

export const DISPLAY_ALERT_MESSAGE = '[UI] DISPLAY_ALERT_MESSAGE';
export const REMOVE_ALERT_MESSAGE = '[UI] REMOVE_ALERT_MESSAGE';

export const ADD_CLASS_OPEN_MODAL = '[UI] ADD_CLASS_OPEN_MODAL';
export const REMOVE_CLASS_OPEN_MODAL = '[UI] REMOVE_CLASS_OPEN_MODAL';


export const UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_DETAIL_PAGE = '[UI] UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_DETAIL_PAGE';
export const UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_PURCHASE = '[UI] UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_PURCHASE';
export const UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_NORMAL = '[UI] UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_NORMAL';

export class UpdateGlobalKakaoPlusFriendForPurchase implements Action {
  readonly type = UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_PURCHASE;
}

export class UpdateGlobalKakaoPlusFriendForDetailPage implements Action {
  readonly type = UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_DETAIL_PAGE;
}

export class UpdateGlobalKakaoPlusFriendForNormal implements Action {
  readonly type = UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_NORMAL;
}

export class AddClassOpenModal implements Action {
  readonly type = ADD_CLASS_OPEN_MODAL;
}

export class RemoveClassOpenModal implements Action {
  readonly type = REMOVE_CLASS_OPEN_MODAL;
}



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
  AddClassOpenModal |
  RemoveClassOpenModal |
  GetCategoryAll |
  GetCategoryAllSuccess |
  GetCategoryFailure |
  UpdateCategory |
  UpdateUrlActive |
  DisplayAlertMessage |
  RemoveAlertMessage |
  UpdateGlobalKakaoPlusFriendForDetailPage |
  UpdateGlobalKakaoPlusFriendForNormal |
  UpdateGlobalKakaoPlusFriendForPurchase;
