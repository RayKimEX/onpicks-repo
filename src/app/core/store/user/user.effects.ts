import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {UserActions} from './user.actions';
import {UserService} from '../../service/user/user.service';

@Injectable()
export class UserEffects {

  constructor(
    private authService: UserService,
    private router: Router,
    private actions$: Actions
  ) {

  }

  @Effect()
  authLogin = this.actions$.pipe(
    ofType( UserActions. ),
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
  );

}
