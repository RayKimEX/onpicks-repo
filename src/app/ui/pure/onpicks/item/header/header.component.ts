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
  OnInit,
} from '@angular/core';

// NgRX & RxJS
import {select, Store} from '@ngrx/store';
import {fromEvent, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

// Custom
import {SearchService} from '../../../../../core/service/data-pages/search/search.service';
import {AuthService} from '../../../../../core/service/auth/auth.service';
import {AuthState} from '../../../../../core/store/auth/auth.model';
import {AppState} from '../../../../../core/store/app.reducer';
import {CURRENCY} from '../../../../../app.config';

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
  @ViewChild('deliveryBox', {read : ElementRef}) deliveryBox;

  tempDiv;

  cart;

  // subscription
  auth$: Observable<AuthState>;
  url$: Observable<any>;
  cart$;
  scrollForDeliveryBox$ = null;

  clearSetTimeout;
  // TODO: 이부분에 대해서 이방식이 맞는지? ngrx로 하려면, 한번더 update를 쳐야 되서 이방식이 아닌거같음 ->

  firstLoadPreventCount = 0;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(APP_BASE_HREF) public region: string,
    @Inject(CURRENCY) public currency: string,
    private renderer: Renderer2,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,

  ) {
    this.auth$ = this.store.pipe(
      select('auth')
    );
    this.url$ = this.store.pipe(
      select(state => state.ui.activeUrl)
    );
    // [ngStyle]="{ display : cartData.isViewCart ? 'block' : 'none'}"
    this.cart$ = this.store.pipe(
      select(state => state.cart),
      tap( v => {
        if ( this.deliveryBox === undefined) { return ; }
        // 두번까지 막고
        if ( this.firstLoadPreventCount <= 1 ) {
          this.firstLoadPreventCount ++;
          return;
        }


        // 무슨 변경이 있던간에, 항상 딱 보여주고 그다음 ㅁ주조건 삭제하는 로직.
        // TODO : 처음 로딩 할때 뜨는것만 처리하면 될듯.

        if ( this.clearSetTimeout !== undefined) {
          clearTimeout(this.clearSetTimeout);
        }

        this.renderer.setStyle(this.deliveryBox.nativeElement, 'display', 'block');
        if ( window.pageYOffset >= 108 ){
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'position', 'fixed');
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'top', '1.6rem');
        } else {
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'position', 'absolute');
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'top', '12.4rem');
        }
        this.clearSetTimeout = setTimeout( v => {
          this.renderer.setStyle(this.deliveryBox.nativeElement, 'display', 'none');

          if ( this.scrollForDeliveryBox$ != null ) {
            console.log('unsubscrdibe!!')
            this.scrollForDeliveryBox$.unsubscribe();
            this.scrollForDeliveryBox$ = null;
          }

        }, 3000);

        if ( this.scrollForDeliveryBox$ == null ) {
          console.log('i`m scroll!!' );
          this.scrollForDeliveryBox$ = fromEvent( window , 'scroll').subscribe(
            scrollValue => {
              if( window.pageYOffset >= 108 ){
                this.renderer.setStyle(this.deliveryBox.nativeElement, 'position', 'fixed');
                this.renderer.setStyle(this.deliveryBox.nativeElement, 'top', '1.6rem');
              }else {
                this.renderer.setStyle(this.deliveryBox.nativeElement, 'position', 'absolute');
                this.renderer.setStyle(this.deliveryBox.nativeElement, 'top', '12.4rem');
              }
            }
          );
        }

      })
    );

  }

  ngOnDestroy() {
    // this.cart$.unsubscribe();
  }

  search(searchTerms) {
    if (searchTerms === '') { return; };

    // jet에서도 uri encode를 하지 않아서 했다가 다시 지움. 20181210 - ray
    this.router.navigate(   ['/shops/search'], { relativeTo: this.route, queryParams: { term : searchTerms } } );
  }

  ngOnInit() {
    this.tempDiv = this.renderer.createElement('div');
  }


  ngAfterViewInit() {

  }

  outMenu() {
    this.renderer.removeChild(document.body, this.tempDiv);
    this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'none');
  }

  hoverMenu() {

    this.renderer.appendChild(document.body, this.tempDiv);
    this.renderer.setStyle(this.tempDiv, 'top', '0');
    this.renderer.setStyle(this.tempDiv, 'position', 'absolute');
    this.renderer.setStyle(this.tempDiv, 'display', 'block');
    this.renderer.setStyle(this.tempDiv, 'width', '100%');
    this.renderer.setStyle(this.tempDiv, 'height', document.body.clientHeight + 'px');
    this.renderer.setStyle(this.tempDiv, 'z-index', '10');
    this.renderer.setStyle(this.tempDiv, 'background-color', '#000000');
    this.renderer.setStyle(this.tempDiv, 'opacity', '0.5');
    this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'block');
  }

}



