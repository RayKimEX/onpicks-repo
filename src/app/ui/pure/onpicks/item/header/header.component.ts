// Angular Core
import {ActivatedRoute, Router} from '@angular/router';
import {
  ChangeDetectionStrategy,
  AfterViewInit,
  ElementRef,
  Component,
  LOCALE_ID,
  OnDestroy,
  Renderer2,
  ViewChild,
  Inject,
  OnInit, ChangeDetectorRef,
} from '@angular/core';

// NgRX & RxJS
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';
import {shareReplay, tap} from 'rxjs/operators';

// Custom
import {AuthService} from '../../../../../core/service/auth/auth.service';
import {AuthState} from '../../../../../core/store/auth/auth.model';
import {AppState} from '../../../../../core/store/app.reducer';
import {CURRENCY, REGION_ID, RESPONSIVE_MAP} from '../../../../../core/global-constant/app.config';
import {DisplayAlertMessage, RemoveAlertMessage} from '../../../../../core/store/ui/ui.actions';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';
import {TryLogout} from '../../../../../core/store/auth/auth.actions';
import {MENU_MAP} from '../../../../../core/global-constant/app.locale';
import {ShowCurrencyModal} from '../../../../../core/store/modal/modal.actions';
import {CATEGORY_CODE_MAP, CATEGORY_MAP} from '../../../../../core/global-constant/app.category-database-long';
import {normalize, schema} from 'normalizr';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('menu') menuRef;
  @ViewChild('shops') shopsRef;
  @ViewChild('form') form;
  @ViewChild('alertMessage') alertMessage;
  @ViewChild('mobileSearchBox', { read: ElementRef }) mobileSearchBox;
  @ViewChild('mobileToggle') mobileToggle;
  @ViewChild('mobileLogo') mobileLogo;
  @ViewChild('mobileSearchIcon') mobileSearchIcon;
  @ViewChild('mobileIconOuter') mobileIconOuter;
  @ViewChild('mobileHamburger') mobileHamburger;


  tempDiv;
  cart;

  // subscription
  auth$: Observable<AuthState>;
  url$: Observable<any>;
  cart$;
  uiStore$;
  uiCategoryStore$;
  uiActiveUrl$;


  /** mobileCategoryFilterZone**/
  categoryList;
  result;
  previous;
  currentSlug;
  currentCode;
  currentName;
  currentTitle;
  currentUrl;

  /*****************************/
  isOpenCategoryNavigator = false;
  normalizedCategory;
  // categoryDepth = {
  //   1 : {
  //     code : 1000000
  //   }
  // };

  categoryNavigatedInfo = [
    {
      depth : 0,
      code : 0,
      slug : ''
    }
  ]
  categoryNavigateCurrentDepth = 1;

  /*****************************/

  scrollForAlert$ = null;


  clearSetTimeout;
  // TODO: 이부분에 대해서 이방식이 맞는지? ngrx로 하려면, 한번더 update를 쳐야 되서 이방식이 아닌거같음 ->
  clearSetTimeoutForAlert;

  firstLoadPreventCount = 0;

  /**mobileZone**/
  mobileAlertTop = '11rem';
  isShowSettingMenu = false;


  activeUrl$;
  activeUrl;

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( MENU_MAP ) public menuMap,
    @Inject( CATEGORY_MAP )  public categoryMap,
    @Inject( RESPONSIVE_MAP ) public ResponsiveMap,
    @Inject( REGION_ID ) public region: string,
    @Inject( CATEGORY_CODE_MAP ) public categoryCodeMap,
    private renderer: Renderer2,
    private authService: AuthService,
    private store: Store<AppState>,
    public router: Router,
    private route: ActivatedRoute,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef,
  ) {
    this.normalizedCategory = this.normalizer(this.categoryMap);
    console.log(this.normalizedCategory);

    this.breakpointObserver
      .observe([this.ResponsiveMap['desktop']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobileAlertTop = '6rem';
          this.cd.markForCheck();
        } else {
          this.mobileAlertTop = '11rem';
        }
      });

    this.uiActiveUrl$ =  this.store.pipe(select(state => state.ui.activeUrl))
      .subscribe(val => {
        this.currentUrl = val;

        if ( this.currentUrl.length === 0 || this.currentUrl.length <= 3 ) { return; }
        console.log( this.currentUrl);
        console.log( this.categoryCodeMap[this.currentUrl[3]]);
        console.log( this.currentUrl[3]);
        console.log( this.categoryNavigatedInfo[0].slug);
        if ( this.currentUrl[3] !== this.categoryNavigatedInfo[0].slug ) {
          this.categoryNavigatedInfo.length = 0;
          this.categoryNavigateCurrentDepth = 1;
          this.categoryNavigatedInfo.push({
            depth : 1,
            code : this.categoryCodeMap[this.currentUrl[3]].code,
            slug : this.currentUrl[3]
          });
        }

        console.log(this.currentUrl);
      });

    this.uiCategoryStore$ = this.store.pipe(select(state => state.ui.currentCategoryList))
      .subscribe(val => {
        console.log(location.href.split('/'));
        // this.categoryList = val;
        this.categoryList = val.entities;
        this.result = val.result;
        this.previous = val.previous;
        this.currentSlug = val.currentSlug;
        this.currentCode = val.currentCode;
        this.currentName = val.currentName;
        this.currentTitle = val.currentTitle;
      });

    this.uiStore$ = this.store.pipe( select( state => state.ui.alertMessage ))
      .subscribe( updatedMessages => {
        if ( this.alertMessage === undefined ) { return ;};
        if ( updatedMessages.display ) {
          this.renderer.setStyle(this.alertMessage.nativeElement, 'opacity', 1);
          this.renderer.setProperty(this.alertMessage.nativeElement.children[0], 'innerHTML', updatedMessages.message);

          if ( window.pageYOffset >= 110 ) {
            this.renderer.setStyle(this.alertMessage.nativeElement, 'position', 'fixed');
            this.renderer.setStyle(this.alertMessage.nativeElement, 'top', '0');
          } else {
            this.renderer.setStyle(this.alertMessage.nativeElement, 'top', this.mobileAlertTop);
          }

          if ( this.clearSetTimeoutForAlert !== undefined) {
            clearTimeout(this.clearSetTimeoutForAlert);
          }

          this.clearSetTimeoutForAlert = setTimeout( v => {
            this.store.dispatch( new RemoveAlertMessage())
            if ( this.scrollForAlert$ != null ) {
              this.scrollForAlert$.unsubscribe();
              this.scrollForAlert$ = null;
            }
          }, 3000);
        } else {
          this.renderer.setStyle(this.alertMessage.nativeElement, 'opacity', 0);
        }

        if ( this.scrollForAlert$ == null ) {
          this.scrollForAlert$ = fromEvent( window , 'scroll').subscribe(
            scrollValue => {
              if( window.pageYOffset >= 108 ) {
                this.renderer.setStyle(this.alertMessage.nativeElement, 'position', 'fixed');
                this.renderer.setStyle(this.alertMessage.nativeElement, 'top', '0');
              } else {
                this.renderer.setStyle(this.alertMessage.nativeElement, 'position', 'absolute');
                this.renderer.setStyle(this.alertMessage.nativeElement, 'top', this.mobileAlertTop);
              }
            }
          );
        }
      });

    this.auth$ = this.store.pipe(
      select('auth'),
      shareReplay(1)
    );

    this.url$ = this.store.pipe(
      select(state => state.ui.activeUrl),
      shareReplay(1)
    );

    // [ngStyle]="{ display : cartData.isViewCart ? 'block' : 'none'}"
    this.cart$ = this.store.pipe(
      select(state => state.cart.cartInfo)
    );

  }

  ngOnDestroy() {
    this.uiActiveUrl$.unsubscribe();
    // this.cart$.unsubscribe();
  }

  search(searchTerms) {
    if (searchTerms === '') { return; };

    // jet에서도 uri encode를 하지 않아서 했다가 다시 지움. 20181210 - ray
    this.router.navigate(   ['/shops/search'], { relativeTo: this.route, queryParams: { term : searchTerms, ordering : 'most_popular', page : 1 } } );
  }

  ngOnInit() {
    this.tempDiv = this.renderer.createElement('div');
  }


  ngAfterViewInit() {

  }

  outMenu(xMenuToggle) {
    this.renderer.removeChild(document.body, this.tempDiv);
    this.renderer.setProperty(xMenuToggle, 'checked', false);
  }

  hoverMenu(xInputChecked, xMenuToggle) {
    this.renderer.setProperty(xMenuToggle, 'checked', true);
  }

  showPreparingMessage() {
    this.store.dispatch( new DisplayAlertMessage('준비중입니다'));
  }

  showMenuForMobile( xInputChecked ) {
    console.log(xInputChecked.checked);
    if ( xInputChecked.checked ) {
      this.renderer.removeClass(document.body, 'u-open-modal');
    } else {
      this.renderer.addClass(document.body , 'u-open-modal');
    }

    // this.mobileHamburger.
    // console.log(xElement.value);
  }

  routeForDeskTop( xUrl ) {
    this.renderer.removeChild(document.body, this.tempDiv);
    // this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'none');
    // this.router.navigate([xUrl]);
  }

  routeForMobile(xUrl, xInputChecked) {
    console.log(xInputChecked.checked);
    // this.renderer.setAttribute(xInputChecked, 'checked', 'false');
    if(xInputChecked.checked){
      this.renderer.removeClass(document.body, 'u-open-modal');
      console.log('@@@@@@@@@@@@@@@@remove modal 3');
      this.renderer.setStyle(this.mobileHamburger.nativeElement, 'display', 'none');
      this.renderer.setProperty(xInputChecked, 'checked', false);
    } else {
      this.renderer.addClass(document.body, 'u-open-modal');
      this.renderer.setStyle(this.mobileHamburger.nativeElement, 'display', 'block');
      this.renderer.setProperty(xInputChecked, 'checked', true);
    }

    // search-engine crawling을 위해 아래와 같은 기능을 뺌
    this.router.navigate([xUrl]);
  }

  clickMobileSearch() {

    if ( this.mobileSearchBox.nativeElement.style.display === '' || this.mobileSearchBox.nativeElement.style.display === 'none' ) {
      this.renderer.setStyle( this.mobileSearchBox.nativeElement, 'display', 'inline-block');
      this.renderer.setStyle( this.mobileSearchIcon.nativeElement, 'display', 'none');
      this.renderer.setStyle( this.mobileToggle.nativeElement, 'display', 'none');
      this.renderer.setStyle( this.mobileLogo.nativeElement, 'display', 'none');
      this.renderer.setStyle( this.mobileIconOuter.nativeElement, 'position', 'absolute');
      this.renderer.setStyle( this.mobileIconOuter.nativeElement, 'top', '50%');
      this.renderer.setStyle( this.mobileIconOuter.nativeElement, 'transform', 'translateY(-50%)');
      this.renderer.setStyle( this.mobileIconOuter.nativeElement, 'right', '0px');
      this.mobileSearchBox.nativeElement.children[0].children[1].focus();
    } else {
      this.renderer.setStyle( this.mobileSearchIcon.nativeElement, 'display', 'inline-block');
      this.renderer.setStyle( this.mobileSearchBox.nativeElement, 'display', 'none');
      this.renderer.setStyle( this.mobileToggle.nativeElement, 'display', '');
      this.renderer.setStyle( this.mobileLogo.nativeElement, 'display', 'inline-block');
      this.renderer.setStyle( this.mobileSearchBox.nativeElement, 'display', 'none');
      this.renderer.setStyle( this.mobileIconOuter.nativeElement, 'position', 'static');
      this.renderer.setStyle( this.mobileIconOuter.nativeElement, 'top', '');
      this.renderer.setStyle( this.mobileIconOuter.nativeElement, 'transform', '');
      this.renderer.setStyle( this.mobileIconOuter.nativeElement, 'right', '');
    }
  }

  categoryNavigatorToggle() {
    if ( this.isOpenCategoryNavigator ) {
      this.isOpenCategoryNavigator = false;
      this.renderer.removeClass(document.body , 'u-open-modal');
    } else {
      this.isOpenCategoryNavigator = true;
      this.renderer.addClass(document.body , 'u-open-modal');
    }
  }

  logout( xInputChecked ) {
    this.store.dispatch(new TryLogout());
    this.renderer.setProperty(xInputChecked, 'checked', false);
    this.renderer.setStyle(this.mobileHamburger.nativeElement, 'display', 'none');
    this.renderer.removeClass(document.body, 'u-open-modal');
    location.href = '/shops';
  }

  showCurrencyGlobalModal( xMenuToggle ) {
    this.renderer.setProperty(xMenuToggle, 'checked', false);
    this.store.dispatch(new ShowCurrencyModal());
  }

  returnCategory() {
    this.categoryNavigateCurrentDepth--;
  }

  navigateCategory(xItem, xSlug, xCanNavigate) {
    if ( !xCanNavigate ) {
      this.navigateAllCategory(xSlug, xCanNavigate);
      return;
    }

    // console.log(this.categoryNavigatedInfo.length);
    this.categoryNavigateCurrentDepth++;
    if ( this.categoryNavigatedInfo.length >= 3) {
      this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 1] = {
        depth : this.categoryNavigateCurrentDepth,
        code : xItem,
        slug : xSlug,
      };
    } else {
      this.categoryNavigatedInfo
        .push({ depth : this.categoryNavigateCurrentDepth, code : xItem, slug : xSlug });
    }
  }

  goToHome(xMenuToggle){

    this.isOpenCategoryNavigator = false;
    this.renderer.setProperty(xMenuToggle, 'checked', false);
    this.renderer.removeClass(document.body , 'u-open-modal');
    this.router.navigate(['/shops']);
  }

  navigateFirstCategory(xSlug){
    this.router.navigate(['/shops/c/' + xSlug]);
    this.categoryNavigatorToggle();
  }

  navigateAllCategory(xSlug, xCanNavigate = true) {
    // currentUrl[2]가 c일때만 보이므로 3일때는 1depth슬러그를 무조건 불러옴
    console.log(xCanNavigate);

    // secondCategorySelected
    if ( xCanNavigate ){
      if ( this.categoryNavigateCurrentDepth === 2 ) {
          this.router.navigate(['/shops/c/' + this.currentUrl[3] + '/' + xSlug ],
          {relativeTo: this.route});
        this.categoryNavigatorToggle();
      } else if ( this.categoryNavigateCurrentDepth === 3 ) {
        this.router.navigate(
          ['/shops/c/' + this.currentUrl[3] + '/' +
          this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 2].slug + '/' +
          this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 1].slug
          ],
          {relativeTo: this.route});
        this.categoryNavigatorToggle();
      } else if ( this.categoryNavigateCurrentDepth === 4 ) {
        this.router.navigate(
          ['/shops/c/' + this.currentUrl[3] + '/' +
          this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 3].slug + '/' +
          this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 2].slug + '/' +
          this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 1].slug
          ],
          {relativeTo: this.route});
        this.categoryNavigatorToggle();
      }
    } else {
      if ( this.categoryNavigateCurrentDepth === 2 ) {
        console.log(this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 1].slug)
        console.log(this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 2].slug)
        this.router.navigate(
          ['/shops/c/' + this.currentUrl[3] + '/' +
          this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 1].slug + '/' +
          xSlug
          ],
          {relativeTo: this.route});
        this.categoryNavigatorToggle();
      } else if ( this.categoryNavigateCurrentDepth === 3 ) {
        this.router.navigate(
          ['/shops/c/' + this.currentUrl[3] + '/' +
          this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 2].slug + '/' +
          this.categoryNavigatedInfo[this.categoryNavigateCurrentDepth - 1].slug + '/' +
          xSlug
          ],
          {relativeTo: this.route});
        this.categoryNavigatorToggle();
      }
    }
  }

  normalizer ( data ) {
    const slug = new schema.Entity('slug', {

    });

    const fourthCategory = new schema.Entity('4', {

    }, { idAttribute: 'code' });

    const thirdCategory = new schema.Entity('3', {
      children : [fourthCategory]
    }, { idAttribute: 'code' });

    // // // Define your comments schema
    const secondCategory = new schema.Entity( '2', {
      children : [thirdCategory]
    }, { idAttribute: 'code' });

    const firstCategory = new schema.Entity( '1', {
      // idAttribute: () => slug
      children : [secondCategory]
    }, { idAttribute: 'code' });

    const object = new schema.Array(firstCategory);

    console.log('%%%%%%%%%%%%%%');
    console.log(object);
    console.log(data);
    return normalize(data, object);
  }
}

