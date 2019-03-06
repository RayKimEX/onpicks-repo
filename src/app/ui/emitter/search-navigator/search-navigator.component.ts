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
import {CURRENCY, LOCATION_MAP} from '../../../app.config';
import {UiService} from '../../../core/service/ui/ui.service';
import {normalize, schema} from 'normalizr';
import {DisplayAlertMessage} from '../../../core/store/ui/ui.actions';
import {BehaviorSubject, combineLatest, merge} from 'rxjs';
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

  imageIndex = 0;

  /******* pagination ******/
  totalCount;
  totalPage;

  totalPageArray = [];
  maxRow = 18;

  currentList = [];
  currentPage = 1;
  currentUrl = '';

  searchState = '';


  /***** filter modal For Mobile ****/
  isShowMobileFilter = false;
  mobileFilterState = 'menu'

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
    @Inject(CURRENCY) public currency: BehaviorSubject<any>,
    @Inject( LOCATION_MAP ) public locationMap: any,
    private uiService: UiService,
    private renderer: Renderer2,
    private store: Store<any>,
    public router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private cd: ChangeDetectorRef,
    private searchService: SearchService
  ) {

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
            const paramTemp = item.split('=');
            if (paramTemp[0] !== 'ordering' && paramTemp[0] !== 'category' && paramTemp[0] !== 'page' && paramTemp[0] !== 'page_size') {
              this.orderedFilterList.push(paramTemp[1]);
            } else {
              if (paramTemp[0] === 'ordering') {
                this.currentSortSlug = paramTemp[1];
                console.log(this.currentSortSlug);
              }
            }
          });
        }


        if (url.indexOf('/search') > -1) {
          this.searchState = 'search';
          this.result = null;
          this.previous = null;
          this.currentSlug = null;

          const param = this.router.url.substring(this.router.url.indexOf('?'), this.router.url.length);

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
              categoryCurrentCode = this.sortInfo[categoryUrl[3]][categoryUrl[4]].code;
              break;
            case 6 :
              categoryCurrentCode = this.sortInfo[categoryUrl[3]][categoryUrl[4]][categoryUrl[5]].code;
              break;
            case 7 :
              categoryCurrentCode = this.sortInfo[categoryUrl[3]][categoryUrl[4]][categoryUrl[5]][categoryUrl[6]].code;
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
      .subscribe((val: { term, brand, value, location, category, page }) => {
        this.currentList = null;
        this.orderedFilterList = [];
        this.currentParamList = {
          ...val
        };
        this.currentPage = val.page === undefined ? 1 : parseInt(val.page, 10);
        this.currentCategory = val.category;




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
    this.router.navigate(['/shops/search'], { queryParams: {page_size: 18, page: 1, ordering: 'most_popular', brand: xBrand}, queryParamsHandling: 'merge'} );
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


  // @ts-ignore
  sortInfo = {
    'pantry-and-household': {
      'code': 1000000,
      'grocery': {
        'code': 1010000,
        'beverages': {
          'code': 1010100,
          'water': {
            'code': 1010101
          },
          'sports-and-energy-drinks': {
            'code': 1010102
          },
          'soft-drinks': {
            'code': 1010103
          },
          'coffee': {
            'code': 1010104
          },
          'tea': {
            'code': 1010105
          },
          'milk': {
            'code': 1010106
          },
          'non-dairy-milk': {
            'code': 1010107
          },
          'juice': {
            'code': 1010108
          },
          'applesauce-fruit-cups-and-squeezes': {
            'code': 1010201
          },
          'chips-and-pretzels': {
            'code': 1010202
          },
          'cookies': {
            'code': 1010203
          },
          'bread-and-crackers': {
            'code': 1010204
          },
          'fruit-and-vegetable-snacks': {
            'code': 1010205
          },
          'protein-and-granola-bars': {
            'code': 1010206
          },
          'ice-cream-cones-and-toppings': {
            'code': 1010207
          },
          'jerky-and-dried-meats': {
            'code': 1010208
          },
          'nuts-seeds-and-trail-mix': {
            'code': 1010209
          },
          'popcorn-and-puffed-snacks': {
            'code': 1010210
          },
          'pudding-and-gelatin': {
            'code': 1010211
          }
        },
        'candy-gum-and-chocolate': {
          'code': 1010300,
          'chocolate': {
            'code': 1010301
          },
          'chewing-gum': {
            'code': 1010302
          },
          'candy': {
            'code': 1010303
          },
          'other-sweets': {
            'code': 1010304
          }
        },
        'breakfast-foods': {
          'code': 1010400,
          'cold-cereals': {
            'code': 1010401
          },
          'hot-cereals-and-oats': {
            'code': 1010402
          },
          'toaster-pastries': {
            'code': 1010403
          },
          'granola-and-museli': {
            'code': 1010404
          },
          'meal-replacement-proein-and-granola-bars': {
            'code': 1010405
          }
        },
        'soups-meals-and-side-dishes': {
          'code': 1010500,
          'macaroni-and-cheese': {
            'code': 1010501
          },
          'soups': {
            'code': 1010502
          },
          'broth': {
            'code': 1010503
          },
          'chilis-and-stews': {
            'code': 1010504
          },
          'asian-meals': {
            'code': 1010505
          },
          'italian-meals': {
            'code': 1010506
          },
          'mexican-meals-and-taco-kits': {
            'code': 1010507
          },
          'indian-meals': {
            'code': 1010508
          },
          'potatoes-and-stuffings': {
            'code': 1010509
          }
        },
        'pantry': {
          'code': 1010600,
          'spices-and-seasonings': {
            'code': 1010601
          },
          'salt-and-pepper': {
            'code': 1010602
          },
          'condiments': {
            'code': 1010603
          },
          'oils': {
            'code': 1010604
          },
          'vinegars': {
            'code': 1010605
          },
          'salad-dressings': {
            'code': 1010606
          },
          'salad-toppings': {
            'code': 1010607
          },
          'sauces-and-marinades': {
            'code': 1010608
          },
          'salsas-and-dips': {
            'code': 1010609
          },
          'butters': {
            'code': 1010610
          },
          'jams-jellies-and-preserves': {
            'code': 1010611
          },
          'sweet-spreads': {
            'code': 1010612
          },
          'flours-and-meals': {
            'code': 1010613
          },
          'sugar-and-other-sweeteners': {
            'code': 1010614
          },
          'baking-ingredients': {
            'code': 1010615
          },
          'baking-mixes': {
            'code': 1010616
          },
          'honey-and-syrups': {
            'code': 1010617
          }
        },
        'pasta-and-pasta-sauce': {
          'code': 1010700,
          'pasta-and-noodles': {
            'code': 1010701
          },
          'pasta-sauces': {
            'code': 1010702
          }
        },
        'canned-and-jarred-food': {
          'code': 1010800,
          'canned-beans': {
            'code': 1010801
          },
          'canned-fruit': {
            'code': 1010802
          },
          'canned-meat-and-seafood': {
            'code': 1010803
          },
          'canned-vegetables': {
            'code': 1010804
          },
          'canned-tomatoes-and-paste': {
            'code': 1010805
          },
          'pickled-vegetables-and-olives': {
            'code': 1010806
          }
        },
        'cooking-and-baking-supplies': {
          'code': 1010900,
          'baking-mixes': {
            'code': 1010901
          },
          'baking-ingredients': {
            'code': 1010902
          },
          'breadcrumbs': {
            'code': 1010903
          },
          'doughs-shells-and-crusts': {
            'code': 1010904
          },
          'extracts': {
            'code': 1010905
          },
          'flours-and-meals': {
            'code': 1010906
          },
          'frosting-and-decoration': {
            'code': 1010907
          },
          'marshmallows': {
            'code': 1010908
          },
          'sugar-and-other-sweeteners': {
            'code': 1010909
          },
          'honey-and-syrups': {
            'code': 1010910
          }
        },
        'rice-beans-and-grains': {
          'code': 1011000,
          'dry-beans': {
            'code': 1011001
          },
          'grains': {
            'code': 1011002
          },
          'quinoa': {
            'code': 1011003
          },
          'rice': {
            'code': 1011004
          },
          'couscous': {
            'code': 1011005
          }
        },
        'international-food': {
          'code': 1011100,
          'indian-cuisine': {
            'code': 1011101
          },
          'chinese-cuisine': {
            'code': 1011102
          },
          'japanese-cuisine': {
            'code': 1011103
          },
          'korean-cuisine': {
            'code': 1011104
          },
          'asian-cuisine': {
            'code': 1011105
          },
          'mexican-cuisine': {
            'code': 1011106
          },
          'latin-american-cuisine': {
            'code': 1011107
          },
          'european-cuisine': {
            'code': 1011108
          }
        }
      },
      'household-supplies': {
        'code': 1020000,
        'paper-and-plastic-products': {
          'code': 1020100,
          'paper-towels': {
            'code': 1020101
          },
          'toilet-paper': {
            'code': 1020102
          },
          'facial-tissues': {
            'code': 1020103
          },
          'disposable-tableware': {
            'code': 1020104
          },
          'paper-napkins': {
            'code': 1020105
          },
          'disposable-coffee-filters': {
            'code': 1020106
          }
        },
        'laundry': {
          'code': 1020200,
          'laundry-detergent': {
            'code': 1020201
          },
          'fabric-softener': {
            'code': 1020202
          },
          'dryer-sheets-and-balls': {
            'code': 1020203
          },
          'stain-removers': {
            'code': 1020204
          },
          'scent-boosters': {
            'code': 1020205
          },
          'bleach': {
            'code': 1020206
          },
          'washing-machine-cleaners': {
            'code': 1020207
          },
          'other-laundry-care': {
            'code': 1020208
          }
        },
        'cleaning-products': {
          'code': 1020300,
          'all-purpose-cleaners': {
            'code': 1020301
          },
          'cleaning-wipes': {
            'code': 1020302
          },
          'bleach': {
            'code': 1020303
          },
          'sponges-and-brushes': {
            'code': 1020304
          },
          'dishwashing-detergent': {
            'code': 1020305
          },
          'dish-soap': {
            'code': 1020306
          },
          'bathroom-cleaners': {
            'code': 1020307
          },
          'kitchen-cleaners': {
            'code': 1020308
          },
          'produce-wash': {
            'code': 1020309
          },
          'drain-cleaners': {
            'code': 1020310
          },
          'floor-cleaners': {
            'code': 1020311
          },
          'specialty-cleaners': {
            'code': 1020312
          },
          'glass-cleaners': {
            'code': 1020313
          }
        },
        'cleaning-tools': {
          'code': 1020400,
          'sponges-and-brushes': {
            'code': 1020401
          },
          'mops-and-accessories': {
            'code': 1020402
          },
          'dusting-tools-and-cloths': {
            'code': 1020403
          },
          'cleaning-gloves': {
            'code': 1020404
          },
          'brooms': {
            'code': 1020405
          },
          'bowl-brushes-and-plungers': {
            'code': 1020406
          },
          'dustbins': {
            'code': 1020407
          }
        },
        'food-storage-and-trash-bags': {
          'code': 1020500,
          'food-storage-bags': {
            'code': 1020501
          },
          'foil': {
            'code': 1020502
          },
          'food-storage-containers': {
            'code': 1020503
          },
          'plastic-wrap': {
            'code': 1020504
          },
          'wax-and-parchment-paper': {
            'code': 1020505
          },
          'trash-bags': {
            'code': 1020506
          }
        },
        'home-fragrance': {
          'code': 1020600,
          'air-fresheners': {
            'code': 1020601
          },
          'candles': {
            'code': 1020602
          },
          'fragrance-diffusers': {
            'code': 1020603
          }
        },
        'light-bulbs': {
          'code': 1020700
        },
        'insect-and-pest-control': {
          'code': 1020800,
          'indoor-pest-control': {
            'code': 1020801
          },
          'outdoor-pest-control': {
            'code': 1020802
          },
          'insect-repellent': {
            'code': 1020803
          }
        }
      },
      'personal-care': {
        'code': 1030000,
        'oral-and-personal-care': {
          'code': 1030100,
          'deodorant': {
            'code': 1030101
          },
          'ear-care': {
            'code': 1030102
          },
          'eye-care': {
            'code': 1030103
          },
          'feminine-care': {
            'code': 1030104
          },
          'toothbrushes': {
            'code': 1030105
          },
          'toothpaste': {
            'code': 1030106
          },
          'mouthwash': {
            'code': 1030107
          },
          'dental-floss': {
            'code': 1030108
          },
          'manual-toothbrushes': {
            'code': 1030109
          },
          'electric-toothbrushes': {
            'code': 1030110
          },
          'other-oral-care': {
            'code': 1030111
          },
          'razors': {
            'code': 1030112
          },
          'shaving-cream': {
            'code': 1030113
          },
          'waxing-and-hair-removal': {
            'code': 1030114
          },
          'safer-sex-and-contraceptives': {
            'code': 1030115
          },
          'cotton-balls-and-rounds': {
            'code': 1030116
          },
          'incontinence': {
            'code': 1030117
          },
          'wet-shave': {
            'code': 1030118
          },
          'electric-shavers': {
            'code': 1030119
          }
        },
        'tools-and-accessories': {
          'code': 1030200,
          'bath-sponges-and-tools': {
            'code': 1030201
          },
          'eye-masks': {
            'code': 1030202
          },
          'beauty-and-spa-tools': {
            'code': 1030203
          },
          'cotton-balls-and-rounds': {
            'code': 1030204
          },
          'mirrors': {
            'code': 1030205
          },
          'toiletry-kits-and-cases': {
            'code': 1030206
          },
          'tweezers': {
            'code': 1030207
          },
          'facial-tissues': {
            'code': 1030208
          },
          'nail-care-tools': {
            'code': 1030209
          },
          'top-beauty-tools-and-accessories': {
            'code': 1030210
          }
        },
        'hair-care-products': {
          'code': 1030300,
          'shampoos': {
            'code': 1030301
          },
          'conditioners': {
            'code': 1030302
          },
          'styling-products': {
            'code': 1030303
          },
          'scalp-treatments': {
            'code': 1030304
          },
          'hair-color': {
            'code': 1030305
          },
          'hair-loss-products': {
            'code': 1030306
          },
          'hair-perms-and-texturizers': {
            'code': 1030307
          },
          'hair-relaxers-and-treatments': {
            'code': 1030308
          },
          'multicultural-hair-care-products': {
            'code': 1030309
          },
          'innovative-hair-care': {
            'code': 1030310
          }
        },
        'hair-tools-and-accessories': {
          'code': 1030400,
          'brushes': {
            'code': 1030401
          },
          'dryers-irons-and-diffusers': {
            'code': 1030402
          },
          'hair-rollers': {
            'code': 1030403
          },
          'hair-accessories': {
            'code': 1030404
          },
          'haircutting-tools': {
            'code': 1030405
          },
          'combs': {
            'code': 1030406
          }
        },
        'makeup': {
          'code': 1030500,
          'body-art-and-makeup': {
            'code': 1030501
          },
          'makeup-brushes': {
            'code': 1030502
          },
          'face-makeup': {
            'code': 1030503
          },
          'lip-makeup': {
            'code': 1030504
          },
          'makeup-sets': {
            'code': 1030505
          },
          'eyeliner-and-brow-pencils': {
            'code': 1030506
          },
          'mascara-and-lashes': {
            'code': 1030507
          },
          'eye-shadow': {
            'code': 1030508
          },
          'makeup-sponges': {
            'code': 1030509
          },
          'makeup-tools': {
            'code': 1030510
          }
        },
        'nail-care': {
          'code': 1030600,
          'cuticle-care': {
            'code': 1030601
          },
          'nail-care-tools': {
            'code': 1030602
          },
          'nail-polish': {
            'code': 1030603
          },
          'nail-polish-remover': {
            'code': 1030604
          }
        },
        'skin-care': {
          'code': 1030700,
          'bath-salts-and-bubbles': {
            'code': 1030701
          },
          'makeup-remover': {
            'code': 1030702
          },
          'hand-soap': {
            'code': 1030703
          },
          'lip-care': {
            'code': 1030704
          },
          'suncare': {
            'code': 1030705
          },
          'toners-and-astringents': {
            'code': 1030706
          },
          'body-powder': {
            'code': 1030707
          },
          'body-moisturizers': {
            'code': 1030708
          },
          'massage-oil-and-aromatherapy': {
            'code': 1030709
          },
          'hand-sanitizers-and-wipes': {
            'code': 1030710
          },
          'facial-cleansers': {
            'code': 1030711
          },
          'facial-moisturizers-and-treatment': {
            'code': 1030712
          },
          'soap-and-body-wash': {
            'code': 1030713
          },
          'shaving-cream': {
            'code': 1030714
          }
        },
        'mens-essentials': {
          'code': 1030800,
          'beard-and-shave': {
            'code': 1030801
          },
          'body': {
            'code': 1030802
          },
          'face': {
            'code': 1030803
          },
          'hair': {
            'code': 1030804
          },
          'cologne': {
            'code': 1030805
          },
          'wellness': {
            'code': 1030806
          }
        }
      },
      'health': {
        'code': 1040000,
        'medicine-cabinet': {
          'code': 1040100,
          'allergy-sinus-and-asthma': {
            'code': 1040101
          },
          'childrens-medicine': {
            'code': 1040102
          },
          'cold-sore-and-blister-treatments': {
            'code': 1040103
          },
          'cough-and-cold': {
            'code': 1040104
          },
          'diabetes': {
            'code': 1040105
          },
          'digestion-and-nausea': {
            'code': 1040106
          },
          'foot-healthcare': {
            'code': 1040107
          },
          'incontinence': {
            'code': 1040108
          },
          'pain-relievers': {
            'code': 1040109
          },
          'sleep-and-snoring': {
            'code': 1040110
          },
          'smoking-cessation': {
            'code': 1040111
          },
          'therapeutic-ointments-and-powders': {
            'code': 1040112
          },
          'thermometers': {
            'code': 1040113
          },
          'ear-care': {
            'code': 1040114
          },
          'eye-care': {
            'code': 1040115
          }
        },
        'medical-supplies-and-equipment': {
          'code': 1040200,
          'pills-cases-and-splitters': {
            'code': 1040201
          },
          'bathroom-aids-and-safety': {
            'code': 1040202
          },
          'beds-and-accessories': {
            'code': 1040203
          },
          'braces-splints-and-slings': {
            'code': 1040204
          },
          'daily-living-aids': {
            'code': 1040205
          },
          'mobility-aids-and-equipment': {
            'code': 1040206
          },
          'occupational-and-physical-therapy-aids': {
            'code': 1040207
          },
          'pen-lights': {
            'code': 1040208
          },
          'tests': {
            'code': 1040209
          },
          'first-aid': {
            'code': 1040210
          },
          'dehumidifiers': {
            'code': 1040211
          },
          'humidifiers': {
            'code': 1040212
          },
          'health-monitors': {
            'code': 1040213
          }
        },
        'sports-nutrition-and-diet': {
          'code': 1040300,
          'protein-and-meal-replacement': {
            'code': 1040301
          },
          'energy-and-endurance': {
            'code': 1040302
          },
          'weight-loss-supplements-and-cleanses': {
            'code': 1040303
          },
          'mass-gainers': {
            'code': 1040304
          },
          'amino-acids-and-creatine': {
            'code': 1040305
          },
          'on-the-go-nutrition': {
            'code': 1040306
          },
          'slimfast-campaign': {
            'code': 1040307
          }
        },
        'vitamins-and-dietary-supplements': {
          'code': 1040400,
          'minerals': {
            'code': 1040401
          },
          'supplements': {
            'code': 1040402
          },
          'letter-vitamins': {
            'code': 1040403
          },
          'fish-oils-and-omegas': {
            'code': 1040404
          },
          'probiotics': {
            'code': 1040405
          },
          'multivitamins': {
            'code': 1040406
          },
          'protein-and-meal-replacements': {
            'code': 1040407
          },
          'pill-cases-and-splitters': {
            'code': 1040408
          },
          'amino-acids-and-creatine': {
            'code': 1040409
          },
          'weight-loss-supplements': {
            'code': 1040410
          },
          'new-and-noteworthy-vitamins-and-supplements': {
            'code': 1040411
          },
          'herbs-and-homeopathy': {
            'code': 1040412
          }
        }
      },
      'baby': {
        'code': 1050000,
        'baby-food-and-formula': {
          'code': 1050100,
          'baby-and-toddler-snacks': {
            'code': 1050101
          },
          'baby-food': {
            'code': 1050102
          },
          'baby-formula': {
            'code': 1050103
          },
          'toddler-juices-and-milk': {
            'code': 1050104
          }
        },
        'diapering': {
          'code': 1050200,
          'diapers': {
            'code': 1050201
          },
          'baby-wipes': {
            'code': 1050202
          },
          'baby-wipe-holders-and-warmers': {
            'code': 1050203
          },
          'changing-table-accessories': {
            'code': 1050204
          },
          'cloth-diapers': {
            'code': 1050205
          },
          'cloth-diaper-accessories': {
            'code': 1050206
          },
          'diaper-bags': {
            'code': 1050207
          },
          'diaper-cakes': {
            'code': 1050208
          },
          'diaper-changing-pads': {
            'code': 1050209
          },
          'diaper-creams-and-ointments': {
            'code': 1050210
          },
          'diaper-pails-and-refills': {
            'code': 1050211
          },
          'diaper-stackers-and-caddies': {
            'code': 1050212
          }
        },
        'baby-gear': {
          'code': 1050300,
          'baby-monitors': {
            'code': 1050301
          },
          'baby-seats': {
            'code': 1050302
          },
          'bouncers-and-walkers': {
            'code': 1050303
          },
          'car-seats': {
            'code': 1050304
          },
          'carriers': {
            'code': 1050305
          },
          'harnesses-and-leashes': {
            'code': 1050306
          },
          'play-mats-and-activity-gyms': {
            'code': 1050307
          },
          'playards-and-travel-beds': {
            'code': 1050308
          },
          'strollers': {
            'code': 1050309
          }
        },
        'baby-gear-accessories': {
          'code': 1050400,
          'car-seat-and-stroller-toys': {
            'code': 1050401
          },
          'car-seat-accessories': {
            'code': 1050402
          },
          'carrier-accessories': {
            'code': 1050403
          },
          'crib-netting': {
            'code': 1050404
          },
          'shopping-cart-covers': {
            'code': 1050405
          },
          'stroller-accessories': {
            'code': 1050406
          }
        },
        'feeding-and-nursing': {
          'code': 1050500,
          'baby-bottles-and-accessories': {
            'code': 1050501
          },
          'baby-food': {
            'code': 1050502
          },
          'baby-formula': {
            'code': 1050503
          },
          'bibs-and-burp-cloths': {
            'code': 1050504
          },
          'breast-pump': {
            'code': 1050505
          },
          'breast-pump-accessories': {
            'code': 1050506
          },
          'food-and-formula-prep': {
            'code': 1050507
          },
          'food-storage-and-on-the-go': {
            'code': 1050508
          },
          'highchairs-and-boosters': {
            'code': 1050509
          },
          'kids-tabletop': {
            'code': 1050510
          },
          'lunch-bags': {
            'code': 1050511
          },
          'nursing-accessories': {
            'code': 1050512
          },
          'pacifiers-and-teethers': {
            'code': 1050513
          },
          'sippys-and-cups': {
            'code': 1050514
          }
        },
        'babyproofing': {
          'code': 1050600,
          'baby-monitors': {
            'code': 1050601
          },
          'bath-safety': {
            'code': 1050602
          },
          'edge-and-corner-guards': {
            'code': 1050603
          },
          'electrical-safety': {
            'code': 1050604
          },
          'gates-and-rails': {
            'code': 1050605
          },
          'kitchen-safety': {
            'code': 1050606
          },
          'outdoor-safety': {
            'code': 1050607
          },
          'rails-and-rail-guards': {
            'code': 1050608
          },
          'sleep-positioners': {
            'code': 1050609
          }
        },
        'baby-care': {
          'code': 1050700,
          'baby-bubble-bath': {
            'code': 1050701
          },
          'baby-oil-and-lotion': {
            'code': 1050702
          },
          'baby-powder': {
            'code': 1050703
          },
          'baby-shampoo-and-wash': {
            'code': 1050704
          }
        },
        'potty-training': {
          'code': 1050800,
          'potties': {
            'code': 1050801
          },
          'potty-training-aids': {
            'code': 1050802
          },
          'seat-covers': {
            'code': 1050803
          },
          'step-stools': {
            'code': 1050804
          },
          'training-pants': {
            'code': 1050805
          }
        },
        'baby-bathing': {
          'code': 1050900,
          'baby-bath-accessories': {
            'code': 1050901
          },
          'baby-grooming': {
            'code': 1050902
          },
          'baby-tubs': {
            'code': 1050903
          },
          'baby-washcloths-and-towels': {
            'code': 1050904
          },
          'bath-toys': {
            'code': 1050905
          }
        },
        'baby-gifts': {
          'code': 1051000,
          'baby-gift-sets-and-baskets': {
            'code': 1051001
          },
          'keepsakes-and-albums': {
            'code': 1051002
          },
          'new-mom-gifts': {
            'code': 1051003
          },
          'toy-banks': {
            'code': 1051004
          }
        }
      },
      'pet-supplies': {
        'code': 1060000,
        'dog-supplies': {
          'code': 1060100,
          'collars-harnesses-and-leashes': {
            'code': 1060101
          },
          'dog-apparel': {
            'code': 1060102
          },
          'dog-beds': {
            'code': 1060103
          },
          'dog-bowls-and-feeders': {
            'code': 1060104
          },
          'travel-supplies': {
            'code': 1060105
          },
          'cleaning-supplies': {
            'code': 1060106
          },
          'crates-and-kennels': {
            'code': 1060107
          },
          'flea-and-tick-control': {
            'code': 1060108
          },
          'dog-food': {
            'code': 1060109
          },
          'grooming': {
            'code': 1060110
          },
          'dog-houses': {
            'code': 1060111
          },
          'medication-and-health-supplies': {
            'code': 1060112
          },
          'modern-furniture': {
            'code': 1060113
          },
          'dog-technology': {
            'code': 1060114
          },
          'toys': {
            'code': 1060115
          },
          'training-and-behavior': {
            'code': 1060116
          },
          'treats': {
            'code': 1060117
          },
          'gates-and-ramps': {
            'code': 1060118
          },
          'poop-bags-and-housebreaking': {
            'code': 1060119
          }
        },
        'cat-supplies': {
          'code': 1060200,
          'cat-beds': {
            'code': 1060201
          },
          'carriers': {
            'code': 1060202
          },
          'cleaning-supplies': {
            'code': 1060203
          },
          'flea-and-tick-control': {
            'code': 1060204
          },
          'cat-food': {
            'code': 1060205
          },
          'cat-grooming': {
            'code': 1060206
          },
          'health-supplies': {
            'code': 1060207
          },
          'litter': {
            'code': 1060208
          },
          'litter-boxes': {
            'code': 1060209
          },
          'scratchers': {
            'code': 1060210
          },
          'cat-toys': {
            'code': 1060211
          },
          'training-and-behavior-aids': {
            'code': 1060212
          },
          'cat-treats': {
            'code': 1060213
          },
          'cat-trees-and-condos': {
            'code': 1060214
          },
          'collars-harnesses-and-leashes': {
            'code': 1060215
          },
          'feeding-and-watering-supplies': {
            'code': 1060216
          }
        }
      },
      'office-supplies': {
        'code': 1070000,
        'pens-pencils-and-markers': {
          'code': 1070100
        },
        'tape-and-adhesives': {
          'code': 1070200
        },
        'office-paper': {
          'code': 1070300
        },
        'presentation-boards': {
          'code': 1070400
        },
        'workspace-organizers': {
          'code': 1070500
        },
        'staplers-and-punches': {
          'code': 1070600
        },
        'labels-indexes-and-stamps': {
          'code': 1070700
        },
        'filing-products': {
          'code': 1070800
        },
        'binders-and-binding-systems': {
          'code': 1070900
        },
        'scissors-cutters-and-measuring-devices': {
          'code': 1071000
        },
        'envelopes-and-shipping-supplies': {
          'code': 1071100
        },
        'calendars-and-planners': {
          'code': 1071200
        },
        'stationary': {
          'code': 1071300
        }
      }
    },
    'beauty': {
      'code': 2000000,
      'skin-care': {
        'code': 2010000,
        'skin-and-toner': {
          'code': 2010100,
          'skin': {
            'code': 2010101
          },
          'toner': {
            'code': 2010102
          }
        },
        'mist': {
          'code': 2010200
        },
        'face-moisturizer-and-treatment': {
          'code': 2010300,
          'lotion': {
            'code': 2010301
          },
          'emulsion': {
            'code': 2010302
          },
          'oil': {
            'code': 2010303
          },
          'essence': {
            'code': 2010304
          },
          'ample': {
            'code': 2010305
          },
          'serum': {
            'code': 2010306
          }
        },
        'cream-and-gel': {
          'code': 2010400
        },
        'mask-and-pack': {
          'code': 2010500
        },
        'eye-care': {
          'code': 2010600
        },
        'lip-care': {
          'code': 2010700
        },
        'sun-care': {
          'code': 2010800,
          'stick-and-balm': {
            'code': 2010801
          },
          'cream-and-gel': {
            'code': 2010802
          }
        }
      },
      'cleansing-and-peeling': {
        'code': 2020000,
        'cleansing-foam-and-gel': {
          'code': 2020100
        },
        'cleansing-water': {
          'code': 2020200
        },
        'cleansing-oil': {
          'code': 2020300
        },
        'cleansing-lotion-and-cream': {
          'code': 2020400
        },
        'cleansing-soap': {
          'code': 2020500
        },
        'cleansing-wipe': {
          'code': 2020600
        },
        'lip-and-eye-cleanser': {
          'code': 2020700
        },
        'scrubs-and-peeling': {
          'code': 2020800
        }
      },
      'sun-care': {
        'code': 2030000,
        'face': {
          'code': 2030100,
          'stick-and-balm': {
            'code': 2030101
          },
          'cream-and-gel': {
            'code': 2030102
          }
        },
        'body': {
          'code': 2030200,
          'stick-and-balm': {
            'code': 2030201
          },
          'cream-and-gel': {
            'code': 2030202
          }
        }
      },
      'makeup': {
        'code': 2040000,
        'face': {
          'code': 2040100,
          'makeup-base': {
            'code': 2040101
          },
          'primer': {
            'code': 2040102
          },
          'bb-and-cc-cream': {
            'code': 2040103
          },
          'foundation': {
            'code': 2040104
          },
          'cushion-and-powder-and-pact': {
            'code': 2040105
          },
          'concealer': {
            'code': 2040106
          },
          'blusher': {
            'code': 2040107
          },
          'highlighter-and-shading': {
            'code': 2040108
          }
        },
        'eye': {
          'code': 2040200,
          'eyeshadow': {
            'code': 2040201
          },
          'eyeliner': {
            'code': 2040202
          },
          'eyebrow': {
            'code': 2040203
          },
          'mascara': {
            'code': 2040204
          }
        },
        'lip': {
          'code': 2040300,
          'lipstick': {
            'code': 2040301
          },
          'lip-tint': {
            'code': 2040302
          },
          'lip-glosse': {
            'code': 2040303
          },
          'lip-treatment-and-balm': {
            'code': 2040304
          }
        },
        'makeup-brush-and-applicator': {
          'code': 2040400
        }
      },
      'body-care': {
        'code': 2050000,
        'body-wash': {
          'code': 2050100
        },
        'body-lotion': {
          'code': 2050200
        },
        'body-cream-and-gel': {
          'code': 2050300
        },
        'body-oil-and-essence': {
          'code': 2050400
        },
        'body-scrub': {
          'code': 2050500
        },
        'body-mist': {
          'code': 2050600
        },
        'hand-and-foot-treatment': {
          'code': 2050700
        },
        'bath-salt-and-bubble': {
          'code': 2050800
        },
        'feminine-care': {
          'code': 2050900
        },
        'deodorant': {
          'code': 2051000
        },
        'other-body-product': {
          'code': 2051100
        }
      },
      'hair-care': {
        'code': 2060000,
        'shampoo': {
          'code': 2060100
        },
        'conditioner-and-treatment': {
          'code': 2060200
        },
        'essence-and-oil': {
          'code': 2060300
        },
        'mist': {
          'code': 2060400
        },
        'styling-product': {
          'code': 2060500
        },
        'other-hair-product': {
          'code': 2060600
        }
      },
      'fragrance': {
        'code': 2070000,
        'women': {
          'code': 2070100
        },
        'men': {
          'code': 2070200
        },
        'fragrance-set': {
          'code': 2070300
        }
      },
      'candle-and-diffuser': {
        'code': 2080000,
        'candle': {
          'code': 2080100
        },
        'diffuser': {
          'code': 2080200
        }
      },
      'mens-grooming': {
        'code': 2090000,
        'skin': {
          'code': 2090100
        },
        'body': {
          'code': 2090200
        },
        'hair': {
          'code': 2090300
        },
        'makeup': {
          'code': 2090400
        },
        'cologne-and-deodorant': {
          'code': 2090500
        },
        'shave': {
          'code': 2090600
        }
      },
      'k-beauty': {
        'code': 2100000
      }
    },
    'home-and-living': {
      'code': 3000000,
      'furniture': {
        'code': 3010000,
        'bedding-basics': {
          'code': 3010100
        },
        'bedding': {
          'code': 3010200
        },
        'kids-bedding': {
          'code': 3010300
        }
      },
      'bath': {
        'code': 3020000,
        'bath-towels': {
          'code': 3020100
        },
        'bath-rugs-and-mats': {
          'code': 3020200
        },
        'beach-towels': {
          'code': 3020300
        },
        'shower-curtains-and-liners': {
          'code': 3020400
        },
        'shower-curtain-rods-and-hardware': {
          'code': 3020500
        },
        'shower-and-bathtub-caddies': {
          'code': 3020600
        },
        'bath-accessories': {
          'code': 3020700
        },
        'bathroom-storage-and-organization': {
          'code': 3020800
        },
        'bathroom-racks-and-shelves': {
          'code': 3020900
        },
        'bathroom-cabinets': {
          'code': 3021000
        },
        'bathroom-waste-baskets': {
          'code': 3021100
        },
        'bathroom-mirrors': {
          'code': 3021200
        }
      },
      'kitchen': {
        'code': 3030000,
        'kitchen-appliances': {
          'code': 3030100,
          'coffee-makers': {
            'code': 3030101
          },
          'blenders': {
            'code': 3030102
          },
          'toaster-ovens': {
            'code': 3030103
          },
          'mixers': {
            'code': 3030104
          },
          'food-processors': {
            'code': 3030105
          },
          'slow-cookers': {
            'code': 3030106
          },
          'microwaves': {
            'code': 3030107
          }
        },
        'specialty-appliances': {
          'code': 3030200,
          'rice-cookers': {
            'code': 3030201
          },
          'juicers': {
            'code': 3030202
          },
          'bread-machines': {
            'code': 3030203
          },
          'waffle-irons': {
            'code': 3030204
          },
          'ice-cream-machines': {
            'code': 3030205
          }
        },
        'cookware': {
          'code': 3030300,
          'skillets-and-frying-pans': {
            'code': 3030301
          },
          'cookware-sets': {
            'code': 3030302
          },
          'dutch-ovens': {
            'code': 3030303
          },
          'pressure-cookers': {
            'code': 3030304
          },
          'specialty-cookware': {
            'code': 3030305
          },
          'grill-pans': {
            'code': 3030306
          },
          'roasting-pans': {
            'code': 3030307
          }
        },
        'bakeware': {
          'code': 3030400,
          'baking-sheets-and-mats': {
            'code': 3030401
          },
          'cupcake-and-muffin-pans': {
            'code': 3030402
          },
          'cake-pans': {
            'code': 3030403
          },
          'pie-dishes-and-tart-pans': {
            'code': 3030404
          },
          'loaf-and-bread-pans': {
            'code': 3030405
          }
        },
        'utensils-and-gadgets': {
          'code': 3030500,
          'utensils-tongs-and-whisks': {
            'code': 3030501
          },
          'choppers-graters-and-slicers': {
            'code': 3030502
          },
          'measurers-and-timing-tools': {
            'code': 3030503
          },
          'kitchen-knives': {
            'code': 3030504
          },
          'cutting-boards-and-chopping-blocks': {
            'code': 3030505
          },
          'strainers-and-colanders': {
            'code': 3030506
          },
          'ice-cube-trays-and-molds': {
            'code': 3030507
          },
          'can-openers': {
            'code': 3030508
          },
          'mixing-and-prep-bowls': {
            'code': 3030509
          }
        },
        'kitchen-storage': {
          'code': 3030600
        },
        'dish-towels-and-aprons': {
          'code': 3030700
        },
        'oven-mitts-and-pot-holders': {
          'code': 3030800,
          'dinnerware': {
            'code': 3030801
          },
          'flatware': {
            'code': 3030802
          },
          'glassware-and-drinkware': {
            'code': 3030803
          },
          'coffee-mugs-and-tea-cups': {
            'code': 3030804
          },
          'table-linens': {
            'code': 3030805
          },
          'steak-knives': {
            'code': 3030806
          },
          'home-bar-tools': {
            'code': 3030807
          },
          'cheese-boards-and-knives': {
            'code': 3030808
          },
          'salt-and-pepper-shakers': {
            'code': 3030809
          }
        }
      },
      'decor': {
        'code': 3040000,
        'home-accents': {
          'code': 3040100,
          'picture-frames': {
            'code': 3040101
          },
          'decorative-pillows': {
            'code': 3040102
          },
          'throw-blankets': {
            'code': 3040103
          },
          'vases': {
            'code': 3040104
          },
          'faux-flowers-and-plants': {
            'code': 3040105
          },
          'candles': {
            'code': 3040106
          },
          'candle-holders-and-lanterns': {
            'code': 3040107
          },
          'clocks': {
            'code': 3040108
          },
          'decorative-trays': {
            'code': 3040109
          }
        },
        'wall-decor': {
          'code': 3040200,
          'decorative-mirrors': {
            'code': 3040201
          },
          'canvas-art': {
            'code': 3040202
          },
          'wall-accents': {
            'code': 3040203
          },
          'framed-art': {
            'code': 3040204
          },
          'decorative-shelves': {
            'code': 3040205
          }
        },
        'rugs': {
          'code': 3040300
        },
        'window-treatments': {
          'code': 3040400
        },
        'lighting-and-ceiling-fans': {
          'code': 3040500,
          'floor-lamps': {
            'code': 3040501
          },
          'table-lamps': {
            'code': 3040502
          },
          'desk-lamps': {
            'code': 3040503
          },
          'chandeliers-and-pendants': {
            'code': 3040504
          },
          'flush-mount-lighting': {
            'code': 3040505
          },
          'sconces': {
            'code': 3040506
          },
          'swing-arm-lamps': {
            'code': 3040507
          },
          'ceiling-fans': {
            'code': 3040508
          }
        }
      },
      'outdoor': {
        'code': 3050000,
        'outdoor-furniture': {
          'code': 3050100,
          'bistro-sets': {
            'code': 3050101
          },
          'patio-lounge-seating': {
            'code': 3050102
          },
          'garden-stools': {
            'code': 3050103
          }
        },
        'outdoor-decor': {
          'code': 3050200,
          'string-lights': {
            'code': 3050201
          },
          'outdoor-cushions-and-pillows': {
            'code': 3050202
          }
        },
        'outdoor-appliances': {
          'code': 3050300,
          'grills': {
            'code': 3050301
          },
          'smokers': {
            'code': 3050302
          }
        },
        'planters': {
          'code': 3050400,
          'planter-pots': {
            'code': 3050401
          },
          'hanging-planters': {
            'code': 3050402
          },
          'rail-planters': {
            'code': 3050403
          },
          'window-boxes': {
            'code': 3050404
          }
        },
        'gardening': {
          'code': 3050500,
          'gardening-tools': {
            'code': 3050501
          },
          'house-plants': {
            'code': 3050502
          },
          'garden-flowers': {
            'code': 3050503
          },
          'grow-kits': {
            'code': 3050504
          },
          'seeds': {
            'code': 3050505
          }
        }
      },
      'storage-and-organization': {
        'code': 3060000,
        'closet-organization': {
          'code': 3060100,
          'hangers': {
            'code': 3060101
          },
          'shoe-racks-and-organizers': {
            'code': 3060102
          },
          'closet-systems': {
            'code': 3060103
          }
        },
        'laundry-essentials': {
          'code': 3060200,
          'garment-racks': {
            'code': 3060201
          },
          'drying-racks': {
            'code': 3060202
          },
          'laundry-baskets': {
            'code': 3060203
          },
          'hampers': {
            'code': 3060204
          }
        },
        'jewelry-organization': {
          'code': 3060300,
          'jewelry-armoires': {
            'code': 3060301
          },
          'jewelry-boxes-and-organizers': {
            'code': 3060302
          }
        },
        'racks-and-shelves': {
          'code': 3060400
        },
        'storage-containers-and-drawers': {
          'code': 3060500
        },
        'seasonal-storage': {
          'code': 3060600
        },
        'trash-cans-and-recycling-bins': {
          'code': 3060700
        }
      },
      'kids': {
        'code': 3070000,
        'beds': {
          'code': 3070100
        },
        'bunk-bed': {
          'code': 3070200
        },
        'mattresses-and-box-springs': {
          'code': 3070300
        },
        'nightstands': {
          'code': 3070400
        },
        'dressers-and-chests': {
          'code': 3070500
        },
        'seating': {
          'code': 3070600
        },
        'tables-and-desks': {
          'code': 3070700
        },
        'table-and-chair-sets': {
          'code': 3070800
        },
        'step-stools': {
          'code': 3070900
        },
        'toy-storage': {
          'code': 3071000
        },
        'room-decor': {
          'code': 3071100
        }
      },
      'appliiance': {
        'code': 3080000,
        'heating-and-cooling': {
          'code': 3080100,
          'air-conditioners': {
            'code': 3080101
          },
          'household-fans': {
            'code': 3080102
          },
          'ceiling-fans': {
            'code': 3080103
          },
          'air-purifiers': {
            'code': 3080104
          },
          'dehumidifiers': {
            'code': 3080105
          },
          'space-heaters': {
            'code': 3080106
          }
        },
        'household-appliances': {
          'code': 3080200,
          'refrigerators': {
            'code': 3080201
          },
          'mini-refrigerators': {
            'code': 3080202
          },
          'wine-refrigerators': {
            'code': 3080203
          },
          'washers-and-dryers': {
            'code': 3080204
          },
          'dishwashers': {
            'code': 3080205
          }
        },
        'kitchen-appliances': {
          'code': 3080300,
          'coffee-makers': {
            'code': 3080301
          },
          'blenders': {
            'code': 3080302
          },
          'toaster-ovens': {
            'code': 3080303
          },
          'mixers': {
            'code': 3080304
          },
          'food-processors': {
            'code': 3080305
          },
          'slow-cookers': {
            'code': 3080306
          },
          'microwaves': {
            'code': 3080307
          },
          'rice-cookers': {
            'code': 3080308
          },
          'juicers': {
            'code': 3080309
          },
          'bread-machines': {
            'code': 3080310
          },
          'waffle-irons': {
            'code': 3080311
          },
          'ice-cream-machines': {
            'code': 3080312
          },
          'specialty-appliances': {
            'code': 3080313
          }
        },
        'vacuums-and-floor-care': {
          'code': 3080400,
          'vacuums': {
            'code': 3080401
          },
          'carpet-cleaners': {
            'code': 3080402
          },
          'steam-cleaners': {
            'code': 3080403
          },
          'carpet-sweepers': {
            'code': 3080404
          }
        }
      }
    },
    'electronics': {
      'code': 4000000,
      'tv-and-home-theater': {
        'code': 4010000,
        'televisions': {
          'code': 4010100,
          '4k-tvs': {
            'code': 4010101
          },
          'smart-tvs': {
            'code': 4010102
          }
        },
        'media-streaming-devices': {
          'code': 4010200
        },
        'blu-ray-players': {
          'code': 4010300
        },
        'home-theater-systems': {
          'code': 4010400
        },
        'speakers': {
          'code': 4010500,
          'wireless-and-bluetooth-speakers': {
            'code': 4010501
          },
          'bookshelf-speakers': {
            'code': 4010502
          },
          'floor-speakers': {
            'code': 4010503
          },
          'in-wall-and-in-ceiling-speakers': {
            'code': 4010504
          },
          'center-channel-speakers': {
            'code': 4010505
          },
          'subwoofer': {
            'code': 4010506
          }
        },
        'sound-bars': {
          'code': 4010600,
          'smart-sound-bars': {
            'code': 4010601
          }
        },
        'receivers-and-amplifiers': {
          'code': 4010700
        },
        'accessories': {
          'code': 4010800,
          'cables': {
            'code': 4010801
          },
          'speaker-accessories': {
            'code': 4010802
          },
          'remote-controls': {
            'code': 4010803
          },
          'tv-mounts': {
            'code': 4010804
          },
          'hdtv-antennas': {
            'code': 4010805
          },
          'cleaning-accessories': {
            'code': 4010806
          }
        },
        'projectors-and-screens': {
          'code': 4010900
        }
      },
      'computers-and-tablets': {
        'code': 4020000,
        'laptops': {
          'code': 4020100,
          'apple-macbook': {
            'code': 4020101
          },
          'windows-laptops': {
            'code': 4020102
          },
          'chromebooks': {
            'code': 4020103
          },
          '2-in-1-laptops': {
            'code': 4020104
          }
        },
        'all-in-one-desktop-computers': {
          'code': 4020200,
          'apple-imac': {
            'code': 4020201
          },
          'windows-desktops': {
            'code': 4020202
          }
        },
        'computer-accessories': {
          'code': 4020300,
          'wireless-mice': {
            'code': 4020301
          },
          'wireless-keyboards': {
            'code': 4020302
          },
          'printers-and-ink': {
            'code': 4020303
          },
          'external-hard-drives': {
            'code': 4020304
          },
          'usb-flash-drives': {
            'code': 4020305
          },
          'laptop-bags-and-cases': {
            'code': 4020306
          }
        },
        'tablets': {
          'code': 4020400,
          'apple-ipad': {
            'code': 4020401
          },
          'samsung-galaxy-tablets': {
            'code': 4020402
          },
          'android-tablets': {
            'code': 4020403
          },
          '4g-lte-tablets': {
            'code': 4020404
          }
        },
        'tablet-accessories': {
          'code': 4020500,
          'cases-covers-and-keyboard-folios': {
            'code': 4020501
          },
          'stands-and-mounts': {
            'code': 4020502
          },
          'chargers-cables-and-adapters': {
            'code': 4020503
          },
          'tablet-stylus-pens': {
            'code': 4020504
          },
          'tablet-keyboards': {
            'code': 4020505
          },
          'tablet-docking-stations': {
            'code': 4020506
          },
          'tablet-screen-protectors': {
            'code': 4020507
          },
          'portable-chargers-and-power-packs': {
            'code': 4020508
          }
        }
      },
      'audio': {
        'code': 4030000,
        'headphones': {
          'code': 4030100,
          'noise-cancelling': {
            'code': 4030101
          },
          'true-wireless-earbuds': {
            'code': 4030102
          },
          'wireless-headphones': {
            'code': 4030103
          },
          'over-ear-headphones': {
            'code': 4030104
          },
          'in-ear-headphones': {
            'code': 4030105
          },
          'sports-headphones': {
            'code': 4030106
          }
        },
        'bluetooth-speakers': {
          'code': 4030200
        },
        'speakers': {
          'code': 4030300,
          'wireless-and-bluetooth-speakers': {
            'code': 4030301
          },
          'bookshelf-speakers': {
            'code': 4030302
          },
          'floor-speakers': {
            'code': 4030303
          },
          'subwoofer': {
            'code': 4030304
          }
        },
        'sound-bars': {
          'code': 4030400
        },
        'home-theater-systems': {
          'code': 4030500
        },
        'receivers-and-amplifiers': {
          'code': 4030600
        },
        'dolby-atmos-sound': {
          'code': 4030700
        }
      },
      'smart-home': {
        'code': 4040000,
        'voice-assistants': {
          'code': 4040100,
          'google-home': {
            'code': 4040101
          },
          'apple-homepod': {
            'code': 4040102
          }
        },
        'smart-accessories': {
          'code': 4040200,
          'dimmers-and-switches': {
            'code': 4040201
          },
          'sensors-and-motion-detectors': {
            'code': 4040202
          },
          'security-cameras': {
            'code': 4040203
          },
          'smart-lighting': {
            'code': 4040204
          },
          'smart-plugs': {
            'code': 4040205
          }
        },
        'wi-fi-and-networking': {
          'code': 4040300,
          'wireless-routers': {
            'code': 4040301
          },
          'modems': {
            'code': 4040302
          },
          'mesh-wi-fi-systems': {
            'code': 4040303
          },
          'wi-fi-range-extenders': {
            'code': 4040304
          },
          'networking-cables': {
            'code': 4040305
          }
        }
      },
      'wearable-tech': {
        'code': 4050000,
        'activity-trackers': {
          'code': 4050100
        },
        'smart-watches': {
          'code': 4050200
        },
        'wearable-cameras': {
          'code': 4050300
        },
        'wearable-tech-accessories': {
          'code': 4050400
        },
        'featured-brands': {
          'code': 4050500
        }
      },
      'cameras': {
        'code': 4060000,
        'cameras-and-lenses': {
          'code': 4060100,
          'dslr-cameras': {
            'code': 4060101
          },
          'mirrorless-cameras': {
            'code': 4060102
          },
          'instant-print-cameras': {
            'code': 4060103
          },
          'camera-lenses': {
            'code': 4060104
          }
        },
        'camera-accessories': {
          'code': 4060200,
          'memory-cards': {
            'code': 4060201
          },
          'camera-bags-cases-and-straps': {
            'code': 4060202
          },
          'camera-batteries-and-power': {
            'code': 4060203
          },
          'flashes-and-lighting': {
            'code': 4060204
          },
          'lens-filters': {
            'code': 4060205
          },
          'camera-cleaning-equipment': {
            'code': 4060206
          },
          'film': {
            'code': 4060207
          },
          'tripods-and-monopods': {
            'code': 4060208
          }
        },
        'featured-brands': {
          'code': 4060300
        }
      },
      'toys-and-games': {
        'code': 4070000,
        'consoles-and-accessories': {
          'code': 4070100,
          'nintendo': {
            'code': 4070101
          },
          'playstation': {
            'code': 4070102
          },
          'xbox': {
            'code': 4070103
          }
        },
        'pc-gaming': {
          'code': 4070200,
          'laptops': {
            'code': 4070201
          },
          'desktops': {
            'code': 4070202
          },
          'gaming-keyboards': {
            'code': 4070203
          },
          'gaming-mice': {
            'code': 4070204
          }
        },
        'arvr': {
          'code': 4070300
        },
        'smart-toys': {
          'code': 4070400
        },
        'drones': {
          'code': 4070500
        }
      },
      'cellphone': {
        'code': 4080000,
        'cases-and-covers': {
          'code': 4080100
        },
        'cables': {
          'code': 4080200
        },
        'portable-chargers-and-power-packs': {
          'code': 4080300
        }
      }
    },
    'sports-fitness-outdoor': {
      'code': 5000000,
      'exercise-and-fitness': {
        'code': 5010000,
        'cardio-equipment': {
          'code': 5010100
        },
        'strength-training-equipment': {
          'code': 5010200
        },
        'training-apparel': {
          'code': 5010300,
          'towels': {
            'code': 5010301
          },
          'cross-training-shoes': {
            'code': 5010302
          },
          'compression-shorts': {
            'code': 5010303
          },
          'compression-tops': {
            'code': 5010304
          },
          'socks': {
            'code': 5010305
          },
          'sports-bras': {
            'code': 5010306
          },
          'wristbands-and-sweatbands': {
            'code': 5010307
          }
        },
        'training-and-recovery': {
          'code': 5010400
        },
        'yoga-and-studio': {
          'code': 5010500,
          'yoga-and-studio-accessories': {
            'code': 5010501
          },
          'foam-blocks': {
            'code': 5010502
          },
          'mat-bags': {
            'code': 5010503
          },
          'pilates-reformers': {
            'code': 5010504
          },
          'resistance-bands': {
            'code': 5010505
          },
          'yoga-blankets-and-cushions': {
            'code': 5010506
          },
          'yoga-mats': {
            'code': 5010507
          },
          'yoga-straps': {
            'code': 5010508
          },
          'yoga-towels': {
            'code': 5010509
          }
        },
        'sporting-good-accessories': {
          'code': 5010600,
          'water-bottles': {
            'code': 5010601
          },
          'sports-sunglasses': {
            'code': 5010602
          },
          'trophies-medals-and-awards': {
            'code': 5010603
          },
          'wristbands-and-sweatbands': {
            'code': 5010604
          },
          'air-pumps': {
            'code': 5010605
          },
          'ball-carts-and-racks': {
            'code': 5010606
          },
          'flashlights-and-headlamps': {
            'code': 5010607
          },
          'hand-and-foot-warmers': {
            'code': 5010608
          },
          'hydration': {
            'code': 5010609
          },
          'mouthguards': {
            'code': 5010610
          },
          'pads-guards-and-protective-gear': {
            'code': 5010611
          },
          'whristle-and-megaphones': {
            'code': 5010612
          },
          'inflation-devices-and-accessories': {
            'code': 5010613
          },
          'car-sports-racks': {
            'code': 5010614
          },
          'coach-and-referee-gear': {
            'code': 5010615
          },
          'reflective-gear': {
            'code': 5010616
          }
        }
      },
      'adventure-and-outdoor-fun': {
        'code': 5020000,
        'bikes': {
          'code': 5020100,
          'bike-racks-and-bags': {
            'code': 5020101
          },
          'bike-tools-and-maintenance': {
            'code': 5020102
          },
          'bike-trainers-and-accessories': {
            'code': 5020103
          },
          'complete-bikes': {
            'code': 5020104
          },
          'child-seats-and-cargo-trailers': {
            'code': 5020105
          },
          'helmets': {
            'code': 5020106
          },
          'bike-hydration': {
            'code': 5020107
          },
          'kids-bikes-and-accessories': {
            'code': 5020108
          },
          'kids-helmets': {
            'code': 5020109
          },
          'kids-tricycles': {
            'code': 5020110
          },
          'bike-lights-and-reflectors': {
            'code': 5020111
          },
          'bike-parts-and-components': {
            'code': 5020112
          },
          'bike-pedals-and-cleats': {
            'code': 5020113
          },
          'bicycle-tires-and-tubes': {
            'code': 5020114
          },
          'bike-transportation-and-storage': {
            'code': 5020115
          },
          'unicycles': {
            'code': 5020116
          },
          'triathlon-gear': {
            'code': 5020117
          },
          'bike-brakes': {
            'code': 5020118
          },
          'bike-chains-and-cassettes': {
            'code': 5020119
          },
          'bike-cranksets-chainrings-and-bottom-brackets': {
            'code': 5020120
          },
          'bike-derailleurs-and-shifters': {
            'code': 5020121
          },
          'bike-forks-headsets-and-stems': {
            'code': 5020122
          },
          'bike-handlebars-wraps-and-grips': {
            'code': 5020123
          },
          'bike-saddles-seats-and-seat-posts': {
            'code': 5020124
          },
          'bike-wheels': {
            'code': 5020125
          },
          'cycling-shorts-jerseys-and-accessories': {
            'code': 5020126
          },
          'car-bike-racks': {
            'code': 5020127
          },
          'pads-guards-and-protective-gear': {
            'code': 5020128
          }
        },
        'snowboard-shop': {
          'code': 5020200
        },
        'skateboards-skates-and-scooters': {
          'code': 5020300
        },
        'ski-shop': {
          'code': 5020400
        },
        'boating': {
          'code': 5020500
        },
        'camping-and-hiking': {
          'code': 5020600
        },
        'water-sports': {
          'code': 5020700
        }
      },
      'hunting-fishing-and-tactical': {
        'code': 5030000,
        'fishing': {
          'code': 5030100
        },
        'binoculars-and-scopes': {
          'code': 5030200
        }
      },
      'team-sports': {
        'code': 5040000,
        'baseball': {
          'code': 5040100
        },
        'basketball': {
          'code': 5040200
        },
        'field-hockey': {
          'code': 5040300
        },
        'football': {
          'code': 5040400
        },
        'lacrosse': {
          'code': 5040500
        },
        'soccer': {
          'code': 5040600
        },
        'softball': {
          'code': 5040700
        },
        'hockey-and-ice-skating': {
          'code': 5040800
        },
        'gymnastics-and-dance': {
          'code': 5040900
        }
      },
      'individual-sports': {
        'code': 5050000,
        'golf': {
          'code': 5050100,
          'golf-club-sets': {
            'code': 5050101
          },
          'drivers': {
            'code': 5050102
          },
          'woods': {
            'code': 5050103
          },
          'hybrids': {
            'code': 5050104
          },
          'irons': {
            'code': 5050105
          },
          'wedges': {
            'code': 5050106
          },
          'putters': {
            'code': 5050107
          },
          'golf-apparel': {
            'code': 5050108
          },
          'golf-shoes': {
            'code': 5050109
          },
          'golf-balls': {
            'code': 5050110
          },
          'golf-club-bags': {
            'code': 5050111
          },
          'golf-rangefinders-and-shot-trackers': {
            'code': 5050112
          },
          'golf-training-equipment': {
            'code': 5050113
          },
          'head-covers': {
            'code': 5050114
          },
          'golf-tees': {
            'code': 5050115
          },
          'golf-club-parts': {
            'code': 5050116
          },
          'golf-gloves': {
            'code': 5050117
          },
          'golf-club-cleaning-brush': {
            'code': 5050118
          },
          'golf-towels': {
            'code': 5050119
          },
          'golf-umbrella': {
            'code': 5050120
          },
          'golf-markers-and-divot-repair-tools': {
            'code': 5050121
          },
          'golf-cart-accessories': {
            'code': 5050122
          },
          'golf-accessories': {
            'code': 5050123
          }
        },
        'tennis': {
          'code': 5050200
        },
        'boxing': {
          'code': 5050300
        },
        'martial-arts': {
          'code': 5050400
        },
        'track-and-field': {
          'code': 5050500
        },
        'racquetball': {
          'code': 5050600
        },
        'equestrian-sports': {
          'code': 5050700
        }
      }
    },
    'fashion': {
      'code': 6000000,
      'women': {
        'code': 6010000,
        'featured-shops': {
          'code': 6010100
        },
        'clothing': {
          'code': 6010200,
          'activewear': {
            'code': 6010201
          },
          'coats-and-jackets': {
            'code': 6010202
          },
          'dresses': {
            'code': 6010203
          },
          'jeans': {
            'code': 6010204
          },
          'jumpsuits-and-rompers': {
            'code': 6010205
          },
          'lingerie-and-shapewear': {
            'code': 6010206
          },
          'pants-and-leggings': {
            'code': 6010207
          },
          'shorts': {
            'code': 6010208
          },
          'skirts': {
            'code': 6010209
          },
          'sleepwear-and-loungewear': {
            'code': 6010210
          },
          'sweaters': {
            'code': 6010211
          },
          'sweatshirts-and-hoodies': {
            'code': 6010212
          },
          'swimwear': {
            'code': 6010213
          },
          'tops-and-t-shirts': {
            'code': 6010214
          }
        },
        'shoes': {
          'code': 6010300,
          'booties': {
            'code': 6010301
          },
          'boots': {
            'code': 6010302
          },
          'espadrilles': {
            'code': 6010303
          },
          'flats': {
            'code': 6010304
          },
          'heels-and-pumps': {
            'code': 6010305
          },
          'mules-and-slides': {
            'code': 6010306
          },
          'loafers-and-slip-ons': {
            'code': 6010307
          },
          'sandals-and-flip-flops': {
            'code': 6010308
          },
          'slippers': {
            'code': 6010309
          },
          'sneakers-and-athletic': {
            'code': 6010310
          },
          'wedges': {
            'code': 6010311
          }
        },
        'handbags': {
          'code': 6010400,
          'backpacks': {
            'code': 6010401
          },
          'belt-bags': {
            'code': 6010402
          },
          'cosmetic-bags': {
            'code': 6010403
          },
          'clutches-and-pouches': {
            'code': 6010404
          },
          'crossbody-bags': {
            'code': 6010405
          },
          'hobo-bags': {
            'code': 6010406
          },
          'laptops-bags-and-briefcases': {
            'code': 6010407
          },
          'satchels': {
            'code': 6010408
          },
          'shoulder-bags': {
            'code': 6010409
          },
          'tote-bags': {
            'code': 6010410
          },
          'weekenders-and-duffels': {
            'code': 6010411
          }
        },
        'accessories': {
          'code': 6010500,
          'belts': {
            'code': 6010501
          },
          'gloves': {
            'code': 6010502
          },
          'hats': {
            'code': 6010503
          },
          'scarves-and-wraps': {
            'code': 6010504
          },
          'sunglasses-and-eyewear': {
            'code': 6010505
          },
          'tech-accessories-and-cases': {
            'code': 6010506
          },
          'umbrellas': {
            'code': 6010507
          },
          'wallet-and-card-cases': {
            'code': 6010508
          }
        },
        'jewelry-and-watches': {
          'code': 6010600,
          'anklets': {
            'code': 6010601
          },
          'bracelets-and-charms': {
            'code': 6010602
          },
          'earrings': {
            'code': 6010603
          },
          'necklaces': {
            'code': 6010604
          },
          'rings': {
            'code': 6010605
          },
          'watches': {
            'code': 6010606
          }
        }
      },
      'men': {
        'code': 6020000,
        'active-and-workout': {
          'code': 6020100
        },
        'coats-and-jackets': {
          'code': 6020200
        },
        'shirts': {
          'code': 6020300
        },
        'jeans': {
          'code': 6020400
        },
        'pajamas-and-robes': {
          'code': 6020500
        },
        'pants': {
          'code': 6020600
        },
        'shorts': {
          'code': 6020700
        },
        'suits-and-suit-separates': {
          'code': 6020800
        },
        'sweaters': {
          'code': 6020900
        },
        'sweatshirts-and-hoodies': {
          'code': 6021000
        },
        'swimwear-and-boardshorts': {
          'code': 6021100
        },
        't-shirts-and-tank-tops': {
          'code': 6021200
        },
        'underwear-and-socks': {
          'code': 6021300
        }
      },
      'kids-and-baby': {
        'code': 6030000,
        'baby': {
          'code': 6030100,
          'girls-clothing': {
            'code': 6030101
          },
          'boys-clothing': {
            'code': 6030102
          },
          'girls-shoes': {
            'code': 6030103
          },
          'boys-shoes': {
            'code': 6030104
          },
          'girls-accessories': {
            'code': 6030105
          },
          'boys-accessories': {
            'code': 6030106
          }
        },
        'toddler': {
          'code': 6030200,
          'girls-clothing': {
            'code': 6030201
          },
          'boys-clothing': {
            'code': 6030202
          },
          'girls-shoes': {
            'code': 6030203
          },
          'boys-shoes': {
            'code': 6030204
          },
          'girls-accessories': {
            'code': 6030205
          },
          'boys-accessories': {
            'code': 6030206
          }
        },
        'little-kid': {
          'code': 6030300,
          'girls-clothing': {
            'code': 6030301
          },
          'boys-clothing': {
            'code': 6030302
          },
          'girls-shoes': {
            'code': 6030303
          },
          'boys-shoes': {
            'code': 6030304
          },
          'girls-accessories': {
            'code': 6030305
          },
          'boys-accessories': {
            'code': 6030306
          }
        },
        'big-kid': {
          'code': 6030400,
          'girls-clothing': {
            'code': 6030401
          },
          'boys-clothing': {
            'code': 6030402
          },
          'girls-shoes': {
            'code': 6030403
          },
          'boys-shoes': {
            'code': 6030404
          },
          'girls-accessories': {
            'code': 6030405
          },
          'boys-accessories': {
            'code': 6030406
          }
        }
      },
      'travel': {
        'code': 6040000,
        'luggage': {
          'code': 6040100,
          'carry-on': {
            'code': 6040101
          },
          'check-in': {
            'code': 6040102
          },
          'fashion': {
            'code': 6040103
          },
          'hardside': {
            'code': 6040104
          },
          'kids': {
            'code': 6040105
          },
          'luggage-sets': {
            'code': 6040106
          },
          'underseat-luggage': {
            'code': 6040107
          }
        },
        'bags': {
          'code': 6040200,
          'backpacks': {
            'code': 6040201
          },
          'belt-bags': {
            'code': 6040202
          },
          'garment-bags': {
            'code': 6040203
          },
          'laptop-bags-and-briefcases': {
            'code': 6040204
          },
          'weekenders-and-duffels': {
            'code': 6040205
          }
        },
        'travel-accessories': {
          'code': 6040300,
          'eyemasks-pillows-and-blankets': {
            'code': 6040301
          },
          'packing-cubes-and-organization': {
            'code': 6040302
          },
          'passport-cases-and-travel-wallets': {
            'code': 6040303
          },
          'kits-and-cases': {
            'code': 6040304
          }
        }
      }
    }
  }
}


