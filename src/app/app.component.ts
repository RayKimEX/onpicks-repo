import {AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Inject, LOCALE_ID, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from './core/store/app.reducer';
import {TryGetAuthUser} from './core/store/auth/auth.actions';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';
import {GetCategoryAll, UpdateCategory, UpdateUrlActive} from './core/store/ui/ui.actions';
import {UiService} from './core/service/ui/ui.service';
import {TryGetCartInfo, TryGetWishListInfo} from './core/store/cart/cart.actions';
import {CATEGORY_CODE_MAP} from './app.database';
import {tap} from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '../../node_modules/@angular/cdk/layout';
import {RESPONSIVE_MAP} from './app.config';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'onpicks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})


export class AppComponent implements OnInit, OnDestroy, AfterViewInit, DoCheck {
  @ViewChild('deliveryBox', {read : ElementRef}) deliveryBox;
  title = 'onpicks';
  isCategoryLoaded = false;
  categoryLoadType = '';


  scrollForDeliveryBox$ = null;
  cart$;
  uiState$;

  clearSetTimeout;
  isDesktopBreakPoint = false;

  deltaHeight = 0;

  previousUrl = [];

  constructor(
    @Inject(CATEGORY_CODE_MAP) public categoryMap,
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    @Inject(LOCALE_ID) public locale: string,
    private store: Store<AppState>,
    private router: Router,
    private uiService: UiService,
    private renderer: Renderer2,
    private breakpointObserver:  BreakpointObserver,
  ) {
    this.store.dispatch(new TryGetAuthUser());
    this.store.dispatch(new TryGetCartInfo());
    this.store.dispatch(new TryGetWishListInfo());

    this.breakpointObserver
      .observe([this.responsiveMap['desktop']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isDesktopBreakPoint = true;
          // this.cd.markForCheck();
        } else {
          // this.mobileAlertTop = '11rem';
          this.isDesktopBreakPoint = false;
        }
      });

    this.uiState$ = this.store.pipe(select( 'ui')).subscribe( val => {
      this.isCategoryLoaded = val.currentCategoryList.isLoaded;
      this.categoryLoadType = val.currentCategoryList.type;
    })

    this.cart$ = this.store.pipe(
      select(state => state.cart.cartInfo),
      tap( v => {
        console.log(v);
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

  ngDoCheck() {

  }
  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor(event: RouterEvent): void {

    if ( event instanceof NavigationStart ){
      this.previousUrl = this.router.url.split('/');
    }

    if (event instanceof NavigationEnd) {

      const url = this.router.url.split('/');
      const slug =  url[url.length - 1];

      this.store.dispatch(new UpdateUrlActive(url));

      if ( !((this.previousUrl.length > 4 && this.previousUrl[4] === 'reviews') || (url.length > 4 && url[4] === 'reviews'))) {
        window.scrollTo(0, 0);
      } else {

      }

      // category가 /c/안에 url이 아닐때 return;
      if ( url[2] !== 'c' ) { return; };

      // twoDepth
      // example : shops/c/pantry/house
      if ( url.length >= 5 ) {
        // console.log(url[4].indexOf('?') > -1 ? url[4].substring(0, url[4].indexOf('?')) : url[4]);
        // console.log(url[5].indexOf('?') > -1 ? url[5].substring(0, url[5].indexOf('?')) : url[5]);
        // console.log(url[6].indexOf('?') > -1 ? url[6].substring(0, url[6].indexOf('?')) : url[6]);
        if ( this.isCategoryLoaded && this.categoryLoadType === url[3] ) {
          // this.store.dispatch(new UpdateCategory({ secondSortKey :  url[4] }));
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

          // console.log(url[5].indexOf('?') > -1 ? url[5].substring(0, url[5].indexOf('?')) : url[5]);
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

    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      // this._hideSpinner()
    }

    if (event instanceof NavigationError) {
      // this._hideSpinner()
    }
  }

  ngOnDestroy() {
    this.uiState$.unsubscribe();
  }

  ngOnInit() {
    // TODO : 해당 아래코드를 AppComponent OnInit에 하지 말고, App.Module의 FactoryProvider를 통해 가능한지 ?

    if ( this.locale !== 'ko' ) {
      require( 'style-loader!./../assets/scss/typography/typography.ko.scss');
    } else {
      require( 'style-loader!./../assets/scss/typography/typography.en.scss');
    }
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

  ngAfterViewInit() {

  }
}





