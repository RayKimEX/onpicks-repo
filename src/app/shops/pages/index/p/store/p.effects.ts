import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as PActions from './p.actions';
import {promise} from 'selenium-webdriver';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {PDataService} from '../../../../../core/service/data-pages/p/p-data.service';
import {GetReviewProduct, GetReviewProductSuccess} from './p.actions';
import {GetReviewProductFailure} from './p.actions';
import {of} from 'rxjs';


@Injectable()
export class PEffects {

  constructor(
    private actions$: Actions,
    private pDataService: PDataService,
  ) {

  }

  @Effect()
  getCategory = this.actions$.pipe(
    ofType( PActions.GET_REVIEWS_PRODUCT ),
    tap( (payload) =>  console.log(payload)),
    switchMap( payload => {
      return this.pDataService.getReviewsData(payload)
        .pipe(
          map( (getReviews) => {
            return new GetReviewProductSuccess( getReviews);
          }),
          catchError( (error) => {
            console.log(error);
            return of(new GetReviewProductFailure({ error : error }));
          })
        );
    })
  );
}
