import { Action } from '@ngrx/store';

export const TRY_GET_FIRST_CATEGORY = '[Search] TRY_GET_FIRST_CATEGORY';
export const GET_FIRST_CATEGORY_SUCCESS = '[Search] GET_FIRST_CATEGORY_SUCCESS';
export const GET_FIRST_CATEGORY_FAILURE = '[Search] GET_FIRST_CATEGORY_FAILURE';
export const GET_FIRST_CATEGORY = '[Search] GET_FIRST_CATEGORY';

export const TRY_GET_SECOND_CATEGORY = '[Search] TRY_GET_SECOND_CATEGORY';
export const GET_SECOND_CATEGORY_SUCCESS = '[Search] GET_SECOND_CATEGORY_SUCCESS';
export const GET_SECOND_CATEGORY_FAILURE = '[Search] GET_SECOND_CATEGORY_FAILURE';
export const GET_SECOND_CATEGORY = '[Search] GET_SECOND_CATEGORY';

export const TRY_GET_THIRD_CATEGORY = '[Search] TRY_GET_THIRD_CATEGORY';
export const GET_THIRD_CATEGORY_SUCCESS = '[Search] GET_THIRD_CATEGORY_SUCCESS';
export const GET_THIRD_CATEGORY_FAILURE = '[Search] GET_THIRD_CATEGORY_FAILURE';
export const GET_THIRD_CATEGORY = '[Search] GET_THIRD_CATEGORY';

export const TRY_GET_FOURTH_CATEGORY = '[Search] TRY_GET_FOURTH_CATEGORY';
export const GET_FOURTH_CATEGORY_SUCCESS = '[Search] GET_FOURTH_CATEGORY_SUCCESS';
export const GET_FOURTH_CATEGORY_FAILURE = '[Search] GET_FOURTH_CATEGORY_FAILURE';
export const GET_FOURTH_CATEGORY = '[Search] GET_FOURTH_CATEGORY';


//
export class TryGetFirstCategory implements Action {
  readonly type = TRY_GET_FIRST_CATEGORY;
}

export class GetFirstCategorySuccess implements Action {
  readonly type = GET_FIRST_CATEGORY_SUCCESS;
}

export class GetFirstCategoryFailure implements Action {
  readonly type = GET_FIRST_CATEGORY_FAILURE;
}

export class GetFirstCategory implements Action {
  readonly type = GET_FIRST_CATEGORY;

  constructor( public payload: { firstSortKey, type, data } ) { }
}


//
export class TryGetSecondCategory implements Action {
  readonly type = TRY_GET_SECOND_CATEGORY;

  constructor( public payload: { firstSortKey, secondSortKey, type } ) { }
}

export class GetSecondCategorySuccess implements Action {
  readonly type = GET_SECOND_CATEGORY_SUCCESS;

  constructor( public payload: { firstSortKey, secondSortKey, type, data } ) { }
}

export class GetSecondCategoryFailure implements Action {
  readonly type = GET_SECOND_CATEGORY_FAILURE;

  constructor( public payload: { error } ) { }
}

export class GetSecondCategory implements Action {
  readonly type = GET_SECOND_CATEGORY;
}


//
export class TryGetThirdCategory implements Action {
  readonly type = TRY_GET_THIRD_CATEGORY;

  constructor( public payload: { firstSortKey, secondSortKey, thirdSortKey, type } ) { }
}

export class GetThirdCategorySuccess implements Action {
  readonly type = GET_THIRD_CATEGORY_SUCCESS;
}

export class GetThirdCategoryFailure implements Action {
  readonly type = GET_THIRD_CATEGORY_FAILURE;
}

export class GetThirdCategory implements Action {
  readonly type = GET_THIRD_CATEGORY;
}


//
export class TryGetFourthCategory implements Action {
  readonly type = TRY_GET_FOURTH_CATEGORY;
}

export class GetFourthCategorySuccess implements Action {
  readonly type = GET_FOURTH_CATEGORY_SUCCESS;
}

export class GetFourthCategoryFailure implements Action {
  readonly type = GET_FOURTH_CATEGORY_FAILURE;
}

export class GetFourthCategory implements Action {
  readonly type = GET_FOURTH_CATEGORY;
}


//
export type SearchActions =
  //
  TryGetFirstCategory |
  GetFirstCategorySuccess |
  GetFirstCategoryFailure |
  GetFirstCategory |
  //
  TryGetSecondCategory |
  GetSecondCategorySuccess |
  GetSecondCategoryFailure |
  GetSecondCategory |
  //
  TryGetThirdCategory |
  GetThirdCategorySuccess |
  GetThirdCategoryFailure |
  GetThirdCategory |
  //
  TryGetFourthCategory |
  GetFourthCategorySuccess |
  GetFourthCategoryFailure |
  GetFourthCategory |;
