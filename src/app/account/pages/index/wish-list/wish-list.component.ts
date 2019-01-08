import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {LOCATION_MAP} from '../../../../app.config';
import {TryAddOrCreateToCart, TryDeleteWishList} from '../../../../core/store/cart/cart.actions';

@Component({
  selector: 'onpicks-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class WishListComponent implements OnInit, OnDestroy {

  wishList$;
  wishList;

  cartStore$;
  cartStore;

  constructor(
    @Inject( LOCATION_MAP ) public locationMap: any,
    private store: Store<any>
  ) {
    this.wishList$ = this.store.pipe(
      select( state => state.cart.wishList),
      tap( v => console.log(v))
    );

    this.cartStore$ = this.store.pipe(select( state => state.cart )).subscribe(
      stateCart => this.cartStore = stateCart
    );
  }

  ngOnDestroy() {
    this.cartStore$.unsubscribe();
  }

  moveWishListToCart(xAmount, xProductSlug, xPackIndex, xWishListId, xIndex){
    console.log(xAmount);
    this.store.dispatch( new TryAddOrCreateToCart(
      {
        isPopUp : false,
        productSlug : xProductSlug,
        amount : xAmount,
        packIndex : xPackIndex,
        increaseOrCreate : xProductSlug in this.cartStore.cartList
      }) );

    console.log(xWishListId)
    console.log(xIndex);
    this.store.dispatch( new TryDeleteWishList( { wishListId : xWishListId, index : xIndex}));
  }

  ngOnInit() {

  }

}
