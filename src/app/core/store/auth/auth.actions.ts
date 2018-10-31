// Section 2

import {Action} from '@ngrx/store';


export const SIGNUP    = '[AUTH] SIGNUP';

export const LOGIN    = '[AUTH] LOGIN';
export const LOGIN_SUCCESS = '[AUTH] LOGIN_SUCCESS';
export const LOGIN_FAILURE = '[AUTH] LOGIN_FAILURE';


// export const LOGOUT    = '[AUTH] LOGOUT';
export const LOGOUT    = '[AUTH] LOGOUT';



export class Signup implements Action {
  readonly type = SIGNUP;
  constructor(public payload: any) {}

}



export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: any) {}

}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) {}

}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: any) {}

}




export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions =
  | Signup

  | Login
  | LoginSuccess
  | LoginFailure

  | Logout;
