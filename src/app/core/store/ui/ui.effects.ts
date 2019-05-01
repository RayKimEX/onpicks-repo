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
      return this.uiService.getCategoryAll(payload['firstSortKey'])
        .pipe(
          map( (categoryInfo) => {

            return new GetCategoryAllSuccess( {
              type : payload['type'],
              data : categoryInfo.children,
              categoryTitle : categoryInfo.name,
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
}
