import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ChangeDetectorRef,
  AfterViewInit,
  HostListener,
  Input,
  OnDestroy,
  EventEmitter,
  Output
} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import {
  CURRENCY,
  DOMAIN_HOST,
  RESPONSIVE_MAP
} from '../../../../../core/global-constant/app.config';
import { BehaviorSubject } from 'rxjs';
import { OrderDataService } from '../../../../../core/service/data-pages/order/order-data.service';


@Component({
  selector: 'onpicks-kr-checkout-menu',
  templateUrl: './kr-checkout-menu.component.html',
  styleUrls: ['./kr-checkout-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KrCheckoutMenuComponent implements OnInit, OnDestroy, AfterViewInit {

  @Output() checkoutEmitter = new EventEmitter();
  @Input('data') data;

  checkoutStore$;
  userStore$;
  userStore;

  deliveryStoreData = [];
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
    this.checkoutStore$ = this.orderDataService.getCheckoutData();

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
    this.onScroll(event);
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
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
    this.checkoutEmitter.emit();
  }
}
