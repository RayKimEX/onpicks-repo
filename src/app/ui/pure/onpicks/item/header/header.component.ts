// Angular Core
import {ActivatedRoute, Router} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
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
import {SearchService} from '../../../../../core/service/data-pages/search/search.service';
import {AuthService} from '../../../../../core/service/auth/auth.service';
import {AuthState} from '../../../../../core/store/auth/auth.model';
import {AppState} from '../../../../../core/store/app.reducer';
import {CURRENCY, MENU_MAP, RESPONSIVE_MAP} from '../../../../../app.config';
import {DisplayAlertMessage, RemoveAlertMessage} from '../../../../../core/store/ui/ui.actions';
import {BreakpointObserver, BreakpointState} from '../../../../../../../node_modules/@angular/cdk/layout';
import {TryLogout} from '../../../../../core/store/auth/auth.actions';

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

  scrollForAlert$ = null;


  clearSetTimeout;
  // TODO: 이부분에 대해서 이방식이 맞는지? ngrx로 하려면, 한번더 update를 쳐야 되서 이방식이 아닌거같음 ->
  clearSetTimeoutForAlert;

  firstLoadPreventCount = 0;

  /**mobileZone**/
  mobileAlertTop = '11rem';
  isShowSettingMenu = false;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(APP_BASE_HREF) public region: string,
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject(MENU_MAP) public menuMap,
    @Inject(RESPONSIVE_MAP) public ResponsiveMap,
    private renderer: Renderer2,
    private authService: AuthService,
    private store: Store<AppState>,
    public router: Router,
    private route: ActivatedRoute,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {

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

    console.log('ddd');
    // this.renderer.appendChild(document.body, this.tempDiv);
    // this.renderer.setStyle(this.tempDiv, 'top', '0');
    // this.renderer.setStyle(this.tempDiv, 'position', 'absolute');
    // this.renderer.setStyle(this.tempDiv, 'display', 'block');
    // this.renderer.setStyle(this.tempDiv, 'width', '100%');
    // this.renderer.setStyle(this.tempDiv, 'height', document.body.clientHeight + 'px');
    // this.renderer.setStyle(this.tempDiv, 'z-index', '10');
    // this.renderer.setStyle(this.tempDiv, 'background-color', '#000000');
    // this.renderer.setStyle(this.tempDiv, 'opacity', '0.5');
    this.renderer.setProperty(xInputChecked, 'checked', true);
    this.renderer.setProperty(xMenuToggle, 'checked', true);
    // this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'block');
  }

  showPreparingMessage() {
    this.store.dispatch( new DisplayAlertMessage('준비중입니다'));
  }

  showMenuForMobile( xInputChecked ) {
    console.log(xInputChecked.checked);
    if(xInputChecked.checked) {
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

  logout(xInputChecked) {
    this.store.dispatch(new TryLogout());
    this.renderer.setProperty(xInputChecked, 'checked', false);
    this.renderer.setStyle(this.mobileHamburger.nativeElement, 'display', 'none');
    this.renderer.removeClass(document.body, 'u-open-modal');
    console.log('@@@@@@@@@@@@@@@@remove modal 4');
    location.href = '/shops';
  }

}

