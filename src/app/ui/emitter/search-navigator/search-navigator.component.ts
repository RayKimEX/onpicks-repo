import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, Inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterEvent} from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  TryAddOrCreateToCart,
  TrySubtractOrDeleteFromCart
} from '../../../core/store/cart/cart.actions';
import {SearchService} from '../../../core/service/data-pages/search/search.service';
import {CURRENCY, LOCATION_MAP, RESPONSIVE_MAP} from '../../../app.config';
import {UiService} from '../../../core/service/ui/ui.service';
import {normalize, schema} from 'normalizr';
import {DisplayAlertMessage} from '../../../core/store/ui/ui.actions';
import {BehaviorSubject, combineLatest, merge} from 'rxjs';
import {CATEGORY_CODE_MAP} from '../../../app.database';
import {BreakpointObserver, BreakpointState} from '../../../../../node_modules/@angular/cdk/layout';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'emitter-search-navigator',
  templateUrl: './search-navigator.component.html',
  styleUrls: ['./search-navigator.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class SearchNavigatorComponent implements OnInit, OnDestroy {

  locationList;
  locationListForCheck = {};
  brandList;
  brandListForCheck = {};
  valueList;
  valueListForCheck = {};
  infoList;
  orderedFilterList = [];

  currentSortSlug = 'most_popular';

  result;
  categoryList;
  normalizedCategoryList;
  previous;
  currentSlug;
  currentCode;
  currentTitle;
  currentName = '';
  currentCategory = 0;
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
  searchData$;

  // subscribe ``value``
  queryParams = {term: '', brand: [], value: [], location: []};
  cartStore;

  weeklyBest$;

  sortList = [
    {title: '인기순', value: 'most_popular'},
    // { title : '판매량', value : 'most_popular' },
    {title: '리뷰 많은순', value: 'most_reviewed'},
    {title: '평점순', value: 'top_rated'},
    {title: '가격 높은순', value: 'price_high'},
    {title: '가격 낮은순', value: 'price_low'}
  ]

  sortMap = {
    'most_popular' : '인기순',
    'most_reviewed' : '리뷰 많은순',
    'top_rated' : '평점순',
    'price_high' : '가격 높은순',
    'price_low' : '가격 낮은순'
  }

  constructor(
    @Inject( CURRENCY ) public currency: BehaviorSubject<any>,
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject( CATEGORY_CODE_MAP)  private categoryMap,
    @Inject( RESPONSIVE_MAP ) public responsiveMap,
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
        this.normalizedCategoryList = val.entities;
        this.result = val.result;
        this.previous = val.previous;
        this.currentSlug = val.currentSlug;
        this.currentCode = val.currentCode;
        this.currentName = val.currentName;
        this.currentTitle = val.currentTitle;

        this.titleService.setTitle(this.currentName);
      });

    this.cartStore$ = this.store.pipe(select(state => state.cart))
      .subscribe(val => {
        this.cartStore = val;
        this.cd.markForCheck();
      });

    this.weeklyBest$ = this.uiService.getWeeklyBestGoods();

    // this.router.events.pipe( merge(this.route.queryParams) )
      // this.router.events.pipe(concat(this.route.queryParams))
    this.router.events.subscribe( (event: RouterEvent) => {


      if (event instanceof NavigationEnd ) {
        let url = this.router.url;
        this.currentUrl = url;
        if ( url.indexOf('/search') > -1 || url.indexOf('/c/') > -1) {

        } else {
          return ;
        }

        this.currentList = null;
        this.orderedFilterList = [];
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
        } else {
          // search 화면일때
          const temp = this.router.url.substring(this.router.url.indexOf('&') + 1, this.router.url.length);
          const tempArray = temp.split('&');
          tempArray.forEach(item => {
            console.log(item);
            const paramTemp = item.split('=');
            if (paramTemp[0] !== 'ordering' && paramTemp[0] !== 'category' && paramTemp[0] !== 'page' && paramTemp[0] !== 'page_size') {
              this.orderedFilterList.push(paramTemp[1]);
            }
          });
        }


        if (url.indexOf('/search') > -1) {
          this.searchState = 'search';
          this.result = null;
          this.previous = null;
          this.currentSlug = null;

          const param = this.router.url.indexOf('?') < 0 ? null : this.router.url.substring(this.router.url.indexOf('?'), this.router.url.length);

          this.searchData$ = this.searchService.search(param).subscribe(_infoList => {
            /* async 데이터가 들어오는데, null이라면 return을 해줌 */
            if (_infoList != null) {
              console.log(_infoList);
              this.valueList = _infoList.aggregation.values;
              this.locationList = _infoList.aggregation.locations;
              this.brandList = _infoList.aggregation.brands;
              this.categoryList = _infoList.aggregation.categories;

              console.log(this.categoryList);
              this.infoList = _infoList.results;

              this.totalCount = _infoList.count;
              this.totalPage = this.totalCount / this.maxRow;

              this.totalPageArray = Array(parseInt(this.totalPage, 10));
              this.totalPageArray.push(this.totalPageArray.length + 1);

              this.currentList = this.infoList.slice(0, this.maxRow);
              this.cd.markForCheck();
            }
          });
        } else {
          const categoryUrl = this.router.url.split('/');
          let categoryCurrentCode = 0;
          if ( categoryUrl[categoryUrl.length - 1].indexOf('?') > -1){
            categoryUrl[categoryUrl.length - 1] = categoryUrl[categoryUrl.length - 1].substring(0, categoryUrl[categoryUrl.length - 1].indexOf('?'));
          }
          console.log(categoryUrl[3]);
          console.log(categoryUrl[4]);

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


          this.searchData$ = this.searchService.categorySearch(categoryCurrentCode, this.currentSortSlug, this.currentPage).subscribe(_infoList => {
            this.searchState = 'category';

            /* async 데이터가 들어오는데, null이라면 return을 해줌 */

            if (_infoList != null) {
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
              this.cd.markForCheck();
            }
          });
        }
      }
    })
    this.queryParams$ = this.route.queryParams
      .subscribe((val: { term, brand, value, location, category, page, ordering }) => {
        this.currentList = null;
        this.orderedFilterList = [];
        this.currentParamList = {
          ...val
        };
        this.currentPage = val.page === undefined ? 1 : parseInt(val.page, 10);
        this.currentCategory = val.category;
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

  ngOnDestroy() {
    this.uiStore$.unsubscribe();
    this.queryParams$.unsubscribe();
    this.cartStore$.unsubscribe();
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

  addToCart(xAmount, xProductSlug, xPackIndex) {

    xAmount++;

    // 만약 카트 아이디가. 카트스토어 카트리스트에 있다면, increase cart를 하고, create cart를 하지 않는다.
    this.store.dispatch(new TryAddOrCreateToCart({
      isPopUp : true,
      productSlug: xProductSlug,
      amount: xAmount,
      packIndex: xPackIndex,
      increaseOrCreate: xProductSlug in this.cartStore.cartList
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

    this.router.navigate(['/shops/search'], {
      queryParams: { page: null, value: this.queryParams.value.length === 0 ? null : this.queryParams.value},
      queryParamsHandling: 'merge'
    });
  }

  brandClicked(xBrandSlug) {

    if (this.brandListForCheck[xBrandSlug] === true) {
      this.brandListForCheck[xBrandSlug] = false;
      const index = this.queryParams.brand.indexOf(xBrandSlug);
      this.queryParams.brand.splice(index, 1);
    } else {
      this.queryParams.brand.push(xBrandSlug);
    }

    this.router.navigate(['/shops/search'], {
      queryParams: {page: null, brand: this.queryParams.brand.length === 0 ? null : this.queryParams.brand},
      queryParamsHandling: 'merge'
    });
  }

  locationClicked(xLocationSlug) {

    if ( this.locationListForCheck[xLocationSlug] === true ) {
      this.locationListForCheck[xLocationSlug] = false;
      const index = this.queryParams.location.indexOf(xLocationSlug);
      this.queryParams.location.splice(index, 1);
    } else {
      this.queryParams.location.push(xLocationSlug);
    }

    this.router.navigate(['/shops/search'], {
      queryParams: {page: null, location: this.queryParams.location.length === 0 ? null : this.queryParams.location},
      queryParamsHandling: 'merge'
    });
  }

  sortClicked(xSortSlug) {
    this.currentSortSlug = xSortSlug;
    // this.orderedFilterListForCheck[]
    if( this.searchState === 'search') {
      this.router.navigate(['/shops/search'], { queryParams: {ordering: xSortSlug}, queryParamsHandling: 'merge'} );
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: {ordering: xSortSlug}, queryParamsHandling: 'merge'} );
    }
  }

  goBrandFilter(xBrand){
    this.router.navigate(['/shops/search'], { queryParams: { page: 1, ordering: 'most_popular', brand: xBrand}, queryParamsHandling: 'merge'} );
  }

  categoryClicked( xCategoryCode ) {
    this.router.navigate( ['/shops/search'], { queryParams: {category: xCategoryCode}, queryParamsHandling: 'merge'} );
  }

  removeSpecificFilter(xValue) {

    let temp = {
      ...this.currentParamList
    };

    Object.keys(this.currentParamList).forEach( key => {
      if ( Array.isArray(this.currentParamList[key])) {
        this.currentParamList[key].forEach( (innerValue, innerIndex) => {
          if ( innerValue === xValue ) {
            this.currentParamList[key].splice(innerIndex, 1)
            if ( this.currentParamList[key].length === 0 ) {

              delete temp[key];
            } else {
              temp = {
                ...this.currentParamList,
                [key] : [...this.currentParamList[key]]
              };
            }
          }
        });
      } else {
        if ( this.currentParamList[key] === xValue) {
          delete temp[key];
        }
      }
    });

    this.router.navigate( ['/shops/search'], {queryParams: temp});
  }

  // TODO : 리뷰 검색, 브랜드 검색 2차 스콥때 하기

  brandSearch(event: KeyboardEvent) {

    if ( event.key === 'Enter' ) {
      this.store.dispatch(new DisplayAlertMessage('준비중 입니다.'));
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

  normalizer ( data ) {
    const slug = new schema.Entity('slug', {

    });

    const fourthCategory = new schema.Entity('fourthCategory', {

    });

    // // // Define your comments schema
    const thirdCategory = new schema.Entity('thirdCategory', {
      name : name,
      children : [fourthCategory]
    });

    const secondCategory = new schema.Entity('secondCategory', {
      // idAttribute: () => slug
      children : [thirdCategory]
    });

    const object = new schema.Array(secondCategory);


    return normalize(data, object);
  }
}


