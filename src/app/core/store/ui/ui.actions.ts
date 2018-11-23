import { Action } from '@ngrx/store';

export const GET_CATEGORY_ALL = '[UI Search] GET_CATEGORY_ALL';

export const GET_CATEGORY_ALL_SUCCESS = '[UI Search] GET_CATEGORY_ALL_SUCCESS';
export const GET_CATEGORY_ALL_FAILURE = '[UI Search] GET_CATEGORY_ALL_FAILURE';

export const UPDATE_CATEGORY = '[UI Search] UPDATE_CATEGORY';

export const UPDATE_URL_ACTIVE = '[URL Active] UPDATE_URL_ACTIVE'



export class GetCategoryAll implements Action {
  readonly type = GET_CATEGORY_ALL;


  constructor(public payload: any) {
  }

}

export class GetCategorySuccess implements Action {
  readonly type = GET_CATEGORY_ALL_SUCCESS;

  constructor(public payload: {
    data: string,
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



export type UiActions =
  GetCategoryAll |
  GetCategorySuccess |
  GetCategoryFailure |
  UpdateCategory |
  UpdateUrlActive;
