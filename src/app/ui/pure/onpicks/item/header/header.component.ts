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
import {CURRENCY, IMAGE_HOST, REGION_ID, RESPONSIVE_MAP} from '../../../../../core/global-constant/app.config';
import {AddClassOpenModal, CloseCategoryNavigator, DisplayAlertMessage, OpenCategoryNavigator, RemoveAlertMessage, RemoveClassOpenModal} from '../../../../../core/store/ui/ui.actions';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';
import {TryLogout} from '../../../../../core/store/auth/auth.actions';
import {DISPLAY_ALERT_MESSAGE_MAP, MENU_MAP} from '../../../../../core/global-constant/app.locale';
import {HideRegionModal, ShowCurrencyModal, ShowRegionModal} from '../../../../../core/store/modal/modal.actions';
import {CATEGORY_CODE_MAP, CATEGORY_MAP} from '../../../../../core/global-constant/app.category-database-long';
import {normalize, schema} from 'normalizr';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
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
  uiOpenCategoryNavigator$;

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
  // TODO: 이부분에 대해서 이방식이 맞는지? ngrx로 하려면, 한번더 update를 쳐야 되서 이방식이 아닌거같음 ->
  clearSetTimeoutForAlert;

  /**mobileZone**/
  mobileAlertTop = '11rem';
  isShowSettingMenu = false;

  activeUrl;
  cartLength = 0;

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( MENU_MAP ) public menuMap,
    @Inject( CATEGORY_MAP )  public categoryMap,
    @Inject( RESPONSIVE_MAP ) public ResponsiveMap,
    @Inject( REGION_ID ) public region: string,
    @Inject( CATEGORY_CODE_MAP ) public categoryCodeMap,
    @Inject( IMAGE_HOST ) public imageHost: string,
    private renderer: Renderer2,
    private authService: AuthService,
    private store: Store<AppState>,
    public router: Router,
    private route: ActivatedRoute,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef,
  ) {
    this.normalizedCategory = this.normalizer(this.categoryMap);

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

    this.uiOpenCategoryNavigator$ = this.store.pipe(select( state => state.ui.isOpenCategoryNavigator ))
      .subscribe( val => {
        console.log(val);
        this.isOpenCategoryNavigator = val;
      });

    this.uiActiveUrl$ =  this.store.pipe(select(state => state.ui.activeUrl))
      .subscribe(val => {
        this.currentUrl = val;

        if ( this.currentUrl.length === 0 || this.currentUrl.length <= 3 || this.currentUrl[2] === 'p' ) { return; }
        if ( this.currentUrl[3] !== this.categoryNavigatedInfo[0].slug ) {
          this.categoryNavigatedInfo.length = 0;
          this.categoryNavigateCurrentDepth = 1;
          this.categoryNavigatedInfo.push({
            depth : 1,
            code : this.categoryCodeMap[this.currentUrl[3]].code,
            slug : this.currentUrl[3]
          });
        }
      });



    this.uiCategoryStore$ = this.store.pipe(select(state => state.ui.currentCategoryList))
      .subscribe(val => {
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

    this.cart$ = this.store.pipe(
      select(state => state.cart)
    ).subscribe( v => {
      this.cartLength = 0;
      if ( v.cartInfo.free.items !== undefined) {
        this.cartLength += v.cartInfo.free.items.length;
      }

      v.cartInfo.pack.forEach( pack => {
        this.cartLength += pack.items.length;
      });

      this.cd.markForCheck();
    });

  }


  ngOnInit() {
    this.tempDiv = this.renderer.createElement('div');
  }

  ngOnDestroy() {
    this.uiActiveUrl$.unsubscribe();
    this.cart$.unsubscribe();
    this.uiStore$.unsubscribe();
    this.uiOpenCategoryNavigator$.unsubscribe();
    this.uiCategoryStore$.unsubscribe();
  }

  search(searchTerms) {
    if (searchTerms === '') { return; }
    // jet에서도 uri encode를 하지 않아서 했다가 다시 지움. 20181210 - ray
    this.router.navigate(   ['/shops/search'], { relativeTo: this.route, queryParams: { term : searchTerms, ordering : 'most_popular', page : 1 } } );
  }

  outMenu(xMenuToggle) {
    this.renderer.removeChild(document.body, this.tempDiv);
    this.renderer.setProperty(xMenuToggle, 'checked', false);
  }

  hoverMenu(xInputChecked, xMenuToggle) {
    this.renderer.setProperty(xMenuToggle, 'checked', true);
  }

  showPreparingMessage() {
    this.store.dispatch( new DisplayAlertMessage(this.alertMap['comming-soon'][this.locale]));
  }

  showMenuForMobile( xInputChecked ) {
    if ( xInputChecked.checked ) {
      this.store.dispatch(new CloseCategoryNavigator());
      this.store.dispatch(new RemoveClassOpenModal());
      this.store.dispatch(new HideRegionModal());
    } else {
      this.store.dispatch(new CloseCategoryNavigator());
      this.store.dispatch(new AddClassOpenModal());
      this.store.dispatch(new HideRegionModal());
    }
  }

  routeForMobile(xUrl, xInputChecked) {
    if ( xInputChecked.checked ) {
      this.store.dispatch(new RemoveClassOpenModal());
      this.renderer.setStyle(this.mobileHamburger.nativeElement, 'display', 'none');
      this.renderer.setProperty(xInputChecked, 'checked', false);
    } else {
      this.store.dispatch(new AddClassOpenModal());
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
      this.store.dispatch(new CloseCategoryNavigator());
      this.store.dispatch(new RemoveClassOpenModal());
    } else {
      this.store.dispatch(new OpenCategoryNavigator());
      this.store.dispatch(new AddClassOpenModal());
    }
  }

  logout( xInputChecked ) {
    this.store.dispatch(new TryLogout());
    this.renderer.setProperty(xInputChecked, 'checked', false);
    this.renderer.setStyle(this.mobileHamburger.nativeElement, 'display', 'none');
    this.store.dispatch(new RemoveClassOpenModal());
    location.href = '/shops';
  }

  showRegionGlobalModal( xMenuToggle ) {
    this.renderer.setProperty(xMenuToggle, 'checked', false);
    this.store.dispatch(new ShowRegionModal());
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

  navigateTo(xMenuToggle, xRoute: string) {
    this.renderer.setProperty(xMenuToggle, 'checked', false);
    this.store.dispatch(new CloseCategoryNavigator());
    this.store.dispatch(new RemoveClassOpenModal());
    this.router.navigate([xRoute]);
  }

  navigateFirstCategory(xSlug){
    this.router.navigate(['/shops/c/' + xSlug]);
    this.categoryNavigatorToggle();
  }

  navigateAllCategory(xSlug, xCanNavigate = true) {

    if ( xCanNavigate ) {
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
    return normalize(data, object);
  }
}

