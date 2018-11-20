import { Action } from '@ngrx/store';

export const GET_CATEGORY_ALL = '[UI Search] GET_CATEGORY_ALL';

export const GET_CATEGORY_ALL_SUCCESS = '[UI Search] GET_CATEGORY_ALL_SUCCESS';
export const GET_CATEGORY_ALL_FAILURE = '[UI Search] GET_CATEGORY_ALL_FAILURE';

export const UPDATE_CATEGORY = '[UI Search] UPDATE_CATEGORY';

export const UPDATE_THIRD_CATEGORY = '[UI Search] UPDATE_THIRD_CATEGORY';

export const UPDATE_FOURTH_CATEGORY = '[UI Search] UPDATE_FOURTH_CATEGORY';



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

export class UpdateThirdCategory implements Action {
  readonly type = UPDATE_THIRD_CATEGORY;

}

export class UpdateFourthCategory implements Action {
  readonly type = UPDATE_FOURTH_CATEGORY;

}


export type UiActions =
  GetCategoryAll |
  GetCategorySuccess |
  GetCategoryFailure |
  UpdateCategory |
  UpdateThirdCategory |
  UpdateFourthCategory;
