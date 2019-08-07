import {Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef, AfterViewInit, HostListener, Input, OnDestroy, ElementRef, EventEmitter, Output} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {CURRENCY, DOMAIN_HOST, RESPONSIVE_MAP} from '../../../../../core/global-constant/app.config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, of} from 'rxjs';
import {OrderDataService} from '../../../../../core/service/data-pages/order/order-data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'onpicks-kr-checkout-menu',
  templateUrl: './kr-checkout-menu.component.html',
  styleUrls: ['./kr-checkout-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KrCheckoutMenuComponent implements OnInit, OnDestroy, AfterViewInit {

  @Output() checkoutEmitter = new EventEmitter();
  @Input('data') data;

  formData = {
    'buyer_name': '',
    'buyer_contact': '',
    'full_name': '',
    'street_address_1': '',
    'street_address_2': '',
    'city': '',
    'state': '',
    'country': '',
    'zip_code': '',
    'phone_number': '',
    'shipping_message': '',
    'customs_id_owner': '',
    'customs_id_number': '',
    'payment_method': 'card'
  };
  checkoutStore$;
  userStore$;
  userStore;

  deliveryStoreData = [];

  paymentScript = null;
  isShowDeliveryView = true;
  initialGroup: FormGroup;

  private headerHeight: number;
  private footerHeight: number;
  private windowInnerHeight: number;

  /*********checkout-mobile*******/
  isThirdBreakPoint = false;
  constructor(
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    @Inject(DOMAIN_HOST) private BASE_URL: string,
    private cd: ChangeDetectorRef,
    private httpClient: HttpClient,
    private breakpointObserver:  BreakpointObserver,
    private orderDataService: OrderDataService,
    private store: Store<any>,
  ) {
    this.checkoutStore$ = this.orderDataService.getCheckoutData().pipe(
      tap( v => console.log(v)),
    );

    this.store.select( state => state.ui.deliveryAddress).subscribe(
      deliveryStoreData => {
        this.deliveryStoreData = deliveryStoreData;
        if ( this.deliveryStoreData.length > 0 ) {
          this.isShowDeliveryView = false;
        }
      }
    )

    this.userStore$ = this.store.pipe( select( state => state.auth.user))
      .subscribe( v => {
        this.userStore = v;
        if ( v ===  null ) { return; }
      });

  }

  ngOnInit() {
    this.initialGroup = new FormGroup({
      dummy: new FormControl( null),
    });

    this.breakpointObserver
      .observe([this.responsiveMap['tb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isThirdBreakPoint = false;
          this.cd.markForCheck();
        } else {
          this.isThirdBreakPoint = true;
          this.cd.markForCheck();
        }
      });
  }
  ngOnDestroy() {
    if ( this.userStore$ !== undefined ) {
      this.userStore$.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.windowInnerHeight = window.innerHeight;
    this.footerHeight = (document.querySelector('footer') as HTMLElement).offsetHeight;
    this.headerHeight = (document.querySelector('header') as HTMLElement).offsetHeight;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowInnerHeight = window.innerHeight;
    this.scrollHandler(event);
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (this.isThirdBreakPoint) {
      const checkoutRightMenu = (document.querySelector('.checkout-right__menu') as HTMLElement);
      const bodyHeight = (document.querySelector('body') as HTMLElement).offsetHeight;
      const BREADCRUMB_HEIGHT = 69;

      const scrollTop = event.target.scrollingElement.scrollTop;
      if (scrollTop > this.headerHeight + BREADCRUMB_HEIGHT && scrollTop + this.windowInnerHeight < bodyHeight - this.footerHeight ) {
        checkoutRightMenu.style.top = (scrollTop - this.headerHeight - BREADCRUMB_HEIGHT) + 'px';
      }
    }
  }

  payment() {
    this.checkoutEmitter.emit()
  }
}
