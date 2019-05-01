import { PDataService } from '../../../../../../core/service/data-pages/p/p-data.service';
import {DeleteProductAndReviewInfo, TryGetProductInfo, TryGetReviewProduct} from '../../store/p.actions';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterEvent} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef, HostListener, Inject, OnDestroy, OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  share,
  shareReplay,
  tap
} from 'rxjs/operators';
import {UiService} from '../../../../../../core/service/ui/ui.service';
import {BreakpointObserver, BreakpointState} from '../../../../../../../../node_modules/@angular/cdk/layout';
import {LOCATION_MAP, RESPONSIVE_MAP} from '../../../../../../core/global-constant/app.config';
import {DisplayAlertMessage, UpdateGlobalKakaoPlusFriendForDetailPage, UpdateGlobalKakaoPlusFriendForNormal, UpdateGlobalKakaoPlusFriendForPurchase} from '../../../../../../core/store/ui/ui.actions';
import {TryAddOrCreateToCart} from '../../../../../../core/store/cart/cart.actions';

@Component({
  selector: 'onpicks-p',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class PIndexComponent implements OnInit, OnDestroy {
  @ViewChild('communicateBox', { read : ElementRef}) communicateBox;

  /** async data **/
  pData$ = null;
  pUI$;
  pUI;
  pPictureReviews$;
  weeklyBest$;

  /****************/
  isFB = false;
  previousYOffset = 0;
  isShowMobileMenu = true;
  isExpendMobileMenu = false;
  contentHeight;

  numberOptionList = {
    list : [
      {
        title : '1',
        value : 1,
      },
      {
        title : '2',
        value : 2,
      },
      {
        title : '3',
        value : 3,
      },
      {
        title : '4',
        value : 4,
      },
      {
        title : '5',
        value : 5,
      },
      {
        title : '6',
        value : 6,
      },
      {
        title : '7',
        value : 7,
      },
      {
        title : '8',
        value : 8,
      },
      {
        title : '9',
        value : 9,
      },
      {
        title : '10',
        value : 10,
      }
    ]
  }

  currentSelectOption = {
    amount : 1,
    slug : ''
  }

  keyListForSlug = [];
  keyMapForSlug = {};

  cartStore$;
  cartStore;

  discountPercent;
  constructor(
    @Inject(LOCATION_MAP) public locationMap: any,
    @Inject(RESPONSIVE_MAP) public responsiveMap,
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef,
    private store: Store<any>,
    private renderer: Renderer2,
    private pDataService: PDataService,
    private route: ActivatedRoute,
    private uiService: UiService,
    private router: Router
  ) {
    this.router.events.subscribe( (event: RouterEvent) => {
      if (event instanceof NavigationStart ) {
        this.store.dispatch(new DeleteProductAndReviewInfo());
      }
      if (event instanceof NavigationEnd ) {
        this.store.dispatch(new TryGetProductInfo(this.route.snapshot.params.id));
      }
    });
    // 글로벌 하게 해야되서 reviews는 갖고옴, reviews component와, communicate-box
    // this.store.dispatch(new TryGetProductInfo(this.route.snapshot.params.id));
    this.pData$ = this.store.pipe(
      select( state => state.p.data),
      tap( (v) => {
        // 해당 페이지에 들어 왔을때, reviews에서, scroll값이 있으면 해당 스크롤로 이동
        // TODO : 좀 가라로 한듯함
        console.log(v);
        const url = this.router.url.split('/');
        if ( url.length > 4 && url[4] === 'reviews') {
          const temp = url[5].substring(url[5].indexOf('?'), url[5].length);
          const splitTemp = temp.split('=');
          window.scrollTo(0, parseInt(splitTemp[1], 10))
          setTimeout( () => window.scrollTo(0, parseInt(splitTemp[1], 10)), 500);
        }
        if ( v !== undefined && v !== null ) {
          this.discountPercent = 100 - Math.round((v.price / v.msrp * 100));
        }
      })
    );

    this.pUI$ = this.store.pipe(
      select( state => state.p.ui)
    ).subscribe( xPUI => {
      this.pUI = xPUI;
      if ( this.pUI.isShowCommunicateBox === true ) {
        this.isShowMobileMenu = false;
      };
    })

    this.cartStore$ = this.store.pipe(select(state => state.cart))
      .subscribe(val => {
        this.cartStore = val;
      });
    this.pPictureReviews$ = this.pDataService.getPictureReviewsData(this.route.snapshot.params.id).pipe( tap( v => console.log(v)));
    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();
  }

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    const delta = window.pageYOffset - this.previousYOffset;
    // console.log(this.router.url);
    if(this.pUI.isShowCommunicateBox === true ){
      this.isShowMobileMenu = false;
      return ;
    };

    if ( delta < -1 && this.isFB) {
      this.isShowMobileMenu = true;
      this.store.dispatch(new UpdateGlobalKakaoPlusFriendForDetailPage());
    } else if ( delta > 1  && this.isFB ) {
      this.isShowMobileMenu = false;
      this.store.dispatch(new UpdateGlobalKakaoPlusFriendForNormal());
    }
    this.previousYOffset = window.pageYOffset;
    // this.previousYOffset = window.pageYOffset;
    // console.log(window.pageYOffset);
  }

  ngOnInit() {
    this.store.dispatch(new UpdateGlobalKakaoPlusFriendForDetailPage());
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height) + 'px';

    this.breakpointObserver
      .observe([this.responsiveMap['desktop']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isFB = true;
          this.cd.markForCheck();
        } else {
          this.isFB = false;
          this.cd.markForCheck();
        }
      });
  }

  expandMobileMenu(){
    this.isExpendMobileMenu = true;

    this.store.dispatch(new UpdateGlobalKakaoPlusFriendForPurchase());
  }

  revertMobileMenu() {
    this.isExpendMobileMenu = false;

    this.store.dispatch(new UpdateGlobalKakaoPlusFriendForDetailPage());
  }

  addToCart(xPackIndex, data) {
    let keyForSlug = '';
    this.keyListForSlug.forEach( (value, index) => {
      if ( (this.keyListForSlug.length - 1) === index ){
        keyForSlug += value;
      } else {
        keyForSlug += value + '_';
      }
    })

    let currentProductSlug = undefined;
    if ( data.attributes.length === 0 ) {
      currentProductSlug = data.slug;
    } else {
      currentProductSlug = this.keyMapForSlug[keyForSlug];
    }


    if ( currentProductSlug === undefined ){
      this.store.dispatch(new DisplayAlertMessage('옵션을 정확히 선택해주세요.'));
    }

    this.store.dispatch(new TryAddOrCreateToCart({
      isPopUp : true,
      productSlug: currentProductSlug,
      amount: this.currentSelectOption.amount,
      packIndex: xPackIndex,
      increaseOrCreate: currentProductSlug in this.cartStore.cartList
    }));
  }

  ngOnDestroy() {
    this.store.dispatch(new UpdateGlobalKakaoPlusFriendForNormal());
    this.store.dispatch(new DeleteProductAndReviewInfo());
    this.cartStore$.unsubscribe();
    this.pUI$.unsubscribe();
  }

}



