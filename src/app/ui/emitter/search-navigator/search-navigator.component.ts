import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, Inject,
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
import {AddClassOpenModal, DisplayAlertMessage, RemoveClassOpenModal} from '../../../core/store/ui/ui.actions';
import {BehaviorSubject, Subject} from 'rxjs';
import {CATEGORY_CODE_MAP} from '../../../core/global-constant/app.category-database-long';
import {BreakpointObserver, BreakpointState} from '../../../../../node_modules/@angular/cdk/layout';
import {Title} from '@angular/platform-browser';
import {DISPLAY_ALERT_MESSAGE_MAP} from '../../../core/global-constant/app.locale';
import {switchMap, tap} from 'rxjs/operators';
import {SORT_LIST} from '../../../core/global-constant/item-component.locale';

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
  locationListForCheck = {};
  brandList;
  brandListForCheck = {};
  valueList;
  valueListForCheck = {};
  infoList;
  filters = {};

  /** currentState **/
  currentSortElement = this.sortList[0];

  normalizedCategoryCodeList;
  categoryList;
  normalizedCategoryInfoList;
  previous;
  currentSlug;
  currentCode;
  currentTitle;
  currentName = '';
  currentCategoryCode = 0;
  currentParamList = {};
  contentHeight;

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

  /***** filter modal For Mobile ****/
  isShowMobileFilter = false;
  mobileFilterState = 'menu'
  isMobile = false;

  /******* subscribe ******/
  cartStore$;
  uiStore$;
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

  // infinite scroll
  infiniteCurrentSortSlug;
  infiniteCurrentPage;
  infiniteList = [];
  isLoading = false;

  constructor(
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject( CATEGORY_CODE_MAP)  private categoryMap,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
    @Inject( LOCALE_ID ) public locale: string,
    @Inject( DISPLAY_ALERT_MESSAGE_MAP ) private alertMap,
    @Inject( SORT_LIST ) public sortList,
    private uiService: UiService,
    private renderer: Renderer2,
    private store: Store<any>,
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private cd: ChangeDetectorRef,
    private searchService: SearchService,
    private breakpointObserver:  BreakpointObserver,
    private titleService: Title,
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
        this.normalizedCategoryInfoList = val.entities;
        this.normalizedCategoryCodeList = val.result;
        this.previous = val.previous;
        this.currentSlug = val.currentSlug;
        this.currentCode = val.currentCode;
        this.currentCategoryCode = val.currentCode;

        this.currentName = val.currentName;
        this.currentTitle = val.currentTitle;

        if ( this.currentName !== undefined ) {
          this.titleService.setTitle(this.currentName[this.locale]);
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
        this.isLoading = true;
        return this.searchService.search(param);
      }),
    ).subscribe((_infoList: {filters, aggregation, results, count}) => {
      /* async 데이터가 들어오는데, null이라면 return을 해줌 */
      if (_infoList != null) {
        this.isLoading = false;

        this.infoList = _infoList.results;
        this.filters = _infoList.filters;
        this.valueList = _infoList.aggregation.values;
        this.locationList = _infoList.aggregation.locations;
        this.brandList = _infoList.aggregation.brands;
        this.categoryList = _infoList.aggregation.categories;

        this.totalCount = _infoList.count;
        this.totalPage = this.totalCount / this.maxRow;
        this.totalPageArray = Array(parseInt(this.totalPage, 10));
        this.totalPageArray.push(this.totalPageArray.length + 1);
        this.currentList = this.infoList.slice(0, this.maxRow);

        if (this.isMobile) {
          this.infiniteList = this.infiniteList.concat(this.infoList);

        }
        this.cd.markForCheck();

      }
    }, (err) => {
      this.isLoading = false;
      console.log(err);
      alert('더이상 불러올 목록이 없습니다.');
    });

    this.categorySearchData$ =
      this.categorySearchReqeust$.pipe(
        switchMap((categoryCurrentCode) => {
          this.isLoading = true;
          if (this.isMobile) {
            const xparam = this.removeParameterFromUrl(this.router.url.indexOf('?') < 0 ? '' : '&' + this.router.url.substring(this.router.url.indexOf('?') + 1, this.router.url.length), 'ordering');
            return this.searchService.categorySearch(
              categoryCurrentCode,
              this.currentSortElement.value,
              this.currentPage,
              xparam
            );
          } else {
            const xparam = this.removeParameterFromUrl(this.router.url.indexOf('?') < 0 ? '' : '&' + this.router.url.substring(this.router.url.indexOf('?') + 1, this.router.url.length), 'ordering');

            return this.searchService.categorySearch(
              categoryCurrentCode,
              this.currentSortElement.value,
              this.currentPage,
              xparam
            );
          }
        })
      ).subscribe( (_infoList: {filters, aggregation, results, count}) => {
        this.searchState = 'category';
        this.isLoading = false;
        /* async 데이터가 들어오는데, null이라면 return을 해줌 */

        if (_infoList != null) {
          this.filters = _infoList.filters;
          this.valueList = _infoList.aggregation.values;
          this.locationList = _infoList.aggregation.locations;
          this.brandList = _infoList.aggregation.brands;
          this.infoList = _infoList.results;
          this.categoryList = _infoList.aggregation.categories;
          this.totalCount = _infoList.count;
          this.totalPage = this.totalCount / this.maxRow;

          this.totalPageArray = Array(parseInt(this.totalPage, 10));
          this.totalPageArray.push(this.totalPageArray.length + 1);

          this.currentList = this.infoList.slice(0, this.maxRow);
          if (this.isMobile) {
            this.infiniteList = this.infiniteList.concat(this.infoList);
          }
          this.cd.markForCheck();
        }
      }, (err) => {
        this.isLoading = false;
        console.log(err)
      });

    this.routerEvent$ = this.router.events.subscribe( (event: RouterEvent) => {
      if (event instanceof NavigationEnd ) {
        const url = this.router.url;
        this.currentUrl = url;
        if ( url.indexOf('/search') <= -1 && url.indexOf('/c/') <= -1) {
          return ;
        }

        this.currentList = null;
        this.filters = {};

        if (url.indexOf('/search') > -1) {
          this.searchState = 'search';
          this.normalizedCategoryCodeList = null;
          this.previous = null;
          this.currentSlug = null;

          const param = this.router.url.indexOf('?') < 0 ? null : this.router.url.substring(this.router.url.indexOf('?'), this.router.url.length);
          this.totalSearchRequest$.next(param);
        } else {
          this.categorySearchReqeust$.next(this.getCategoryCurrentCode());
        }
      }
    });

    this.queryParams$ = this.route.queryParams
      .subscribe((val: { term, brand, value, location, category, page, ordering }) => {
        this.currentList = null;
        this.currentParamList = {
          ...val
        };
        this.currentPage = val.page === undefined ? 1 : parseInt(val.page, 10);
        this.currentCategoryCode = val.category;
        this.currentSortElement = this.sortList.find( (item) => {
          return item.value === (val.ordering === undefined ? 'most_popular' : val.ordering);
        })

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

  ngOnInit() {
    this.contentHeight = (window.screen.height - 400) < 300 ? '' : (window.screen.height) + 'px';
    if ( this.isMobile ) {
      const url = this.router.url;
      if ( url.indexOf('/search') <= -1 && url.indexOf('/c/') <= -1) {
        return;
      }
    }
  }

  ngOnDestroy() {
    this.uiStore$.unsubscribe();
    this.queryParams$.unsubscribe();
    this.cartStore$.unsubscribe();
    this.routerEvent$.unsubscribe();
    this.totalSearchData$.unsubscribe();
    this.categorySearchData$.unsubscribe();
  }

  shareInfiniteListVaraibles(infiniteListVariables) {
    this.infiniteCurrentSortSlug = infiniteListVariables.currentSortSlug;
    this.infiniteCurrentPage = infiniteListVariables.currentPage;
    this.infiniteList = infiniteListVariables.infiniteList;
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

  showMobileFilter(xMenuState) {
    this.mobileFilterState = xMenuState;
    this.isShowMobileFilter = true;
    this.store.dispatch(new AddClassOpenModal());
  }

  hideMobileFilter() {
    this.isShowMobileFilter = false;
    this.store.dispatch(new RemoveClassOpenModal());
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

  subtractFromCart(xAmount, xProductSlug, xPackIndex ) {
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

  updateSecondCategory(index, slug) {
    const url = this.router.url.split('/');
    if (url[url.length - 1] === slug) {
      return;
    }
    this.router.navigate(['/shops/c/' + url[3] + '/' + slug], {relativeTo: this.route});
  }

  updateThirdCategory(index, secondSlug, thirdSlug) {
    const url = this.router.url.split('/');
    this.router.navigate(['/shops/c/' + url[3] + '/' + secondSlug + '/' + thirdSlug], {relativeTo: this.route});
  }

  updateFourthCategory(index, secondSlug, thirdSlug, fourthSlug) {
    const url = this.router.url.split('/');

    this.router.navigate(['/shops/c/' + url[3] + '/' + secondSlug + '/' + thirdSlug + '/' + fourthSlug], {relativeTo: this.route});
  }

  onedepthFold(dom, label) {
    if (dom.style.maxHeight === '3500px') {

      this.renderer.setStyle(label, 'transform', 'rotate(0deg)');
      this.renderer.setStyle(dom, 'opacity', '0');
      this.renderer.setStyle(dom, 'max-height', '0px');

    } else {

      this.renderer.setStyle(label, 'transform', 'rotate(-180deg)');
      this.renderer.setStyle(dom, 'opacity', '1');
      this.renderer.setStyle(dom, 'max-height', '3500px');

    }
  }

  twodepthFold(dom, label) {
    if (dom.style.maxHeight === '700px') {
      this.renderer.setStyle(label, 'transform', 'rotate(0deg)');
      this.renderer.setStyle(dom, 'opacity', '0');
      this.renderer.setStyle(dom, 'max-height', '0px');
    } else {
      this.renderer.setStyle(label, 'transform', 'rotate(-180deg)');
      this.renderer.setStyle(dom, 'opacity', '1');
      this.renderer.setStyle(dom, 'max-height', '700px');
    }
  }

  valueClicked(xValueSlug) {

    if (this.valueListForCheck[xValueSlug] === true) {
      this.valueListForCheck[xValueSlug] = false;
      const index = this.queryParams.value.indexOf(xValueSlug);
      this.queryParams.value.splice(index, 1);
    } else {
      this.queryParams.value.push(xValueSlug);
    }

    if ( this.searchState === 'search') {
      this.router.navigate(['/shops/search'], {
        queryParams: { page: null, value: this.queryParams.value.length === 0 ? null : this.queryParams.value},
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: {value: this.queryParams.value.length === 0 ? null : this.queryParams.value}, queryParamsHandling: 'merge'} );
    }
  }

  brandClicked(xBrandSlug) {
    if (this.brandListForCheck[xBrandSlug] === true) {
      this.brandListForCheck[xBrandSlug] = false;
      const index = this.queryParams.brand.indexOf(xBrandSlug);
      this.queryParams.brand.splice(index, 1);
    } else {
      this.queryParams.brand.push(xBrandSlug);
    }
    if ( this.searchState === 'search') {
      this.router.navigate(['/shops/search'], {
        queryParams: {page: null, brand: this.queryParams.brand.length === 0 ? null : this.queryParams.brand},
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: {brand: this.queryParams.brand.length === 0 ? null : this.queryParams.brand},
        queryParamsHandling: 'merge'} );
    }
  }

  locationClicked(xLocationSlug) {
    if ( this.locationListForCheck[xLocationSlug] === true ) {
      this.locationListForCheck[xLocationSlug] = false;
      const index = this.queryParams.location.indexOf(xLocationSlug);
      this.queryParams.location.splice(index, 1);
    } else {
      this.queryParams.location.push(xLocationSlug);
    }
    if ( this.searchState === 'search') {
      this.router.navigate(['/shops/search'], {
        queryParams: {page: null, location: this.queryParams.location.length === 0 ? null : this.queryParams.location},
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: {location: xLocationSlug}, queryParamsHandling: 'merge'} );
    }
  }

  sortClicked(currentSortElement) {
    this.currentSortElement = currentSortElement;
    if( this.searchState === 'search') {
      this.router.navigate(['/shops/search'], {
        queryParams: {page : 1, ordering: currentSortElement.value
        }, queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['./'], {
        relativeTo: this.route, queryParams: { ordering: currentSortElement.value
        }, queryParamsHandling: 'merge'
      });
    }
  }

  goBrandFilter(xBrand){
    this.router.navigate(['/shops/search'], { queryParams: { page: 1, ordering: 'most_popular', brand: xBrand}, queryParamsHandling: 'merge'} );
  }

  categoryClicked( xCategoryCode ) {
    this.router.navigate( ['/shops/search'], { queryParams: {page : 1, category: xCategoryCode}, queryParamsHandling: 'merge'} );
  }

  removeSpecificFilter(xType, xKey) {
    if (Array.isArray(this.currentParamList[xType])) {
      const index = this.currentParamList[xType].indexOf(xKey);
      if (index !== -1) {
        this.currentParamList[xType].splice(index, 1);
        if (this.currentParamList[xType].length === 0) {
          delete this.currentParamList[xType];
        }
      }
    } else {
      if (this.currentParamList[xType] === xKey) {
        delete this.currentParamList[xType];
      }
    }

    if( this.searchState === 'search') {
      this.router.navigate( ['/shops/search'], {queryParams: this.currentParamList});
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: this.currentParamList } );
    }
  }

  removeAllFilter() {
    this.router.navigate(['/shops/search'], {queryParams: {brand: null, value: null, location : null}, queryParamsHandling: 'merge'});
  }

  removeAllFilterCategory() {
    this.router.navigate(['/shops/search'], {queryParams: {category: null}, queryParamsHandling: 'merge'});
  }

  removeAllFilterBrand() {
    this.router.navigate(['/shops/search'], {queryParams: {brand: null}, queryParamsHandling: 'merge'});
  }

  removeAllFilterValue() {
    this.router.navigate(['/shops/search'], {queryParams: {value: null}, queryParamsHandling: 'merge'});
  }

  removeAllFilterLocation() {
    this.router.navigate(['/shops/search'], {queryParams: {location: null}, queryParamsHandling: 'merge'});
  }

  getCurrentParamListExceptPage() {
    const currentParamList = this.currentParamList;
    if (currentParamList['page']) {
      delete currentParamList['page'];
    }
    if (currentParamList['ordering']) {
      delete currentParamList['ordering'];
    }
    return currentParamList;
  }

  typeOf( val ) {
    return typeof val;
  }

  loadNextPageItems( currentPage: number) {
      const url = this.router.url;
      this.currentUrl = url;
      if ( url.indexOf('/search') <= -1 && url.indexOf('/c/') <= -1) {
        return ;
      }
      // category main페이지 일때
      if (this.router.url.indexOf('&') < 0) {
        const temp = this.router.url.substring(this.router.url.indexOf('&') + 1, this.router.url.length);
        const tempArray = temp.split('&');
        tempArray.forEach(item => {
          const paramTemp = item.split('=');
        });
      }

      if (url.indexOf('/search') > -1) {
        this.searchState = 'search';
        this.normalizedCategoryCodeList = null;
        this.previous = null;
        this.currentSlug = null;
        let param = this.router.url.indexOf('?') < 0 ? null : this.router.url.substring(this.router.url.indexOf('?'), this.router.url.length);
        param = this.replaceStringParam(param, 'page', currentPage);
        this.totalSearchRequest$.next(param);
      } else {
        this.categorySearchReqeust$.next(this.getCategoryCurrentCode());
      }
  }

  onScrollDown (ev) {
    if (!this.isLoading) {
      this.currentPage += 1;
      this.loadNextPageItems(this.currentPage);

    }
  }

  replaceStringParam(string, paramName, paramValue) {
    if (paramValue == null) {
      paramValue = '';
    }
    const pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
    if (string.search(pattern) >= 0) {
      console.log('aa!');
      return string.replace(pattern, '$1' + paramValue + '$2');
    }
    string = string.replace(/[?#]$/, '');
    return string + '&' + paramName + '=' + paramValue;
  }

  getCategoryCurrentCode() {
    const categoryUrl = this.router.url.split('/');
    let categoryCurrentCode = 0;
    if ( categoryUrl[categoryUrl.length - 1].indexOf('?') > -1){
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
    return categoryCurrentCode;
  }

  removeParameterFromUrl(url, parameter) {
    return url
      .replace(new RegExp('[?&]' + parameter + '=[^&#]*(#.*)?$'), '$1')
      .replace(new RegExp('([?&])' + parameter + '=[^&]*&'), '$1');
  }
}


