import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, LOCALE_ID, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewChild} from '@angular/core';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import {TryAddOrCreateToCart} from '../../../../../../../../core/store/cart/cart.actions';
import {DisplayAlertMessage} from '../../../../../../../../core/store/ui/ui.actions';
import {CURRENCY, LOCATION_MAP} from '../../../../../../../../core/global-constant/app.config';
import {Router} from '@angular/router';
import {DISPLAY_ALERT_MESSAGE_MAP} from '../../../../../../../../core/global-constant/app.locale';

@Component({
  selector: 'p-menu',
  templateUrl: './p-menu.component.html',
  styleUrls: ['./p-menu.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})


// MUST TODO: p.component.ts에서 store async를 받아서 pmenu에는 단순히 처리만
// TODO : 스크롤 메뉴 관련 // https://www.29cm.co.kr/order/checkout?pay_code=10 참고해서, fix메뉴가 충분히 아래로 내려가면, 그때 내려갈 수 있도록 변경
export class PMenuComponent implements OnDestroy, AfterViewInit {
  @ViewChild('titleHeight') titleHeightElement;
  @ViewChild('pMenu') pMenu: ElementRef;
  @Input('isMobile') isMobile = false;
  @Input('data')
    set data( xData) {

      if ( xData === undefined || xData === null ) { return; };
      this._data = xData;
      for ( var i = 1; i <= (this._data.stock_quantity <= 10 ? this._data.stock_quantity : 10); i ++ ) {
        this.numberOptionList.list.push({ title : i, value : i });
      }
      const ObjectKeysCount =  xData.attributes.length;
      let mergeKey = '';
      let cnt = 0;
      const test = {}
      let depthKey = '';

      /* async를 통해 데이터가 들어올때만 다음으로 넘어감*/
      const result = parseInt(getComputedStyle(this.titleHeightElement.nativeElement).height, 10);
      this.titleHeight = result === 0  ? this.titleHeight : result;

      // @ts-ignore
      const that = this;
      new ResizeSensor(this.titleHeightElement.nativeElement, function() {
        that.titleHeight = parseInt(getComputedStyle(that.titleHeightElement.nativeElement).height, 10);
      });

      setTimeout( () => {
        xData.variants.forEach( variantsItem => {
          xData.attributes.forEach( attributes_key => {
            if ( cnt === ObjectKeysCount - 1 ) {
              mergeKey += variantsItem.attribute_values[attributes_key];
              this.keyMapForSlug[mergeKey] = variantsItem.slug;
              mergeKey = '';

              test[depthKey][variantsItem.attribute_values[attributes_key]] = '';
              depthKey = '';
              cnt = 0;
            } else {
              mergeKey += variantsItem.attribute_values[attributes_key] + '_';

              depthKey = variantsItem.attribute_values[attributes_key];
              test[depthKey] = {
                ...test[depthKey]
              };
              cnt++;
            }
          });
        });

        let depthCnt = 0;
        let listFirstDepthTemp = [];
        let listTwoDepthParentTemp = {};
        let listTwoDepthListTemp = [];
        xData.attributes.forEach( attributes_key => {

          listFirstDepthTemp = [];

          Object.keys(test).forEach( (key, index) => {
            listTwoDepthListTemp = [];
            Object.keys(test[key]).forEach( twoKey => {
              listTwoDepthListTemp.push({title: twoKey, value: twoKey});
            });
            listTwoDepthParentTemp = { title : xData.attributes[1], list: listTwoDepthListTemp.slice()};

            listFirstDepthTemp.push(
              {
                title : key,
                value : key,
                children : listTwoDepthParentTemp,
              }
            );
          });

          depthCnt++;
          this.optionObject = {title: xData.attributes[0], list: listFirstDepthTemp };

        });

        this.cd.markForCheck();
      }, 0);

      this.discountPercent = 100 - Math.round((xData.price / xData.msrp * 100));
    }

  keyMapForSlug = {};
  optionObject = {};
  selectedFirstOptionIndex = null;

  discountPercent;
  _data;

  initialDatesTitle;
  scrollEvent
  PStore$;

  titleHeight;

  numberOptionList = {
    list : [
    ]
  }

  keyListForSlug = [];

  currentSelectOption = {
    amount : 1,
    slug : ''
  }

  cartStore$;
  cartStore;
  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( LOCATION_MAP ) public locationMap: any,
    private renderer: Renderer2,
    private store: Store<any>,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.initialDatesTitle = ['Date1', 'Date2', 'Date3'];
    this.cartStore$ = this.store.pipe(select(state => state.cart))
      .subscribe(val => {
        this.cartStore = val;
      });
  }
  ngOnDestroy() {
    this._data = null;
    if ( this.scrollEvent !== undefined ) {
      this.scrollEvent.unsubscribe();
    }

    if ( this.PStore$ !== undefined ) {
      this.PStore$.unsubscribe();
    }

    if ( this.cartStore$ !== undefined) {
      this.cartStore$.unsubscribe();
    }
  }

  goBrandFilter(xBrand) {
    this.router.navigate(['/shops/search'], { queryParams: { page: 1, ordering: 'most_popular', brand: xBrand}, queryParamsHandling: 'merge'} );
  }

  optionSelect(xValue, xIndex) {
    this.keyListForSlug[xIndex] = xValue.value;

    if ( xIndex === 0 ) {
      this.selectedFirstOptionIndex = xValue.index;
    }
  }

  amountSelect(xValue ) {
    this.currentSelectOption.amount = xValue.value;
  }

  addToCart(xPackIndex) {
    let keyForSlug = '';
    this.keyListForSlug.forEach( (value, index) => {
      if ( (this.keyListForSlug.length - 1) === index ){
        keyForSlug += value;
      } else {
        keyForSlug += value + '_';
      }
    })

    let currentProductSlug = undefined;
    if ( this._data.attributes.length === 0 ) {
      currentProductSlug = this._data.slug;
    } else {
      currentProductSlug = this.keyMapForSlug[keyForSlug];
    }

    if ( currentProductSlug === undefined ){
      this.store.dispatch(new DisplayAlertMessage(this.alertMap['select-option'][this.locale]));
    }

    this.store.dispatch(new TryAddOrCreateToCart({
      isPopUp : true,
      data: this._data,
      amount: this.currentSelectOption.amount,
      packIndex: xPackIndex,
      increaseOrCreate: this._data.slug in this.cartStore.cartList
    }));
  }

  ngAfterViewInit() {

    if (!this.isMobile) {
      this.scrollEvent = fromEvent(window, 'scroll');
      this.PStore$ = this.store.pipe(select(state => state['p']['ui']));
      let setStatus = '';
      let menuTopValue: { menuPosition };
      this.PStore$ = this.PStore$.subscribe((val: { menuPosition }) => {
        menuTopValue = val;

        console.log(val);
        // absolute
        if (window.pageYOffset >= (menuTopValue.menuPosition - this.titleHeight) - 32) {
          this.renderer.setStyle(this.pMenu.nativeElement, 'position', 'absolute');
          this.renderer.setStyle(this.pMenu.nativeElement, 'z-index', '1');
          this.renderer.setStyle(this.pMenu.nativeElement, 'top', (menuTopValue.menuPosition - this.titleHeight) * 0.1 + 'rem');
        }

        this.cd.markForCheck();
      });
      this.scrollEvent = this.scrollEvent.subscribe(val => {
        if (window.pageYOffset >= 172) {
          if (window.pageYOffset >= (menuTopValue.menuPosition - this.titleHeight) - 32) {
            if (setStatus === 'absolute') {
              return;
            }
            setStatus = 'absolute';
            this.renderer.setStyle(this.pMenu.nativeElement, 'position', 'absolute');
            this.renderer.setStyle(this.pMenu.nativeElement, 'z-index', '1');
            this.renderer.setStyle(this.pMenu.nativeElement, 'top', (menuTopValue.menuPosition - this.titleHeight) * 0.1 + 'rem');
          } else {
            if (setStatus === 'fixed') {
              return;
            }
            setStatus = 'fixed';
            this.renderer.setStyle(this.pMenu.nativeElement, 'position', 'fixed');
            this.renderer.setStyle(this.pMenu.nativeElement, 'z-index', '1');
            this.renderer.setStyle(this.pMenu.nativeElement, 'top', '32px');
          }
        } else {
          if (setStatus === '') {
            return;
          }
          setStatus = '';
          this.renderer.setStyle(this.pMenu.nativeElement, 'position', 'absolute');
          this.renderer.setStyle(this.pMenu.nativeElement, 'z-index', '1');
          this.renderer.setStyle(this.pMenu.nativeElement, 'top', 'auto');
        }

        this.cd.markForCheck();
      });
    }
  }

  shareProductDetail() {
    const const_url = location.href;

    // Create a dummy input to copy the string array inside it
    const dummy = document.createElement('input');

    // Add it to the document
    document.body.appendChild(dummy);

    // Output the array into it
    dummy.value = const_url;

    // Select it
    dummy.select();

    // Copy its contents
    document.execCommand('copy');

    // Remove it as its not needed anymore
    document.body.removeChild(dummy);
    this.store.dispatch( new DisplayAlertMessage(this.alertMap['link-copied'][this.locale]));
  }
}
