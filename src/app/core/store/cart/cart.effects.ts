import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CartService} from '../../service/cart/cart.service';
import * as CartActions from './cart.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {
  AddToCartFailure,
  AddToCartSuccess,
  CreateToCartFailure,
  CreateToCartSuccess,
  DeleteFromCartFailure,
  DeleteFromCartSuccess,
  GetCartInfoFailure,
  GetCartInfoSuccess,
  SubtractFromFailure,
  SubtractFromSuccess
} from './cart.actions';

import {of} from 'rxjs';

@Injectable()
export class CartEffects {

  constructor(
    private cartService: CartService,
    private actions$: Actions,
  ) {

  }


  @Effect()
  getCartInfo = this.actions$.pipe(
    ofType( CartActions.TRY_GET_CART_INFO ),
    map( payload => payload['payload']),
    switchMap( payload => {
      return this.cartService.getCartInfo()
        .pipe(
          map( getCartInfo => {
            return new GetCartInfoSuccess( getCartInfo );
          }),
          catchError( error => {
            return of(new GetCartInfoFailure( {error : error}));
          })
        );
    })
  );

  @Effect()
  deleteFromCart = this.actions$.pipe(
    ofType( CartActions.TRY_DELETE_FROM_CART ),
    map( payload => payload['payload']),
    switchMap( payload => {
      return this.cartService.deleteFromCart(payload.productSlug)
        .pipe(
          map( respond => {
            return new DeleteFromCartSuccess( payload );
          }),
          catchError( error => {
            return of(new DeleteFromCartFailure( {error : error}));
          })
        );
    })
  );

  @Effect()
  addToCart = this.actions$.pipe(
    ofType( CartActions.TRY_ADD_OR_CREATE_TO_CART ),
    map( payload => payload['payload']),
    tap( v => console.log('thisis add to cart!!1')),
    // @ts-ignore
    switchMap( (payload: {productSlug, amount, increaseOrCreate}) => {
      if ( payload.increaseOrCreate ) {
        return this.cartService.addToCart( payload.productSlug, payload.amount )
          .pipe(
            map( getCartInfo => {
              return new AddToCartSuccess( payload );
            }),
            catchError( error => {
              return of(new AddToCartFailure( {error : error}));
            })
          );
      } else {
        return this.cartService.createToCart( payload.productSlug, payload.amount )
          .pipe(
            map( getCartInfo => {
              return new CreateToCartSuccess( getCartInfo );
            }),
            catchError( error => {
              return of(new CreateToCartFailure( {error : error}));
            })
          );
      }
    })
  );

  @Effect()
  subtractFromCart = this.actions$.pipe(
    ofType( CartActions.TRY_SUBTRACT_OR_DELETE_FROM_CART ),
    map( payload => payload['payload']),
    tap( v => console.log(v)),
    // @ts-ignore
    switchMap( (payload: { productSlug, amount, subtractOrDelete }) => {

      if ( payload.subtractOrDelete ) {
        return this.cartService.subtractFromCart( payload.productSlug, payload.amount )
          .pipe(
            map( respond => {
              return new SubtractFromSuccess( payload );
            }),
            catchError( error => {
              return of(new SubtractFromFailure( {error : error}));
            })
          );
      } else {
        console.log( payload.productSlug )
        return this.cartService.deleteFromCart( payload.productSlug )
          .pipe(
            map( respond => {
              return new DeleteFromCartSuccess( payload );
            }),
            catchError( error => {
              return of(new DeleteFromCartFailure( {error : error}));
            })
          );
      }
    })
  );

}
