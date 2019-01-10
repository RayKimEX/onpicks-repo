import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  Inject,
  Input,
  LOCALE_ID,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {AppState} from '../../../../core/store/app.reducer';
import {select, Store} from '@ngrx/store';
import {TryAddOrCreateToCart, TrySubtractOrDeleteFromCart} from '../../../../core/store/cart/cart.actions';
import {LOCATION_MAP} from '../../../../app.config';

@Component({
  selector: 'ui-mini-list',
  templateUrl: './mini-list.component.html',
  styleUrls: ['./mini-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class MiniListComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('insertTitle') insertTitle;
  @ViewChild('container') container;
  @Input('carouselLength') carouselLength = 4;
  @Input('setTitle') setTitle;
  @Input('infoList') infoList;

  // TODO : 보이지 않는 부분에 대해서 img display : none 하는식으로, 메모리 최적화

  imageIndex = 0;
  pressedPrev = false;

  cartStore$;
  cartStore;

  constructor(
    private renderer: Renderer2,
    private store: Store<any>,
    private cd: ChangeDetectorRef,
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject(LOCALE_ID) public locale: string,
    @Inject(APP_BASE_HREF) public region: string,
  ) {
    this.cartStore$ = this.store.pipe(select(state => state.cart))
      .subscribe(val => {
        this.cartStore = val;
        this.cd.markForCheck();
      });
  }



  addToCart(xAmount, xProductSlug, xPackIndex) {

    xAmount++;
    // 만약 카트 아이디가. 카트스토어 카트리스트에 있다면, increase cart를 하고, create cart를 하지 않는다.
    this.store.dispatch(new TryAddOrCreateToCart({
      isPopUp : true,
      productSlug: xProductSlug,
      amount: xAmount,
      packIndex: xPackIndex,
      increaseOrCreate: xProductSlug in this.cartStore.cartList
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

  ngAfterViewInit() {
    this.renderer.setProperty( this.insertTitle.nativeElement, 'innerHTML', this.setTitle);
  }

  nextButton() {
    this.pressedPrev = false;
    this.imageIndex++;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * 288 + 'px)');

  }

  prevButton() {
    this.pressedPrev = true;
    this.imageIndex--;
    this.renderer.setStyle(this.container.nativeElement, 'transform', 'translateX(' + (-this.imageIndex) * 288 + 'px)');
  }
  round(float) {

    return Math.round(float);
  }
}
