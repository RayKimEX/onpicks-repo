import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as PActions from './p.actions';
import {promise} from 'selenium-webdriver';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {PDataService} from '../../../../../core/service/data-pages/p/p-data.service';
import {
  AddCommentFailure,
  AddCommentSuccess,
  GetCommentsProductFailure,
  GetCommentsProductSuccess,
  GetReviewProduct,
  GetReviewProductSuccess
} from './p.actions';
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
  getReviews = this.actions$.pipe(
    ofType( PActions.GET_REVIEWS_PRODUCT ),
    map( payload => payload['payload']),
    // tap( (payload) =>  console.log(payload)),
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

  @Effect()
  getCommnets = this.actions$.pipe(
    ofType( PActions.GET_COMMENTS_PRODUCT ),
    map( payload => payload['payload']),
    // tap( (payload: {productId, reviewsId}) => console.log(payload)),
    switchMap( payload => {
      return this.pDataService.getCommentsData(payload.productId, payload.reviewsId)
        .pipe(
          map( (getReviews) => {
            return new GetCommentsProductSuccess( { currentComments : getReviews, reviewsId : payload.reviewsId } );
          }),
          catchError( (error) => {
            return of(new GetCommentsProductFailure({ error : error }));
          })
        );
    })
  );


  @Effect()
  addComments = this.actions$.pipe(
    ofType( PActions.ADD_COMMENT ),
    map( payload => payload['payload']),
    // tap( (payload: {productId, reviewsId}) => console.log(payload)),
    switchMap( payload => {
      return this.pDataService.addCommentsData( payload.productId, payload.reviewsId, payload.addedText )
        .pipe(
          map( (respond) => {
            return new AddCommentSuccess({ respond : respond, reviewsId : payload.reviewsId });
          }),
          catchError( (error) => {
            return of(new AddCommentFailure({ error : error }));
          })
        );
    })
  );
}
