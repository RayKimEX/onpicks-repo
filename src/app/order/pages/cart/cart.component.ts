import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  LOCALE_ID,
  Renderer2
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import {share, shareReplay, tap} from 'rxjs/operators';
import {DOMAIN_HOST, LOCATION_MAP} from '../../../app.config';
import {TryAddOrCreateToCart, TryDeleteFromCart, TrySubtractOrDeleteFromCart} from '../../../core/store/cart/cart.actions';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'onpicks-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  cartStore$;
  cartStore;


  constructor(
    // TODO: 나중에 locale정보같은거는 모두 ngrx에 넣어서 처리하기
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject(LOCALE_ID) public locale: string,
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private renderer: Renderer2,
    private router: Router,
    private store: Store<any>,
    private httpClient: HttpClient
  ) {
    this.cartStore$ = this.store.pipe(
      select( state => state.cart ),
      tap( state => this.cartStore = state),
      tap( v => {
        console.log('in tap!!!')
        console.log(v.cartInfo);
      }),
      shareReplay(1)
    );
  }

  // 단순히 한 컴포넌트에서 다른 컴포넌트로 넘어갈때는 딱히, ngrx를 쓰지 않음.
  // 쓰는것도 의미가 없음 너무 복잡해짐
  setCheckoutList(xCheckoutList) {

    const productArray = [];
    xCheckoutList.forEach( item => {
      productArray.push(item.product);
    });

    console.log(productArray);


    this.httpClient.post<any>( this.BASE_URL + '/api/cart/checkout/', { products : productArray }).
    subscribe(
      data => {
        console.log('i`m succeed!');
        this.router.navigate(['/order/checkout']);
      },
      error => {
        console.log('i`m failed');
        console.log(error);
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

  deleteCart(xProductSlug) {

    this.store.dispatch(new TryDeleteFromCart({ productSlug : xProductSlug}));

  }

  toggleWishList(item) {

    if ( item.style.display === 'block') {
      this.renderer.setStyle(item, 'display', 'none');
    } else {
      this.renderer.setStyle(item, 'display', 'block');
    }
  }

  addToCart(xAmount, xProductSlug) {
    xAmount++;

    // 만약 카트 아이디가. 카트스토어 카트리스트에 있다면, increase cart를 하고, create cart를 하지 않는다.
    //
    this.store.dispatch( new TryAddOrCreateToCart( { productSlug : xProductSlug, amount : xAmount, increaseOrCreate : xProductSlug in this.cartStore.cartList }) );
  }

  subtractFromCart(xAmount, xProductSlug) {
    xAmount--;
    this.store.dispatch( new TrySubtractOrDeleteFromCart( { productSlug : xProductSlug, amount : xAmount, subtractOrDelete : xAmount !== 0 ? true : false }) );
  }
}
