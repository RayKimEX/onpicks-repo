// Section 2

import {Action} from '@ngrx/store';
import {UserSignUpAPI, UserState} from '../user/user.model';


export const SIGNUP    = '[AUTH] SIGNUP';
export const SIGNUP_SUCCESS    = '[AUTH] SIGNUP_SUCCESS';
export const SIGNUP_FAILURE    = '[AUTH] SIGNUP_FAILURE';

export const LOGIN    = '[AUTH] LOGIN';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGIN_FAILURE = '[AUTH] LOGIN_FAILURE';


export const GET_AUTHUSER_INFO    = '[AUTH] GET_AUTHUSER_INFO';
export const GET_AUTHUSER_INFO_SUCCESS = '[AUTH] GET_AUTHUSER_INFO_SUCCESS';
export const GET_AUTHUSER_INFO_FAILURE = '[AUTH] GET_AUTHUSER_INFO_FAILURE';

// export const LOGOUT    = '[AUTH] LOGOUT';
export const LOGOUT    = '[AUTH] LOGOUT';
export const LOGOUT_SUCCESS    = '[AUTH] LOGOUT_SUCCESS';
export const LOGOUT_FAILURE    = '[AUTH] LOGOUT_FAILURE';



export class Signup implements Action {
  readonly type = SIGNUP;
  constructor(public payload: UserSignUpAPI) {}
}



export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: any) {}

}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: UserState) {}

}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) {}

}



export class GetAuthUser implements Action {
  readonly type = GET_AUTHUSER_INFO;

}

export class GetAuthUserInfoSuccess implements Action {
  readonly type = GET_AUTHUSER_INFO_SUCCESS;

  constructor(public payload: UserState) {}

}

export class GetAuthUserInfoFailure implements Action {
  readonly type = GET_AUTHUSER_INFO_FAILURE;

  constructor(public payload: any) {}

}




export class Logout implements Action {
  readonly type = LOGOUT;
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

  | Login
  | LoginSuccess
  | LoginFailure

  | GetAuthUser
  | GetAuthUserInfoFailure
  | GetAuthUserInfoSuccess

  | Logout
  | LogoutSuccess
  | LogoutFailure;

