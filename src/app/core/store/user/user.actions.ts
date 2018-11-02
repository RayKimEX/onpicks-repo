// Section 2

import {Action} from '@ngrx/store';
import {UserState} from './user.model';


export const GET_USER_INFO   = '[USER] GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = '[USER] GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = '[USER] GET_USER_INFO_FAILURE';


export class GetUserInfo implements Action {
  readonly type = GET_USER_INFO;
  constructor(public payload: UserState) {}

}



export class GetUserInfoSuccess implements Action {
  readonly type = GET_USER_INFO_SUCCESS;

  constructor(public payload: UserState) {}

}

export class GetUserInfoFailure implements Action {
  readonly type = GET_USER_INFO_FAILURE;

  constructor(public payload: UserState) {}

}


export type UserActions =
  | GetUserInfo

  | GetUserInfoSuccess
  | GetUserInfoFailure;
