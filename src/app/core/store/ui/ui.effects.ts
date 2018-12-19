import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as UiActions from './ui.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UiService} from '../../service/ui/ui.service';
import {GetCategoryAll, GetCategoryAllSuccess, GetCategoryFailure} from './ui.actions';


@Injectable()
export class UiEffects {

  constructor(
    private actions$: Actions,
    private uiService: UiService,
  ) {}

  @Effect()
  getCategory = this.actions$.pipe(
    ofType( UiActions.GET_CATEGORY_ALL ),
    map( payload => payload['payload']),
    switchMap( payload => {
      console.log(payload);
      console.log(payload['secondSortKey']);
      return this.uiService.getCategoryAll(1000000)
        .pipe(
          map( (categoryInfo) => {
            console.log(categoryInfo);
            return new GetCategoryAllSuccess( {
              data : categoryInfo.children,
              secondSortKey : payload['secondSortKey'],
              thirdSortKey : payload['thirdSortKey'],
              fourthSortKey : payload['fourthSortKey'],
            });
          }),
          catchError( (error) => {
            return of(new GetCategoryFailure({ error : error }));
          })
        );
    })
  );
  //
  // @Effect()
  // getCategory = this.actions$.pipe(
  //   ofType( UiActions.GET_CATEGORY_ALL ),
  //   map( payload => payload['payload']),
  //   switchMap( (payload) => {
  //         console.log(payload);
  //         console.log(payload['secondSortKey']);
  //     return new GetCategorySuccess({
  //       data: this.dataCategory,
  //       secondSortKey: payload['secondSortKey'],
  //       thirdSortKey: payload['thirdSortKey'],
  //       fourthSortKey: payload['fourthSortKey'],
  //     });
  //   })
  // );



}
