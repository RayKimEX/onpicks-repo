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
  TryDeleteWishList,
  TrySubtractOrDeleteFromCart
} from '../../../core/store/cart/cart.actions';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UiService} from '../../../core/service/ui/ui.service';
import {DisplayAlertMessage} from '../../../core/store/ui/ui.actions';
import {BehaviorSubject} from 'rxjs';
import {DISPLAY_ALERT_MESSAGE_MAP} from '../../../core/global-constant/app.locale';
import {HEALTH_PRODUCT_CATEGORY_LIST} from '../../../core/global-constant/app.category-database-short';

@Component({
  selector: 'onpicks-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  /* Misscell */
  cartStore;
  lengthCheckForPack = 0;
  lengthCheckForFree = 0;
  objectKeys = Object.keys;

  /* Observable */
  weeklyBest$;
  cartStore$;
  isShowWishlist = false;
  isShowModal = false;

  firstSlugForExceedingHealthyProduct = '';

  constructor(
    // TODO: 나중에 locale정보는 모두 ngrx에 넣어서 처리하기
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
    @Inject( DOMAIN_HOST ) private BASE_URL: string,
    @Inject( HEALTH_PRODUCT_CATEGORY_LIST ) public healthyList: [],
    private renderer: Renderer2,
    private router: Router,
    private store: Store<any>,
    private httpClient: HttpClient,
    private cd: ChangeDetectorRef,
    private uiService: UiService,
  ) {
    this.cartStore$ = this.store.pipe(
      select( state => state.cart ),
      tap( state => this.cartStore = state),
      tap( v => {
        this.lengthCheckForPack = 0;
        if ( v.cartInfo.free.items !== undefined) {
          this.lengthCheckForFree = v.cartInfo.free.items.length;

          const includedLocationList = [];
          let copyList = []

          // 무료 배송상품 구매 시, 건강기능식품 표시
          v.cartInfo.free.items.forEach( (item, index) => {
            // 같은 배송지 끼리 묶어주는 작업
              if ( includedLocationList.includes(item.location.name) ){
                const locationIndex = includedLocationList.indexOf(item.location.name);
                copyList[locationIndex].list.push(item);
              } else {
                const tempList = [];
                tempList.push(item);
                copyList.push({ isHealthy : false, list: tempList});
                includedLocationList.push(item.location.name);
              }

              // 건강기능식품일경우, 가장 첫번째 로우에 isLocationListHeathy true로 설정
              if ( item.isHealthyProduct === true ) {
                if ( this.firstSlugForExceedingHealthyProduct === '') {
                  this.firstSlugForExceedingHealthyProduct = item.product;
                }

                const locationIndex = includedLocationList.indexOf(item.location.name);
                if ( locationIndex >= 0 ) {
                  // healthy product가 하나라도 있으면 첫번째 로우에 true로 설정
                  copyList[locationIndex].isHealthy = true;
                }
              }
            }
          );

          v.cartInfo.free.sortedByLocationList = copyList;
        }

        v.cartInfo.pack.forEach( locationList => {
          this.lengthCheckForPack += locationList.items.length;
          locationList.isHealthy = false;
          locationList.items.forEach( (item, index) => {

            // 건강기능식품일경우, 가장 첫번째 로우에 isLocationListHeathy true로 설정
            if ( item.isHealthyProduct === true ) {
              if ( this.firstSlugForExceedingHealthyProduct === '') {
                this.firstSlugForExceedingHealthyProduct = item.product;
              }
              // healthy product가 하나라도 있으면 첫번째 로우에 true로 설정
              locationList.isHealthy = true;
            }
          });
        });
        this.cd.markForCheck();

      }),
      shareReplay(1)
    );

    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();
  }

  // 단순히 한 컴포넌트에서 다른 컴포넌트로 넘어갈때는 딱히, ngrx를 쓰지 않음.
  // 쓰는것도 의미가 없음 너무 복잡해짐
  setCheckoutList(xCheckoutList) {

    const productArray = [];
    let healthyProductQuantityCnt = 0;

    xCheckoutList.forEach( item => {
      productArray.push(item.product);

      if ( item.isHealthyProduct === true ) {
        healthyProductQuantityCnt += item.quantity;
      }
    });


    // 키트에 하나도 없으면 checkout으로 못가게
    if ( productArray.length === 0 ) { return; }

    if ( healthyProductQuantityCnt > 6 ) {
      window.location.href = window.location.origin + window.location.pathname  + '#' + this.firstSlugForExceedingHealthyProduct;
      this.isShowModal = true;
      return;;
    }

    this.httpClient.post<any>( this.BASE_URL + '/api/cart/checkout/', { products : productArray }).
    subscribe(
      data => {
        this.router.navigate(['/order/checkout']);
      },
      error => {
        if ( error.status === 502 ) {
          this.store.dispatch(new DisplayAlertMessage(this.alertMap['unstable-network'][this.locale]));
        } else if ( error.status === 403 ) {
          // this.router.navigate(['/member/login']);
          console.log(this.BASE_URL);
          console.log(this.BASE_URL.substring(1, this.BASE_URL.length));

          this.router.navigateByUrl('/member/login?return=' + encodeURI(location.href.substring(this.BASE_URL.length + 3, location.href.length)));
          this.store.dispatch(new DisplayAlertMessage(this.alertMap['need-log-in'][this.locale]));

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
      this.isShowWishlist = false;
      this.renderer.setStyle(item, 'display', 'none');
    } else {
      this.isShowWishlist = true;
      this.renderer.setStyle(item, 'display', 'block');
    }
  }

  addToCart(xAmount, xData, xPackIndex) {
    xAmount++;

    console.log(xData);
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
  }

  moveWishListToCart(xAmount, xData, xPackIndex, xIndex) {
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
      }));

    this.store.dispatch( new TryDeleteWishList( { wishListSlug : xData.slug, index : xIndex}));
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



  /* Global Styling */

  getMarginRightByLocale(xLocale) {
    switch (xLocale) {
      case 'ko' :
        return '0.4rem';
      case 'en' :
        return '0.8rem';
      case 'zh' :
        return '0.8rem';
    }
  }

}
