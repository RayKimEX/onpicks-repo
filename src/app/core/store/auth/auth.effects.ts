import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Login, LoginFailure, LoginSuccess, Signup} from './auth.actions';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {of} from 'rxjs';

@Injectable()
export class AuthEffects {

  constructor(
    private authService: AuthService,
    private router: Router,
    private actions$: Actions
  ) {}

  @Effect()
  authLogin = this.actions$.pipe(
    ofType( AuthActions.LOGIN ),
    map( (action: Login) => action.payload ),
    switchMap( payload => {
      return this.authService.login( payload.email, payload.password )
        .pipe(
          map( (user) => {
            console.log(user);
            return new LoginSuccess({name : 'hong', email : 'jesus_join@naver.com'});
          }),
          catchError( (error) => {
            console.log(error);
            return of(new LoginFailure({ error : error }));
          })
        );
    })
    //
    //
    // switchMap( payload => {
    //   return this.authService.signin( payload.email, payload.password )
    //     .pipe(
    //       map( (user) => {
    //         console.log(user);
    //         return new LoginSuccess({name : 'hong', email : 'jesus_join@naver.com'});
    //       }),
    //       catchError( (error) => {
    //         console.log(error);
    //         return of(new LoginFailure({error : error}));
    //       });
    //     );
    //   });
  );

}
