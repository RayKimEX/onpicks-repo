// Section 2

import {Action} from '@ngrx/store';
import {UserSignUpAPI, UserState} from '../user.model';


export const SIGNUP    = '[AUTH] SIGNUP';
export const SIGNUP_SUCCESS    = '[AUTH] SIGNUP_SUCCESS';
export const SIGNUP_FAILURE    = '[AUTH] SIGNUP_FAILURE';

export const TRY_LOGIN    = '[AUTH] TRY_LOGIN';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGIN_FAILURE = '[AUTH] LOGIN_FAILURE';


export const TRY_GET_AUTHUSER_INFO    = '[AUTH] TRY_GET_AUTHUSER_INFO';
export const GET_AUTHUSER_INFO_SUCCESS = '[AUTH] GET_AUTHUSER_INFO_SUCCESS';
export const GET_AUTHUSER_INFO_FAILURE = '[AUTH] GET_AUTHUSER_INFO_FAILURE';

// export const LOGOUT    = '[AUTH] LOGOUT';
export const TRY_LOGOUT    = '[AUTH] TRY_LOGOUT';
export const LOGOUT_SUCCESS    = '[AUTH] LOGOUT_SUCCESS';
export const LOGOUT_FAILURE    = '[AUTH] LOGOUT_FAILURE';



export class Signup implements Action {
  readonly type = SIGNUP;
  constructor(public payload: UserSignUpAPI) {}
}



export class TryLogin implements Action {
  readonly type = TRY_LOGIN;

  constructor(public payload: {info, returnURL}) {}

}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) {}

}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) {}

}



export class TryGetAuthUser implements Action {
  readonly type = TRY_GET_AUTHUSER_INFO;

}

export class GetAuthUserInfoSuccess implements Action {
  readonly type = GET_AUTHUSER_INFO_SUCCESS;

  constructor(public payload: any) {}

}

export class GetAuthUserInfoFailure implements Action {
  readonly type = GET_AUTHUSER_INFO_FAILURE;

  constructor(public payload: any) {}

}




export class TryLogout implements Action {
  readonly type = TRY_LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class LogoutFailure implements Action {
  readonly type = LOGOUT_FAILURE;

  constructor(public payload: any) {}
}

export type AuthActions =
  | Signup

  | TryLogin
  | LoginSuccess
  | LoginFailure

  | TryGetAuthUser
  | GetAuthUserInfoFailure
  | GetAuthUserInfoSuccess

  | TryLogout
  | LogoutSuccess
  | LogoutFailure;

