import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, HostListener, Inject,
  LOCALE_ID,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  TryAddOrCreateToCart,
  TrySubtractOrDeleteFromCart
} from '../../../core/store/cart/cart.actions';
import {SearchService} from '../../../core/service/data-pages/search/search.service';
import {CURRENCY, LOCATION_MAP, RESPONSIVE_MAP} from '../../../core/global-constant/app.config';
import {UiService} from '../../../core/service/ui/ui.service';
import {normalize, schema} from 'normalizr';
import {DisplayAlertMessage} from '../../../core/store/ui/ui.actions';
import {BehaviorSubject, combineLatest, merge, pipe, Subject} from 'rxjs';
import {CATEGORY_CODE_MAP} from '../../../core/global-constant/app.category-database-long';
import {BreakpointObserver, BreakpointState} from '../../../../../node_modules/@angular/cdk/layout';
import {Title} from '@angular/platform-browser';
import {DISPLAY_ALERT_MESSAGE_MAP} from '../../../core/global-constant/app.locale';
import {switchMap, tap} from 'rxjs/operators';
import {SearchCategoryService} from './services/search-category.service';
@Component({
  selector: 'emitter-search-navigator',
  templateUrl: './search-navigator.component.html',
  styleUrls: ['./search-navigator.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class SearchNavigatorComponent implements OnInit, OnDestroy {

  objectKeys = Object.keys;
  isArray = Array.isArray;


  locationList;
  brandList;
  valueList;
  infoList;
  filters;

  /** currentState **/
  currentSortSlug = 'most_popular';

  currentTitle;
  currentName = '';
  currentParamList = {};
  contentHeight;
  categoryList;

  imageIndex = 0;

  /******* pagination ******/
  totalCount;
  totalPage;

  totalPageArray = [];
  maxRow = 36;

  currentList = [];
  currentPage = 1;
  currentUrl = '';

  searchState = '';
  /******* infinite scroll ******/
  isLoading = false;


  /***** filter modal For Mobile ****/
  isShowMobileFilter = false;
  mobileFilterState = 'menu';
  isMobile = false;

  /******* subscribe ******/
  cartStore$;
  queryParams$;
  totalSearchData$;
  categorySearchData$;

  totalSearchRequest$ = new Subject();
  categorySearchReqeust$ = new Subject();
  routerEvent$;

  // subscribe ``value``
  queryParams = {term: '', brand: [], value: [], location: []};
  cartStore;

  weeklyBest$;

  brandListForCheck = {};
  valueListForCheck = {};
  locationListForCheck = {};
  uiStore$
  sortList = [
    {
      title: {
        ko : '인기순',
        en : 'Popular'
      },
      value: 'most_popular'
    },
    {
      title: {
        ko : '리뷰 많은순',
        en : 'Most Reviews'
      },
      value: 'most_reviewed'
    },
    {
      title: {
        ko : '평점순',
        en : 'Most Ratings'
      },
      value: 'top_rated'
    },
    {
      title: {
        ko : '가격 높은순',
        en : 'High Price'
      },
      value: 'price_high'
    },
    {
      title: {
        ko : '가격 낮은순',
        en : 'Low Price'
      },
      value: 'price_low'
    }
  ];

  sortMap = {
    'most_popular' : {
      ko : '인기순',
      en : 'Popular'
    },
    'most_reviewed' : {
      ko : '리뷰 많은순',
      en : 'Most Reviews'
    },
    'top_rated' : {
      ko : '평점순',
      en : 'Most Ratings'
    },
    'price_high' : {
      ko : '가격 높은순',
      en : ''
    },
    'price_low' : {
      ko : '가격 낮은순',
      en : ''
    }
  };
  constructor(
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject( CATEGORY_CODE_MAP)  private categoryMap,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
    private uiService: UiService,
    private renderer: Renderer2,
    private store: Store<any>,
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private cd: ChangeDetectorRef,
    private searchService: SearchService,
    private searchCategoryService: SearchCategoryService,
    private breakpointObserver:  BreakpointObserver,

  ) {
    this.breakpointObserver
      .observe([this.responsiveMap['tb']])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
          this.cd.markForCheck();
        } else {
          this.isMobile = false;
          this.cd.markForCheck();
        }
      });

    this.uiStore$ = this.store.pipe(select(state => state.ui.currentCategoryList))
      .subscribe(val => {
        // this.categoryList = val;
        searchCategoryService.normalizedCategoryInfoList = val.entities;
        searchCategoryService.normalizedCategoryCodeList = val.result;
        searchCategoryService.previous = val.previous;
        searchCategoryService.currentSlug = val.currentSlug;
        searchCategoryService.currentCode = val.currentCode;
        searchCategoryService.currentCategoryCode = val.currentCode;

        searchCategoryService.currentName = val.currentName;
        searchCategoryService.currentTitle = val.currentTitle;
        console.log('@@@@@@@#############');
        console.log(searchCategoryService.normalizedCategoryInfoList);
        console.log(searchCategoryService.normalizedCategoryCodeList);
        if ( searchCategoryService.currentName !== undefined ) {
          searchCategoryService.titleService.setTitle(searchCategoryService.currentName[this.locale]);
        }
      });


    this.cartStore$ = this.store.pipe(select(state => state.cart))
      .subscribe(val => {
        this.cartStore = val;
        this.cd.markForCheck();
      });

    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();

    this.totalSearchData$ = this.totalSearchRequest$.pipe(
      switchMap((param) => {
        return this.searchService.search(param);
      }),
    ).subscribe(_infoList => {
      /* async 데이터가 들어오는데, null이라면 return을 해줌 */
      if (_infoList != null) {

        this.filters = _infoList.filters;
        this.valueList = _infoList.aggregation.values;
        this.locationList = _infoList.aggregation.locations;
        this.brandList = _infoList.aggregation.brands;
        this.categoryList = _infoList.aggregation.categories;

        this.infoList = _infoList.results;

        this.totalCount = _infoList.count;
        this.totalPage = this.totalCount / this.maxRow;

        this.totalPageArray = Array(parseInt(this.totalPage, 10));
        this.totalPageArray.push(this.totalPageArray.length + 1);

        this.currentList = this.currentList.concat(this.infoList);
        this.isLoading = false;

        this.cd.markForCheck();
      }
    });

    this.categorySearchData$ =
      this.categorySearchReqeust$.pipe(
        switchMap((categoryCurrentCode) => {
          return this.searchService.categorySearch(categoryCurrentCode,
            this.currentSortSlug,
            this.currentPage, this.router.url.indexOf('?') < 0 ? '' : '&' + this.router.url.substring(this.router.url.indexOf('?') + 1, this.router.url.length));
        })
      ).subscribe( (_infoList: {filters, aggregation, results, count}) => {
        this.searchState = 'category';

        /* async 데이터가 들어오는데, null이라면 return을 해줌 */

        if (_infoList != null) {
          this.filters = _infoList.filters;
          this.valueList = _infoList.aggregation.values;
          this.locationList = _infoList.aggregation.locations;
          this.brandList = _infoList.aggregation.brands;
          this.infoList = _infoList.results;
          searchCategoryService.categoryList = _infoList.aggregation.categories;
          this.totalCount = _infoList.count;
          this.totalPage = this.totalCount / this.maxRow;

          this.totalPageArray = Array(parseInt(this.totalPage, 10));
          this.totalPageArray.push(this.totalPageArray.length + 1);

          this.currentList = this.currentList.concat(this.infoList);
          this.isLoading = false;

          this.cd.markForCheck();

        }

      });

    this.routerEvent$ = this.router.events.subscribe( (event: RouterEvent) => {

      if (event instanceof NavigationEnd ) {
        const url = this.router.url;
        this.currentUrl = url;
        if ( url.indexOf('/search') > -1 || url.indexOf('/c/') > -1) {

        } else {
          return ;
        }

        this.currentList = [];
        this.filters = {};
        // category main페이지 일때
        if (this.router.url.indexOf('&') < 0) {
          const temp = this.router.url.substring(this.router.url.indexOf('&') + 1, this.router.url.length);
          const tempArray = temp.split('&');
          tempArray.forEach(item => {
            const paramTemp = item.split('=');
            // const paramTemp = item.split('=');
            // console.log(paramTemp);
            // if ( paramTemp[0] !== 'ordering' && paramTemp[0] !== 'category'  ) {
            //   this.orderedFilterList.push(paramTemp[1]);
            // } else {
            //   if ( paramTemp[0] === 'ordering' ){
            //     this.currentSortSlug = paramTemp[1];
            //     console.log(this.currentSortSlug);
            //             //   }
            //             // }
          });
        }


        if (url.indexOf('/search') > -1) {
          this.searchState = 'search';
          searchCategoryService.normalizedCategoryCodeList = null;
          searchCategoryService.previous = null;
          searchCategoryService.currentSlug = null;

          const param = this.router.url.indexOf('?') < 0 ? null : this.router.url.substring(this.router.url.indexOf('?'), this.router.url.length);
          this.totalSearchRequest$.next(param);
        } else {
          const categoryUrl = this.router.url.split('/');
          let categoryCurrentCode = 0;
          if ( categoryUrl[categoryUrl.length - 1].indexOf('?') > -1 ) {
            categoryUrl[categoryUrl.length - 1] = categoryUrl[categoryUrl.length - 1].substring(0, categoryUrl[categoryUrl.length - 1].indexOf('?'));
          }

          switch ( categoryUrl.length ) {
            case 5 :
              categoryCurrentCode = this.categoryMap[categoryUrl[3]][categoryUrl[4]].code;
              break;
            case 6 :
              categoryCurrentCode = this.categoryMap[categoryUrl[3]][categoryUrl[4]][categoryUrl[5]].code;
              break;
            case 7 :
              categoryCurrentCode = this.categoryMap[categoryUrl[3]][categoryUrl[4]][categoryUrl[5]][categoryUrl[6]].code;
              break;
          }

          this.categorySearchReqeust$.next(categoryCurrentCode);
        }
      }
    });

    this.queryParams$ = this.route.queryParams
      .subscribe((val: { term, brand, value, location, category, page, ordering }) => {
        this.currentList = [];
        this.currentParamList = {
          ...val
        };
        this.currentPage = val.page === undefined ? 1 : parseInt(val.page, 10);
        searchCategoryService.currentCategoryCode = val.category;
        this.currentSortSlug = val.ordering === undefined ? 'most_popular' : val.ordering;

        this.brandListForCheck = {};
        this.valueListForCheck = {};
        this.locationListForCheck = {};
        this.queryParams = {
          brand: val.brand === undefined ? [] : typeof(val.brand) === 'string' ? Array(val.brand) : val.brand,
          value: val.value === undefined ? [] : typeof(val.value) === 'string' ? Array(val.value) : val.value,
          location: val.location === undefined ? [] : typeof(val.location) === 'string' ? Array(val.location) : val.location,
          term: val.term,
        };

        this.queryParams.brand.forEach(v => {
          const tempForInfo = Object.assign({[v]: true});
          this.brandListForCheck = {...this.brandListForCheck, ...tempForInfo};
        });

        this.queryParams.value.forEach(v => {
          const tempForInfo = Object.assign({[v]: true});
          this.valueListForCheck = {...this.valueListForCheck, ...tempForInfo};
        });

        this.queryParams.location.forEach(v => {
          const tempForInfo = Object.assign({[v]: true});
          this.locationListForCheck = {...this.locationListForCheck, ...tempForInfo};
        });

        this.cd.markForCheck();
      });
  }

  get filterList() {
    let filterList = [];

    // 브랜드, 밸류, 출고지 필터들을 종류에 상관없이 1차원 배열로 나열한다.
    Object.keys(this.filters).forEach(type => {
      switch (type) {
        case 'brands':
          filterList = filterList.concat(
            (this.filters[type] || []).map(({slug, name}) => ({type: 'brand', key: slug, value: name}))
          );
          break;
        case 'values':
          filterList = filterList.concat(
            (this.filters[type] || []).map(({slug, name}) => ({type: 'value', key: slug, value: name}))
          );
          break;
        case 'locations':
          filterList = filterList.concat(
            (this.filters[type] || []).map(({code, name}) => ({type: 'location', key: code, value: name}))
          );
          break;
        default:
          break;
      }
    });

    return filterList;
  }

  ngOnDestroy() {
    this.queryParams$.unsubscribe();
    this.cartStore$.unsubscribe();
    this.routerEvent$.unsubscribe();
    this.totalSearchData$.unsubscribe();
    this.categorySearchData$.unsubscribe();
  }

  ngOnInit() {
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height) + 'px';
  }

  showMobileFilter(xMenuState) {
    this.mobileFilterState = xMenuState;
    this.isShowMobileFilter = true;
    this.renderer.addClass(document.body , 'u-open-modal');
  }

  hideMobileFilter() {
    this.isShowMobileFilter = false;
    this.renderer.removeClass(document.body , 'u-open-modal');
    console.log('@@@@@@@@@@@@@@@@remove modal 6');
  }

  addToCart(xAmount, xData, xPackIndex) {

    xAmount++;
    xData.product = xData.slug;

    // 만약 카트 아이디가. 카트스토어 카트리스트에 있다면, increase cart를 하고, create cart를 하지 않는다.
    this.store.dispatch(new TryAddOrCreateToCart({
      isPopUp : true,
      data: xData,
      amount: xAmount,
      packIndex: xPackIndex,
      increaseOrCreate: xData.slug in this.cartStore.cartList
    }));

  }

  subtractFromCart(xAmount, xProductSlug, xPackIndex, isShipAlone) {
    xAmount--;
    this.store.dispatch(new TrySubtractOrDeleteFromCart({
      isPopUp : true,
      productSlug: xProductSlug,
      amount: xAmount,
      packIndex: xPackIndex,
      subtractOrDelete: xAmount !== 0 ? true : false
    }));
  }

  paginate(pageIndex) {
    this.currentPage = pageIndex;
    this.currentParamList['page'] = this.currentPage;

    if ( this.currentUrl.indexOf('/search') > -1 ) {
      this.router.navigate( ['/shops/search'], { relativeTo: this.route, queryParams: this.currentParamList , queryParamsHandling : 'merge' } );
    } else {
      this.router.navigate( [], { relativeTo: this.route, queryParams: this.currentParamList , queryParamsHandling : 'merge' } );
    }

    this.currentList = this.infoList.slice((this.currentPage - 1) * this.maxRow, this.currentPage * this.maxRow);
  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  brandSearch(event: KeyboardEvent) {

    if ( event.key === 'Enter' ) {
      this.store.dispatch(new DisplayAlertMessage(this.alertMap['comming-soon'][this.locale]));
    }
  }


  typeOf( val ) {
    return typeof val;
  }
  loadNextPage(pageIndex) {
    /*const url = this.router.url;

    if (url.indexOf('/search') > -1) {
      this.searchState = 'search';
      this.normalizedCategoryCodeList = null;
      this.previous = null;
      this.currentSlug = null;
      this.totalSearchRequest$.next(param);
    } else {
      const categoryUrl = this.router.url.split('/');
      let categoryCurrentCode = 0;
      if (categoryUrl[categoryUrl.length - 1].indexOf('?') > -1) {
        categoryUrl[categoryUrl.length - 1] = categoryUrl[categoryUrl.length - 1].substring(0, categoryUrl[categoryUrl.length - 1].indexOf('?'));
      }

      switch (categoryUrl.length) {
        case 5 :
          categoryCurrentCode = this.categoryMap[categoryUrl[3]][categoryUrl[4]].code;
          break;
        case 6 :
          categoryCurrentCode = this.categoryMap[categoryUrl[3]][categoryUrl[4]][categoryUrl[5]].code;
          break;
        case 7 :
          categoryCurrentCode = this.categoryMap[categoryUrl[3]][categoryUrl[4]][categoryUrl[5]][categoryUrl[6]].code;
          break;
      }

      this.categorySearchReqeust$.next(categoryCurrentCode);

    }*/
  }

  @HostListener('window:scroll', ['$event'])
  onScrollDown(event) {
    console.log('end!');
    console.log(this.isLoading);
    if (!this.isLoading) {
      this.isLoading = true;
      console.log('call next page');
      console.log(this.isLoading);
      this.currentPage += 1;
      this.loadNextPage(this.currentPage);
    }
  }

}
