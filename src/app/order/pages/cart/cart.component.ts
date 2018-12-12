import {ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {shareReplay, tap} from 'rxjs/operators';
import {LOCATION_MAP} from '../../../app.config';
import {DeleteFromCart} from '../../../core/store/cart/cart.actions';

@Component({
  selector: 'onpicks-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {

  // cartList = [
  //   {
  //     imgSrc : 'https://picsum.photos/112/112?image=180',
  //     title : '알엑스바',
  //     name : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
  //     price : '40,900원',
  //     amount : 0,
  //     deliveryWhere : '뉴저지',
  //     deliveryPrice : '9000원',
  //     deliveryDescription : '뉴저지 단독 배송 상품으로 개별 배송료가 발생합니다.'
  //   },
  //   {
  //     imgSrc : 'https://picsum.photos/112/112?image=180',
  //     title : '알엑스바',
  //     name : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
  //     price : '40,900원',
  //     amount : 10,
  //     deliveryWhere : '뉴저지',
  //     deliveryPrice : '9000원',
  //     deliveryDescription : '뉴저지 단독 배송 상품으로 개별 배송료가 발생합니다.'
  //   },
  //   {
  //     imgSrc : 'https://picsum.photos/112/112?image=180',
  //     title : '알엑스바',
  //     name : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
  //     price : '40,900원',
  //     amount : 10,
  //     deliveryWhere : '뉴저지',
  //     deliveryPrice : '9000원',
  //     deliveryDescription : '뉴저지 단독 배송 상품으로 개별 배송료가 발생합니다.'
  //   },
  //   {
  //     imgSrc : 'https://picsum.photos/112/112?image=180',
  //     title : '알엑스바',
  //     name : '알엑스바 리얼 푸드 프로틴 에너지바 믹스드 베리 52G / RxBar Real Food Protein Bars Mixed Berry 1.83OZ',
  //     price : '40,900원',
  //     amount : 10,
  //     deliveryWhere : '뉴저지',
  //     deliveryPrice : '9000원',
  //     deliveryDescription : '뉴저지 단독 배송 상품으로 개별 배송료가 발생합니다.'
  //   }
  // ]

  cartStore$;


  constructor(
    @Inject(LOCATION_MAP) public locationMap: any,
    private renderer: Renderer2,
    private store: Store<any>,
    //
  ) {
    this.cartStore$ = this.store.pipe(
      select( state => state.cart.cartInfo ),
      shareReplay(1),
      tap( v => {
        console.log(v)
        // v.pack
        // v.free
        // v.pack.forEach( value => {
        //
        //   this.totalShippingFee += (value.subtotal - value.shipping_fee) < value.free_shipping_threshold ? value.shipping_fee : 0;
        //   v.pack.items.forEach( itemValue => {
        //     this.totalMsrpPrice += value.msrp;
        //     this.totalDiscountPrice += (itemValue.msrp - itemValue.sale_price);
        //   });
        // })
        //
        // this.totalPrice = this.totalMsrpPrice + this.totalShippingFee - this.totalDiscountPrice;
      }));
  }

  ngOnInit( ) {
  }

  deleteCart(xProductSlug) {
    this.store.dispatch(new DeleteFromCart({ productSlug : xProductSlug}));
  }

  toggleWishList(item) {

    if ( item.style.display === 'block') {
      this.renderer.setStyle(item, 'display', 'none');
    } else {
      this.renderer.setStyle(item, 'display', 'block');
    }
  }

}
