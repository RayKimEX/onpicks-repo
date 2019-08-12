// Angular
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  LOCALE_ID,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent
} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

// Onpicks Component
import {AppState} from './core/store/app.reducer';
import {TryGetAuthUser} from './core/store/auth/auth.actions';
import {GetCategoryAll, UpdateCategory, UpdateUrlActive} from './core/store/ui/ui.actions';
import {UiService} from './core/service/ui/ui.service';
import {TryGetCartInfo, TryGetWishListInfo} from './core/store/cart/cart.actions';
import {CATEGORY_CODE_MAP} from './core/global-constant/app.category-database-long';
import {CURRENCY, REGION_ID, RESPONSIVE_MAP} from './core/global-constant/app.config';
import {HideCurrencyModal, HideRegionModal} from './core/store/modal/modal.actions';
import {PREFERENCE_MAP, TITLE_MAP} from './core/global-constant/app.locale';

// Miscell
import {BehaviorSubject, fromEvent} from 'rxjs';
import {tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {setCookie} from './app.module';

@Component({
  selector: 'onpicks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})


export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('deliveryBox', {read : ElementRef}) deliveryBox;

  title = 'onpicks';
  isCategoryLoaded = false;
  categoryLoadType = '';

  // Obsrevable
  cart$;
  uiState$;
  modalState$;
  scrollForDeliveryBox$ = null;

  //
  clearSetTimeout;
  isDesktopBreakPoint = false;
  isSecondBreakPoint = false;

  // Kakao
  isKakaoSpeachBubble = true;
  globalKakaoPosition = '3rem';

  deltaHeight = 0;
  previousUrl = [];
  activeUrl;

  window = window;

  constructor(
    @Inject(CATEGORY_CODE_MAP) public categoryMap,
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    @Inject(PREFERENCE_MAP) public preferenceMap,
    @Inject(REGION_ID) public region: string,
    @Inject(TITLE_MAP) public titleMap: string,
    @Inject(LOCALE_ID) public locale: string,
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    private titleService: Title,
    private store: Store<AppState>,
    private router: Router,
    private uiService: UiService,
    private renderer: Renderer2,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {
    this.store.dispatch(new TryGetAuthUser());
    this.store.dispatch(new TryGetCartInfo());
    this.store.dispatch(new TryGetWishListInfo());

    this.breakpointObserver
      .observe([this.responsiveMap['sb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSecondBreakPoint = true;
          this.cd.markForCheck();
        } else {
          this.isSecondBreakPoint = false;
          this.cd.markForCheck();
        }
      });

    this.breakpointObserver
      .observe([this.responsiveMap['desktop']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isDesktopBreakPoint = true;
          this.cd.markForCheck();
        } else {
          this.isDesktopBreakPoint = false;
          this.cd.markForCheck();
        }
      });

    this.uiState$ = this.store.pipe(select( 'ui')).subscribe( val => {
      this.isCategoryLoaded = val.currentCategoryList.isLoaded;
      this.categoryLoadType = val.currentCategoryList.type;
      this.globalKakaoPosition = val.globalKakaoPosition;
      this.activeUrl = val.activeUrl;

      if( val.addClassOpenModal === true ) {
        this.renderer.addClass(document.body , 'u-open-modal');
      } else {
        const url = this.router.url.split('/');
        if ( url.length >= 5 && url[4] === 'reviews') {

        } else {
          return this.renderer.removeClass(document.body , 'u-open-modal');
        }
      }
    })

    this.modalState$ = this.store.pipe(select( 'modal'));

    this.cart$ = this.store.pipe(
      select(state => state.cart.cartInfo),
      tap( v => {
        if ( this.deliveryBox === undefined) { return ; }
        // 세번 불리는데 이유는 잘 모르겠음. 일단 세번까지 막음.
        // 그중 한번은 getCartInfo
        // 그중 또 한번은 getWishListInfo

        if ( v.isPopUp === false ) { return ; };
        // 무슨 변경이 있던간에, 항상 보여주고 그다음 주조건 삭제하는 로직.

        if ( this.clearSetTimeout !== undefined) {
          clearTimeout(this.clearSetTimeout);
        }

        this.renderer.setStyle(this.deliveryBox.nativeElement, 'pointer-events', 'auto');
        this.renderer.setStyle(this.deliveryBox.nativeElement, 'opacity', '1');
        if ( window.pageYOffset >= 108 ){
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'position', 'fixed');
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'top', this.isDesktopBreakPoint ? '7.6rem' : '1.6rem');
        } else {
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'position', 'absolute');
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'top', this.isDesktopBreakPoint ? '7.6rem' : '12.4rem');
        }
        this.clearSetTimeout = setTimeout( v => {
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'opacity', '0');
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'pointer-events', 'none');

          if ( this.scrollForDeliveryBox$ != null ) {
            this.scrollForDeliveryBox$.unsubscribe();
            this.scrollForDeliveryBox$ = null;
          }
        }, 3000);

        if ( this.scrollForDeliveryBox$ == null ) {
          this.scrollForDeliveryBox$ = fromEvent( window , 'scroll').subscribe(
            scrollValue => {
              console.log(this.isDesktopBreakPoint);
              if ( window.pageYOffset >= 108 ) {
                this.renderer.setStyle(this.deliveryBox.nativeElement, 'position', 'fixed');
                this.renderer.setStyle(this.deliveryBox.nativeElement, 'top', this.isDesktopBreakPoint ? '7.6rem' : '1.6rem');
              } else {
                this.renderer.setStyle(this.deliveryBox.nativeElement, 'position', 'absolute');
                this.renderer.setStyle(this.deliveryBox.nativeElement, 'top', this.isDesktopBreakPoint ? '7.6rem' : '12.4rem');
              }
            }
          );
        }
      })
    )

    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }

  ngOnDestroy() {
    this.uiState$.unsubscribe();
  }

  ngOnInit() {
    // @ts-ignore
    Kakao.init('338dd28b32fa58b2628dac561e494f5d');
  }

  plusFriendChat() {
    // @ts-ignore
    window.location.href = 'https://pf.kakao.com/_haxhDj';
  }

  goCartEvent(){
    this.renderer.setStyle(this.deliveryBox.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.deliveryBox.nativeElement, 'pointer-events', 'none');

    if ( this.scrollForDeliveryBox$ != null ) {
      this.scrollForDeliveryBox$.unsubscribe();
      this.scrollForDeliveryBox$ = null;
    }

    if ( this.clearSetTimeout !== undefined) {
      clearTimeout(this.clearSetTimeout);
    }
  }

  // GlobalModal

  hideCurrencyModal() {
    this.store.dispatch(new HideCurrencyModal());
  }

  hideRegionModal() {
    this.store.dispatch(new HideRegionModal());
  }

  nonCompareFunction( a, b ) {
    return 0;
  }

  changeRegionPreference(xPreferenceCode) {
    if ( this.region !== xPreferenceCode ) {
      setCookie('onpicks-language', xPreferenceCode === 'us' ? 'en' : 'ko');
      window.location.href = '/' + xPreferenceCode;
    } else {
      this.hideRegionModal();
    }
  }

  changeCurrencyPreference(xPreferenceCode) {
    setCookie('onpicks-currency', xPreferenceCode);

    if ( this.currency.getValue() !== xPreferenceCode ) {
      window.location.reload();
    } else {
      this.hideCurrencyModal();
    }

  }

  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor(event: RouterEvent): void {

    if ( event instanceof NavigationStart ) {
      this.previousUrl = this.router.url.split('/');
    }

    if (event instanceof NavigationEnd) {
      const url = this.router.url.split('/');
      this.store.dispatch(new UpdateUrlActive(url));

      if ( !((this.previousUrl.length > 4 && this.previousUrl[4] === 'reviews') || (url.length > 4 && url[4] === 'reviews'))) {
        window.scrollTo(0, 0);
      }

      // category가 /c/안에 url이 아닐때 return;
      if ( url[2] !== 'c' ) {
        this.titleService.setTitle(this.titleMap['main'][this.locale]);
        return;
      }
      // twoDepth
      // ex) shops/c/pantry/house
      if ( url.length >= 5 ) {
        if ( this.isCategoryLoaded && this.categoryLoadType === url[3] ) {
          this.store.dispatch(
            new UpdateCategory(
              {
                secondSortKey : url[4].indexOf('?') > -1 ? url[4].substring(0, url[4].indexOf('?')) : url[4],
                thirdSortKey:  url[5] === undefined ? 'undefined' : url[5].indexOf('?') > -1 ? url[5].substring(0, url[5].indexOf('?')) : url[5],
                fourthSortKey: url[6] === undefined ? 'undefined' : url[6].indexOf('?') > -1 ? url[6].substring(0, url[6].indexOf('?')) : url[6]
              }
            )
          );
        } else {
          this.store.dispatch(
            new GetCategoryAll(
              {
                data: '',
                type: url[3],
                firstSortKey: this.categoryMap[url[3]].code,
                secondSortKey: url[4].indexOf('?') > -1 ? url[4].substring(0, url[4].indexOf('?')) : url[4],
                thirdSortKey: url[5] === undefined ? 'undefined' : url[5].indexOf('?') > -1 ? url[5].substring(0, url[5].indexOf('?')) : url[5],
                fourthSortKey: url[6] === undefined ? 'undefined' : url[6].indexOf('?') > -1 ? url[6].substring(0, url[6].indexOf('?')) : url[6]
              }
            )
          );
        }
        return ;
      }
    }
  }
}
