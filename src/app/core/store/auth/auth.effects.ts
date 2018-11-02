import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {
  GetAuthUserInfoFailure,
  GetAuthUserInfoSuccess,
  Login,
  LoginFailure,
  LoginSuccess,
  Logout, LogoutFailure,
  LogoutSuccess,
  Signup
} from './auth.actions';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {of} from 'rxjs';

@Injectable()
export class AuthEffects {

  constructor(
    private authService: AuthService,
    private router: Router,
    private actions$: Actions
  ) {

  }

  @Effect()
  authLogin = this.actions$.pipe(
    ofType( AuthActions.LOGIN ),
    map( (action: Login) => action.payload ),
    switchMap( payload => {
      return this.authService.login( payload.email, payload.password )
        .pipe(
          map( (user) => {
            console.log(user);
            return new LoginSuccess({nickName : 'hong', email : 'jesus_join@naver.com', thumbnailSmallImgSrc : 'https://s3.amazonaws.com/img.onpicks.com/cart__table--info-N.png'});
          }),
          catchError( (error) => {
            console.log(error);
            return of(new LoginFailure({ error : error }));
          })
        );
    })
  );

  @Effect()
  authLogout = this.actions$.pipe(
    ofType( AuthActions.LOGOUT ),
    switchMap( payload => {
      return this.authService.logout()
        .pipe(
          map( (user) => {
            console.log(user);
            return new LogoutSuccess();
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
    ofType( AuthActions.GET_AUTHUSER_INFO ),
    switchMap( payload => {
      return this.authService.getAuthUser()
        .pipe(
          map( (user) => {
            console.log(user);
            return new GetAuthUserInfoSuccess({nickName : 'hong', email : 'jesus_join@naver.com', thumbnailSmallImgSrc : 'https://s3.amazonaws.com/img.onpicks.com/cart__table--info-N.png'});
          }),
          catchError( (error) => {
            console.log(error);
            return of(new GetAuthUserInfoFailure({ error : error }));
          })
        );
    })
  );

}
