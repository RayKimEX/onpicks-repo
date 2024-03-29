import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DOMAIN_HOST } from '../../global-constant/app.config';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchService } from '../../service/data-pages/search/search.service';
import * as SearchActions from './search.actions';
import { GetSecondCategoryFailure, GetSecondCategorySuccess } from './search.actions';

@Injectable()
export class SearchEffects {
  constructor(
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private actions$: Actions,
    private searchService: SearchService,
  ) {

  }

  @Effect()
  getCategory = this.actions$.pipe(
    ofType( SearchActions.TRY_GET_SECOND_CATEGORY),
    map( payload => payload['payload']),
    tap( v => console.log('@@@@')),
    switchMap( payload => {
      return this.searchService.getChildrenCategory(payload['firstCategorySlug'])
        .pipe(
          map( (categoryInfo) => {
            console.log(categoryInfo);
            return new GetSecondCategorySuccess({
              data : categoryInfo,
              firstCategorySlug : payload['firstCategorySlug'],
              secondSortKey : payload['secondSortKey'],
              type : payload['type'],
            });
          }),
          catchError( (error) => {
            return of(new GetSecondCategoryFailure({ error : error }));
          })
        );
    })
  );
}



