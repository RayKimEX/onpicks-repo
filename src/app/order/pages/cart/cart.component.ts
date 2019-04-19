import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  Inject,
  LOCALE_ID,
  Renderer2
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import {share, shareReplay, tap} from 'rxjs/operators';
import {CURRENCY, DOMAIN_HOST, LOCATION_MAP} from '../../../core/global-constant/app.config';
import {
  TryAddOrCreateToCart,
  TryAddToWishList,
  TryDeleteFromCart, TryDeleteWishList,
  TrySubtractOrDeleteFromCart
} from '../../../core/store/cart/cart.actions';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UiService} from '../../../core/service/ui/ui.service';
import {DisplayAlertMessage} from '../../../core/store/ui/ui.actions';
import {BehaviorSubject} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'onpicks-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  cartStore$;
  cartStore;
  lengthCheckForPack = 0;
  lengthCheckForFree = 0;

  objectKeys = Object.keys;


  weeklyBest$;
  constructor(
    // TODO: 나중에 locale정보같은거는 모두 ngrx에 넣어서 처리하기
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DOMAIN_HOST ) private BASE_URL: string,
    private renderer: Renderer2,
    private router: Router,
    private store: Store<any>,
    private httpClient: HttpClient,
    private cd: ChangeDetectorRef,
    private uiService: UiService,
    private titleService: Title
  ) {
    this.titleService.setTitle('온픽스, 건강하고 아름다운 삶을 위한 선택');
    this.cartStore$ = this.store.pipe(
      select( state => state.cart ),
      tap( state => this.cartStore = state),
      tap( v => {
        console.log(v);
        this.lengthCheckForPack = 0;
        if( v.cartInfo.free.items !== undefined) {
          this.lengthCheckForFree = v.cartInfo.free.items.length;
        }

        v.cartInfo.pack.forEach( pack => {
          this.lengthCheckForPack += pack.items.length;
        });

        // this.cd.markForCheck();
      }),
      shareReplay(1)
    );

    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();
  }

  // 단순히 한 컴포넌트에서 다른 컴포넌트로 넘어갈때는 딱히, ngrx를 쓰지 않음.
  // 쓰는것도 의미가 없음 너무 복잡해짐
  setCheckoutList(xCheckoutList) {

    const productArray = [];
    xCheckoutList.forEach( item => {
      productArray.push(item.product);
    });

    this.httpClient.post<any>( this.BASE_URL + '/api/cart/checkout/', { products : productArray }).
    subscribe(
      data => {
        this.router.navigate(['/order/checkout']);
      },
      error => {
        if ( error.status === 502 ) {
          this.store.dispatch(new DisplayAlertMessage('서버에 상태가 불안정합니다.'));
        } else if ( error.status === 403 ) {
          // this.router.navigate(['/member/login']);
          console.log(this.BASE_URL);
          console.log(this.BASE_URL.substring(1, this.BASE_URL.length));

          this.router.navigateByUrl('/member/login?return=' + encodeURI(location.href.substring(this.BASE_URL.length + 3, location.href.length)));
          this.store.dispatch(new DisplayAlertMessage('로그인이 필요합니다.'));

        } else {
          this.store.dispatch(new DisplayAlertMessage('error code : ' + error.status));
        }
      }
    );
  }


  denormalizr ( data ){

    const array = []
    Object.keys(data).forEach( key => {
      array.push(data[key]);
    });

    return array;
  }



  toggleWishList(item) {

    if ( item.style.display === 'block') {
      this.renderer.setStyle(item, 'display', 'none');
    } else {
      this.renderer.setStyle(item, 'display', 'block');
    }
  }

  deleteCart(xProductSlug, xItemIndex, xPackIndex, xType) {
    this.store.dispatch(new TryDeleteFromCart({ productSlug : xProductSlug, itemIndex : xItemIndex, packIndex : xPackIndex, packType : xType}));
  }

  addToCart(xAmount, xProductSlug, xPackIndex) {
    xAmount++;

    // 만약 카트 아이디가. 카트스토어 카트리스트에 있다면, increase cart를 하고, create cart를 하지 않는다.

    this.store.dispatch( new TryAddOrCreateToCart(
      {
        isPopUp : false,
        productSlug : xProductSlug,
        amount : xAmount,
        packIndex : xPackIndex,
        increaseOrCreate : xProductSlug in this.cartStore.cartList
      }) );
  }

  moveWishListToCart(xAmount, xProductSlug, xPackIndex, xIndex) {
    this.store.dispatch( new TryAddOrCreateToCart(
      {
        isPopUp : false,
        productSlug : xProductSlug,
        amount : xAmount,
        packIndex : xPackIndex,
        increaseOrCreate : xProductSlug in this.cartStore.cartList
      }) );

    this.store.dispatch( new TryDeleteWishList( { wishListSlug : xProductSlug, index : xIndex}));
  }

  subtractFromCart(xAmount, xProductSlug, xPackIndex ) {
    xAmount--;
    this.store.dispatch( new TrySubtractOrDeleteFromCart(
      {
        isPopUp : false,
        productSlug : xProductSlug,
        amount : xAmount,
        packIndex : xPackIndex,
        subtractOrDelete : xAmount !== 0 ? true : false
      }));
  }

  addToWishList(xProductSlug, xPackIndex) {
    this.store.dispatch( new TryAddToWishList( { productSlug : xProductSlug, packIndex : xPackIndex }));
  }

  deleteWishList( xWishListSlug, xIndex ) {
    this.store.dispatch( new TryDeleteWishList( { wishListSlug : xWishListSlug, index : xIndex}));
  }

}
