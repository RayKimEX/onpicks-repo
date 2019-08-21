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

export const OPEN_CATEGORY_NAVIGATOR = '[UI] OPEN_CATEGORY_NAVIGATOR';
export const CLOSE_CATEGORY_NAVIGATOR = '[UI] CLOSE_CATEGORY_NAVIGATOR';

export const UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_DETAIL_PAGE = '[UI] UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_DETAIL_PAGE';
export const UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_PURCHASE = '[UI] UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_PURCHASE';
export const UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_NORMAL = '[UI] UPDATE_GLOBAL_KAKAO_PLUS_FRIEND_FOR_NORMAL';

export const TRY_GET_DELIVERY_INFO = '[UI] TRY_GET_DELIVERY_INFO';
export const GET_DELIVERY_INFO_SUCCESS = '[UI] GET_DELIVERY_INFO_SUCCESS';

export const TRY_UPDATE_DELIVERY_INFO = '[UI] TRY_UPDATE_DELIVERY_INFO';
export const UPDATE_DELIVERY_INFO_SUCCESS = '[UI] UPDATE_DELIVERY_INFO_SUCCESS';


export const TRY_UPDATE_DELIVERY_DATA_TO_DEFAULT = '[UI] TRY_UPDATE_DELIVERY_DATA_TO_DEFAULT';
export const UPDATE_DELIVERY_DATA_TO_DEFAULT_SUCCESS = '[UI] UPDATE_DELIVERY_DATA_TO_DEFAULT_SUCCESS';



export const TRY_ADD_DELIVERY_INFO = '[UI] TRY_ADD_DELIVERY_INFO';
export const ADD_DELIVERY_INFO_SUCCESS = '[UI] ADD_DELIVERY_INFO_SUCCESS';
export const TRY_REMOVE_DELIVERY_INFO = '[UI] TRY_REMOVE_DELIVERY_INFO';
export const REMOVE_DELIVERY_INFO_SUCCESS = '[UI] REMOVE_DELIVERY_INFO_SUCCESS';


export class OpenCategoryNavigator implements Action {
  readonly type = OPEN_CATEGORY_NAVIGATOR;
}

export class CloseCategoryNavigator implements Action {
  readonly type = CLOSE_CATEGORY_NAVIGATOR;
}

export class TryGetDeliveryInfo implements Action {
  readonly type = TRY_GET_DELIVERY_INFO;

  constructor(
    public payload: { userId }
  ) { }
}

export class TryUpdateDeliveryDataToDefault implements Action {
  readonly type = TRY_UPDATE_DELIVERY_DATA_TO_DEFAULT;

  constructor(
    public payload: { userId, deliveryId, defaultIndex }
  ) { }
}

export class UpdateDeliveryDataToDefaultSuccess implements Action {
  readonly type = UPDATE_DELIVERY_DATA_TO_DEFAULT_SUCCESS;

  constructor(
    public payload: { defaultIndex }
  ) { }
}

export class TryUpdateDeliveryInfo implements Action {
  readonly type = TRY_UPDATE_DELIVERY_INFO;

  constructor(
    public payload: { userId, deliveryId, data, dataIndex }
  ) { }
}


export class UpdateDeliveryInfoSuccess implements Action {
  readonly type = UPDATE_DELIVERY_INFO_SUCCESS;

  constructor(
    public payload: { data, dataIndex }
  ) { }
}

export class GetDeliveryInfoSuccess implements Action {
  readonly type = GET_DELIVERY_INFO_SUCCESS;

  constructor (
    public payload: any
  ) {  }
}

export class TryAddDeliveryInfo implements Action {
  readonly type = TRY_ADD_DELIVERY_INFO;

  constructor (
    public payload: {
      deliveryData: {
        full_name: string,
        zip_code: string,
        street_address_1: string,
        street_address_2: string,
        city: string,
        state: string,
        phone_number: string
      },
      userId: number
    }
  ) {  }
}

export class AddDeliveryInfoSuccess implements Action {
  readonly type = ADD_DELIVERY_INFO_SUCCESS;

  constructor (
    public payload: {
      full_name: string,
      zip_code: string,
      street_address_1: string,
      street_address_2: string,
      city: string,
      state: string,
      phone_number: string
    }
  ) {  }
}

export class TryRemoveDeliveryInfo implements Action {
  readonly type = TRY_REMOVE_DELIVERY_INFO;

  constructor (
    public payload: {
      userId,
      deliveryId,
      dataIndex
    }
  ) {  }
}


export class RemoveDeliveryInfoSuccess implements Action {
  readonly type = REMOVE_DELIVERY_INFO_SUCCESS;

  constructor (
    public payload: {
      dataIndex
    }
  ) {  }
}




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
  OpenCategoryNavigator |
  CloseCategoryNavigator |
  TryUpdateDeliveryDataToDefault |
  UpdateDeliveryDataToDefaultSuccess |
  TryUpdateDeliveryInfo |
  UpdateDeliveryInfoSuccess |
  TryGetDeliveryInfo |
  GetDeliveryInfoSuccess |
  TryAddDeliveryInfo |
  AddDeliveryInfoSuccess |
  TryRemoveDeliveryInfo |
  RemoveDeliveryInfoSuccess |
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
