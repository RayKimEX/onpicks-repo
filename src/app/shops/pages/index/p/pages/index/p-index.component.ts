import { PDataService } from '../../../../../../core/service/data-pages/p/p-data.service';
import {
  DeleteProductAndReviewInfo,
  TryGetProductInfo
} from '../../store/p.actions';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent
} from '@angular/router';
import {select, Store} from '@ngrx/store';
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
  tap
} from 'rxjs/operators';
import { UiService } from '../../../../../../core/service/ui/ui.service';
import { BreakpointObserver, BreakpointState } from '../../../../../../../../node_modules/@angular/cdk/layout';
import { CURRENCY, LOCATION_MAP, RESPONSIVE_MAP } from '../../../../../../core/global-constant/app.config';
import { UpdateGlobalKakaoPlusFriendForDetailPage, UpdateGlobalKakaoPlusFriendForNormal } from '../../../../../../core/store/ui/ui.actions';
import { BehaviorSubject } from 'rxjs';
import { DISPLAY_ALERT_MESSAGE_MAP } from '../../../../../../core/global-constant/app.locale';
import {HEALTH_PRODUCT_CATEGORY_LIST} from '../../../../../../core/global-constant/app.category-database-short';

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
  pPictureReviews$;
  weeklyBest$;
  alsoViewed$;
  routerEvent$;

  /****************/
  isFB = false;
  contentHeight;

  numberOptionList = {
    list : [
    ]
  }

  cartStore$;
  discountPercent;

  constructor(
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) public alertMap,
    @Inject( HEALTH_PRODUCT_CATEGORY_LIST ) private healthList: [],
    private breakpointObserver:  BreakpointObserver,
    private cd: ChangeDetectorRef,
    private store: Store<any>,
    private renderer: Renderer2,
    private pDataService: PDataService,
    private route: ActivatedRoute,
    private uiService: UiService,
    private router: Router
  ) {
    this.routerEvent$ = this.router.events.subscribe( (event: RouterEvent) => {
      if (event instanceof NavigationStart ) {
        this.store.dispatch(new DeleteProductAndReviewInfo());
      }

      if (event instanceof NavigationEnd ) {
        this.store.dispatch(new TryGetProductInfo(this.route.snapshot.params.id));
        this.pPictureReviews$ = this.pDataService.getPictureReviewsData(this.route.snapshot.params.id);
        this.alsoViewed$ = this.uiService.getAlsoViewedGoods(this.route.snapshot.params.id);
      }
    });

    this.pData$ = this.store.pipe(
      select( state => state.p.data),
      tap( (v) => {
        console.log('#######')
        // 해당 페이지에 들어 왔을때, reviews에서, scroll값이 있으면 해당 스크롤로 이동
        // TODO : 좀 가라로 한듯함
        const url = this.router.url.split('/');
        if ( url.length > 4 && url[4] === 'reviews') {
          const temp = url[5].substring(url[5].indexOf('?'), url[5].length);
          const splitTemp = temp.split('=');
          window.scrollTo(0, parseInt(splitTemp[1], 10))
          setTimeout( () => window.scrollTo(0, parseInt(splitTemp[1], 10)), 500);
        }
        if ( v !== undefined && v !== null ) {
          this.discountPercent = 100 - Math.round((v.price / v.msrp * 100));

          const categories = v.category;
          const healthyProductFound = categories.some( (category: {
            code: never;
          }) => this.healthList.includes(category.code));
          if ( healthyProductFound) {
            for ( var i = 1; i <= 6; i ++ ) {
              this.numberOptionList.list.push({ title : i, value : i });
            }
          } else {
            for ( var i = 1; i <= (v.stock_quantity <= 10 ? v.stock_quantity : 10); i ++ ) {
              this.numberOptionList.list.push({ title : i, value : i });
            }
          }

        }
      })
    );

    this.cartStore$ = this.store.pipe(select(state => state.cart));
    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();
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


  ngOnDestroy() {
    this.store.dispatch(new UpdateGlobalKakaoPlusFriendForNormal());
    this.store.dispatch(new DeleteProductAndReviewInfo());
    this.routerEvent$.unsubscribe();
  }

}



