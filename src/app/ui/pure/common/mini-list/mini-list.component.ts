import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, HostListener,
  Inject,
  Input,
  LOCALE_ID,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild, ViewChildren,
} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {select, Store} from '@ngrx/store';
import {TryAddOrCreateToCart, TrySubtractOrDeleteFromCart} from '../../../../core/store/cart/cart.actions';
import {CURRENCY, LOCATION_MAP, RESPONSIVE_MAP} from '../../../../core/global-constant/app.config';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {BreakpointObserver, BreakpointState} from '../../../../../../node_modules/@angular/cdk/layout';

@Component({
  selector: 'ui-mini-list',
  templateUrl: './mini-list.component.html',
  styleUrls: ['./mini-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MiniListComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChildren('itemList') itemList;
  @ViewChild('insertTitle') insertTitle;
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
  isFirstCalcTranslateXWidth = false;
  isFirstBreakPoint = false;

  constructor(
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( APP_BASE_HREF ) public region: string,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    private renderer: Renderer2,
    private store: Store<any>,
    private cd: ChangeDetectorRef,
    private router: Router,
    private breakpointObserver:  BreakpointObserver
  ) {

    this.cartStore$ = this.store.pipe(select(state => state.cart))
      .subscribe(val => {
        this.cartStore = val;
        this.cd.markForCheck();
      });

    this.breakpointObserver
      .observe([this.responsiveMap['fb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isFirstBreakPoint = true;
          // this.cd.markForCheck();
        } else {
          // this.mobileAlertTop = '11rem';
          this.isFirstBreakPoint = false;
        }
      });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
  }
  ngAfterViewChecked() {

    if (this.itemList.first === undefined || this.isFirstCalcTranslateXWidth ){
      return ;
    }

    const computedStyle = getComputedStyle(( this.itemList.first.nativeElement ), null);
    this.translateXWidth =  parseInt(computedStyle.width, 10 ) + parseInt(computedStyle.marginRight, 10);
    this.isFirstCalcTranslateXWidth = true;
  }

  goBrandFilter(xBrand) {
    this.router.navigate(['/shops/search'], { queryParams: { page: 1, ordering: 'most_popular', brand: xBrand}, queryParamsHandling: 'merge'} );
  }

  addToCart(xAmount, xData, xPackIndex) {
    xAmount++;

    xData.product = xData.slug;

    // 만약 카트 아이디가. 카트스토어 카트리스트에 있다면, increase cart를 하고, create cart를 하지 않는다.
    this.store.dispatch(new TryAddOrCreateToCart({
      isPopUp : true,
      data: xData,
      amount: xAmount,
      packIndex: xPackIndex,
      increaseOrCreate: xData.slug in this.cartStore.cartList
    }));
  }

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

  // ngAfterViewInit() {
  //   this.renderer.setProperty( this.insertTitle.nativeElement, 'innerHTML', this.setTitle);
  // }

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
