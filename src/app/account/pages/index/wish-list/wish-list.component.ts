import {ChangeDetectionStrategy, Component, Inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {CURRENCY, LOCATION_MAP} from '../../../../core/global-constant/app.config';
import {TryAddOrCreateToCart, TryDeleteWishList} from '../../../../core/store/cart/cart.actions';
import {UiService} from '../../../../core/service/ui/ui.service';
import {BehaviorSubject} from 'rxjs';

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

  weeklyBest$;

  contentHeight = '';

  constructor(
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    private store: Store<any>,
    private uiService: UiService
  ) {
    this.wishList$ = this.store.pipe(
      select( state => state.cart.wishList),
      tap( v => console.log(v))
    );

    this.cartStore$ = this.store.pipe(select( state => state.cart )).subscribe(
      stateCart => this.cartStore = stateCart
    );
    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();
  }


  ngOnInit() {
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height - 400) + 'px';
  }

  ngOnDestroy() {
    this.cartStore$.unsubscribe();
  }

  moveWishListToCart(xAmount, xData, xPackIndex, xIndex){
    if ( xData.slug === undefined ) {
      xData.slug = xData.product;
    }

    this.store.dispatch( new TryAddOrCreateToCart(
      {
        isPopUp : false,
        data : xData,
        amount : xAmount,
        packIndex : xPackIndex,
        increaseOrCreate : xData.slug in this.cartStore.cartList
      }) );

    this.store.dispatch( new TryDeleteWishList( { wishListSlug : xData.slug, index : xIndex}));
  }



  deleteWishList( xProductSlug, xIndex ) {
    this.store.dispatch( new TryDeleteWishList( { wishListSlug : xProductSlug, index : xIndex}));
  }
}
