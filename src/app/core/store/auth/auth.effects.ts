import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import {
  catchError,
  map, mergeMap,
  switchMap, tap
} from 'rxjs/operators';

import {
  GetAuthUserInfoFailure,
  GetAuthUserInfoSuccess,
  TryLogin,
  LoginFailure,
  LoginSuccess,
  LogoutFailure,
  LogoutSuccess,
  Signup
} from './auth.actions';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {UserSignUpAPI} from '../user.model';
import {UiService} from '../../service/ui/ui.service';
import {TryGetCartInfo} from '../cart/cart.actions';
import {DisplayAlertMessage} from '../ui/ui.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private authService: AuthService,
    private router: Router,
    private actions$: Actions,
    private uiService: UiService,
  ) {

  }


  @Effect()
  authSignUp = this.actions$.pipe(
    ofType( AuthActions.SIGNUP ),
    map( (action: Signup) => action.payload ),
    switchMap( (payload: UserSignUpAPI) => {
      return this.authService.signup(payload)
        .pipe(
          map( (user) => {
            this.router.navigate(['/shops']);

            return new LoginSuccess( user);
          }),
          catchError( (response) => {

            let errorMessage = '';
            Object.keys(response.error).forEach( key => {
              errorMessage = response.error[key][0];
              console.log(errorMessage);
            })
            return [
                new LoginFailure({ error : response }),
                new DisplayAlertMessage(errorMessage)
            ];
          })
        );
    })
  );

  @Effect()
  authLogin = this.actions$.pipe(
    ofType( AuthActions.TRY_LOGIN ),
    map( (action: TryLogin) => action.payload ),
    switchMap( payload => {
      return this.authService.login( payload.info.email, payload.info.password,  payload.info.isPersistent )
        .pipe(
          mergeMap( (user) => {
            this.router.navigateByUrl(payload.returnURL);
            return [
              new LoginSuccess(user),
              new TryGetCartInfo()
            ];
          }),
          catchError( (response) => {
            console.log(response)
            return [
              new LoginFailure({ response : response }),
              new DisplayAlertMessage(response.error.detail)
            ];
          })
        );
    })
  );

  @Effect()
  authLogout = this.actions$.pipe(
    ofType( AuthActions.TRY_LOGOUT ),
    switchMap( payload => {
      return this.authService.logout()
        .pipe(
          mergeMap( (user) => {
            console.log(user);
            return [
              new LogoutSuccess(),
              new TryGetCartInfo()
            ];
          }),
          catchError( (error) => {
            console.log(error);
            return of(new LogoutFailure({ error : error }));
          })
        );
    })
  );



  @Effect()
  getAuthUser = this.actions$.pipe(
    ofType( AuthActions.TRY_GET_AUTHUSER_INFO ),
    switchMap( payload => {
      return this.authService.getAuthUser()
        .pipe(
          map( (user) => {
            console.log(user);
            return new GetAuthUserInfoSuccess(user);
          }),
          catchError( (error) => {
            console.log(error);
            return of(new GetAuthUserInfoFailure({ error : error }));
          })
        );
    })
  );

}
