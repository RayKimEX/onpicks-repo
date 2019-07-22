import {Component, OnInit, ChangeDetectionStrategy, ViewChild, Input, Inject, Renderer2, ChangeDetectorRef, LOCALE_ID, ViewChildren, HostListener} from '@angular/core';
import {CURRENCY, LOCATION_MAP} from '../../../../../core/global-constant/app.config';
import {BehaviorSubject} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {APP_BASE_HREF} from '@angular/common';
import {TryAddOrCreateToCart, TrySubtractOrDeleteFromCart} from '../../../../../core/store/cart/cart.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'onpicks-trending-reviews',
  templateUrl: './trending-reviews.component.html',
  styleUrls: ['./trending-reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TrendingReviewsComponent implements OnInit {

  @ViewChild('insertTitle') insertTitle;
  @ViewChildren('itemList') itemList;
  @ViewChild('container') container;
  @Input('carouselLength') carouselLength = 4;
  @Input('setTitle') setTitle;
  @Input('infoList') infoList;
  @Input('mobileType') mobileType = 'half';
  // TODO : 보이지 않는 부분에 대해서 img display : none 하는식으로, 메모리 최적화

  imageIndex = 0;
  pressedPrev = false;

  cartStore$;
  cartStore;

  translateXWidth = 288;
  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    private renderer: Renderer2,
    private store: Store<any>,
    private cd: ChangeDetectorRef,
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject(LOCALE_ID) public locale: string,
    @Inject(APP_BASE_HREF) public region: string,
    private router: Router,
  ) {
    this.cartStore$ = this.store.pipe(select(state => state.cart))
      .subscribe(val => {
        this.cartStore = val;
        this.cd.markForCheck();
      });
  }



  // addToCart(xAmount, xProductSlug, xPackIndex) {
  //
  //   xAmount++;
  //   // 만약 카트 아이디가. 카트스토어 카트리스트에 있다면, increase cart를 하고, create cart를 하지 않는다.
  //   this.store.dispatch(new TryAddOrCreateToCart({
  //     isPopUp : true,
  //     productSlug: xProductSlug,
  //     amount: xAmount,
  //     packIndex: xPackIndex,
  //     increaseOrCreate: xProductSlug in this.cartStore.cartList
  //   }));
  // }

  subtractFromCart(xAmount, xProductSlug, xPackIndex) {
    xAmount--;
    this.store.dispatch(new TrySubtractOrDeleteFromCart({
      isPopUp : true,
      productSlug: xProductSlug,
      amount: xAmount,
      packIndex: xPackIndex,
      subtractOrDelete: xAmount !== 0 ? true : false
    }));
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    if ( this.cartStore$ !== undefined ) {
      this.cartStore$.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if ( this.itemList.length !== 0 ) {
      const computedStyle = getComputedStyle((this.itemList.first.nativeElement), null);
      this.translateXWidth = parseInt(computedStyle.width, 10) + parseInt(computedStyle.marginRight, 10);
    }
  }

  goBrandFilter(xBrand){
    this.router.navigate(['/shops/search'], { queryParams: { page: 1, ordering: 'most_popular', brand: xBrand}, queryParamsHandling: 'merge'} );
  }

  ngAfterViewInit() {
    this.renderer.setProperty( this.insertTitle.nativeElement, 'innerHTML', this.setTitle);
  }

  nextButton() {
    this.pressedPrev = false;
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * this.translateXWidth + 'px)');
  }

  prevButton() {
    this.pressedPrev = true;
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * this.translateXWidth + 'px)');
  }

  round(float) {
    return Math.round(float);
  }
}
