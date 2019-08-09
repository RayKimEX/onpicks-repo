
// Angular Core
import { Injectable } from '@angular/core';

// NgRX & RxJS
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  AddCommentFailure,
  AddCommentSuccess,
  GetCommentsProductFailure,
  GetCommentsProductSuccess, GetProductInfoFailure, GetProductInfoSuccess,
  GetReviewProductFailure,
  GetReviewProductSuccess, ToggleVoteReviewFailure, ToggleVoteReviewSuccess,
} from './p.actions';
import * as PActions from './p.actions';

// Custom
import { PDataService } from '../../../../../core/service/data-pages/p/p-data.service';


@Injectable()
export class PEffects {

  constructor(
    private actions$: Actions,
    private pDataService: PDataService,
  ) { }

  @Effect()
  tryToggleVoteReview = this.actions$.pipe(
    ofType( PActions.TRY_TOGGLE_VOTE_REIVEW ),
    tap( v => console.log(v)),
    map( payload => payload['payload']),
    switchMap( (subLoad: {productSlug, reviewId, isVote}) => {
      if ( subLoad.isVote ) {
        return this.pDataService.voteReviewsData(subLoad.productSlug, subLoad.reviewId)
          .pipe(
            map( (response) => {
              return new ToggleVoteReviewSuccess(response);
            }),
            catchError( (error) => {
              console.error(error);
              return of(new ToggleVoteReviewFailure({ error : error}));
            })
          );
      } else {
        return this.pDataService.unvoteReviewsData(subLoad.productSlug, subLoad.reviewId)
          .pipe(
            map( (response) => {
              return new ToggleVoteReviewSuccess(response);
            }),
            catchError( (error) => {
              console.error(error);
              return of(new ToggleVoteReviewFailure({ error : error}));
            })
          );
      }

    })
  )


  @Effect()
  getProductInfo = this.actions$.pipe(
    ofType( PActions.TRY_GET_PRODUCT_INFO ),
    tap( v => console.log(v)),
    map( payload => payload['payload']),
    switchMap( productSlug => {
      return this.pDataService.getPageData(productSlug)
        .pipe(
          map( (getProductInfo) => {
            return new GetProductInfoSuccess( getProductInfo);
          }),
          catchError( (error) => {
            console.error(error);
            return of(new GetProductInfoFailure({ error : error}));
          })
        );
    })
  )

  @Effect()
  getReviews = this.actions$.pipe(
    ofType( PActions.TRY_GET_REVIEWS_PRODUCT ),
    map( payload => payload['payload']),
    switchMap( (subLoad: { productSlug, sorting }) => {
      return this.pDataService.getReviewsData(subLoad.productSlug, subLoad.sorting)
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
    ofType( PActions.TRY_GET_COMMENTS_PRODUCT ),
    map( payload => payload['payload']),
    switchMap( (subLoad: {productId, reviewsId} ) => {
      return this.pDataService.getCommentsData(subLoad.productId, subLoad.reviewsId)
        .pipe(
          map( (getReviews) => {
            return new GetCommentsProductSuccess( { currentComments : getReviews, reviewsId : subLoad.reviewsId } );
          }),
          catchError( (error) => {
            console.error(error);
            return of(new GetCommentsProductFailure({ error : error }));
          })
        );
    })
  );


  @Effect()
  addComments = this.actions$.pipe(
    ofType( PActions.TRY_ADD_COMMENT ),
    map( payload => payload['payload']),
    switchMap( (subLoad: { productId, reviewsId, addedText }) => {
      return this.pDataService.addCommentsData( subLoad.productId, subLoad.reviewsId, subLoad.addedText )
        .pipe(
          map( (respond) => {
            return new AddCommentSuccess({ respond : respond, reviewsId : subLoad.reviewsId });
          }),
          catchError( (error) => {
            console.error(error);
            return of(new AddCommentFailure({ error : error }));
          })
        );
    })
  );
}
