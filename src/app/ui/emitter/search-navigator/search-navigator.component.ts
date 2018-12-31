import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  TryAddOrCreateToCart, TrySubtractOrDeleteFromCart
} from '../../../core/store/cart/cart.actions';
import {SearchService} from '../../../core/service/data-pages/search/search.service';
@Component({
  selector: 'emitter-search-navigator',
  templateUrl: './search-navigator.component.html',
  styleUrls: ['./search-navigator.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class SearchNavigatorComponent implements OnInit, OnDestroy {
  // @Input('categoryList') categoryList;

  // let hello = {}
  //
  // let helloList = [];
  // console.time('qeution1')
  // // v.items.reduce( (obj, v) => {
  // //   console.log(obj);
  // // });
  //
  // for ( let k = 0; k < 400; k ++ ) {
  //   for ( let i = 0 ; i < 2 ; i ++ ) {
  //
  //     Object.assign(hello, {[_infoList.aggregation.brands[i].slug + k]:_infoList.aggregation.brands[i]});
  //     helloList.push(_infoList.aggregation.brands[i]);
  //   }
  // }
  // console.timeEnd('qeution1');
  //
  // console.log(helloList);
  // console.log(hello);
  // hello = {}
  //
  // let cnt = 0;
  // console.time('reduce')
  // helloList.reduce( (obj, v) => {
  //   Object.assign(hello, {[v.slug + cnt++]:_infoList.aggregation.brands[0]});
  // });
  // console.timeEnd('reduce')
  //
  // console.log(hello);

  locationList;
  locationListForCheck = {};
  brandList;
  brandListForCheck = {};
  valueList;
  valueListForCheck = {};
  infoList;
  orderedFilterList = [];

  currentSortSlug;

  result;
  categoryList;
  previous;
  currentSlug;
  currentCode;
  currentTitle;
  currentName = '';

  imageIndex = 0;

  ///////////////////////
  totalCount;
  totalPage;

  totalPageArray = [];
  maxRow = 18;

  currentList = [];
  currentPage = 1;


  searchState = '';

  // subscribe
  cartStore$;
  uiStore$;
  queryParams$;
  searchData$;

  // subscribe value
  queryParams = {term: '', brand: [], value: [], location: []};
  cartStore;

  sortList = [
    {title: '인기순', value: 'most_popular'},
    // { title : '판매량', value : 'most_popular' },
    {title: '리뷰 많은순', value: 'most_reviewed'},
    {title: '평점순', value: 'top_rated'},
    {title: '가격 높은순', value: 'price_high'},
    {title: '가격 낮은순', value: 'price_low'}
  ]

  constructor(
    private renderer: Renderer2,
    private store: Store<any>,
    public router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private searchService: SearchService
  ) {
    this.uiStore$ = this.store.pipe(select(state => state.ui.currentCategoryList))
      .subscribe(val => {
        console.log(val);
        // this.categoryList = val;
        this.categoryList = val.entities;
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

    this.queryParams$ = this.route.queryParams
      .subscribe((val: { term, brand, value, location }) => {
        this.currentList = null;
        this.orderedFilterList = [];

        const url = this.router.url.split('/');
        if (url[2].indexOf('search') > -1) {
          this.searchState = 'search';
          this.categoryList = null;
          this.result = null;
          this.previous = null;
          this.currentSlug = null;

          const param = this.router.url.substring(this.router.url.indexOf('?'), this.router.url.length);

          this.searchData$ = this.searchService.search(param).subscribe(_infoList => {

            /* async 데이터가 들어오는데, null이라면 return을 해줌 */
            this.currentList = null;
            if (_infoList != null) {
              this.valueList = _infoList.aggregation.values;
              this.locationList = _infoList.aggregation.locations;
              this.brandList = _infoList.aggregation.brands;

              this.infoList = _infoList.results;

              this.totalCount = this.infoList.length;
              this.totalPage = this.totalCount / this.maxRow;

              this.totalPageArray = Array(parseInt(this.totalPage, 10));
              this.totalPageArray.push(this.totalPageArray.length + 1);

              this.currentList = this.infoList.slice(0, this.maxRow);
              this.cd.markForCheck();
            }
          });

        } else {

          this.searchData$ = this.searchService.categorySearch(this.sortInfo[url[url.length - 1]]).subscribe(_infoList => {
            this.searchState = 'category';
            /* async 데이터가 들어오는데, null이라면 return을 해줌 */
            this.currentList = null;
            if (_infoList != null) {
              this.valueList = _infoList.aggregation.values;
              this.locationList = _infoList.aggregation.locations;
              this.brandList = _infoList.aggregation.brands;

              this.infoList = _infoList.results;

              this.totalCount = this.infoList.length;
              this.totalPage = this.totalCount / this.maxRow;

              this.totalPageArray = Array(parseInt(this.totalPage, 10));
              this.totalPageArray.push(this.totalPageArray.length + 1);

              this.currentList = this.infoList.slice(0, this.maxRow);
              this.cd.markForCheck();
            }
          });
        }

        if (this.router.url.indexOf('&') < 0) {

        } else {
          const temp = this.router.url.substring(this.router.url.indexOf('&') + 1, this.router.url.length);
          const tempArray = temp.split('&');
          tempArray.forEach(item => {
            const paramTemp = item.split('=');

            if (paramTemp[0] !== 'ordering') {
              this.orderedFilterList.push(paramTemp[1]);
            } else {
              this.currentSortSlug = paramTemp[1];
            }
          });
        }


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

  addToCart(xAmount, xProductSlug) {

    xAmount++;

    // 만약 카트 아이디가. 카트스토어 카트리스트에 있다면, increase cart를 하고, create cart를 하지 않는다.
    this.store.dispatch(new TryAddOrCreateToCart({
      productSlug: xProductSlug,
      amount: xAmount,
      increaseOrCreate: xProductSlug in this.cartStore.cartList
    }));
  }

  subtractFromCart(xAmount, xProductSlug) {
    xAmount--;
    this.store.dispatch(new TrySubtractOrDeleteFromCart({
      productSlug: xProductSlug,
      amount: xAmount,
      subtractOrDelete: xAmount !== 0 ? true : false
    }));
  }

  paginate(pageIndex) {
    this.currentPage = pageIndex;
    this.currentList = this.infoList.slice((this.currentPage - 1) * this.maxRow, this.currentPage * this.maxRow);
  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  updateSecondCategory(index, slug) {
    console.log(index);
    const url = this.router.url.split('/');
    console.log(url);
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
    console.log(url.length);

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
      queryParams: {value: this.queryParams.value.length === 0 ? null : this.queryParams.value},
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
      queryParams: {brand: this.queryParams.brand.length === 0 ? null : this.queryParams.brand},
      queryParamsHandling: 'merge'
    });
  }

  locationClicked(xLocationSlug) {
    if (this.locationListForCheck[xLocationSlug] === true) {
      this.locationListForCheck[xLocationSlug] = false;
      const index = this.queryParams.location.indexOf(xLocationSlug);
      this.queryParams.location.splice(index, 1);
    } else {
      this.queryParams.location.push(xLocationSlug);
    }

    this.router.navigate(['/shops/search'], {
      queryParams: {location: this.queryParams.location.length === 0 ? null : this.queryParams.location},
      queryParamsHandling: 'merge'
    });
  }

  sortClicked(xSortSlug) {
    this.currentSortSlug = xSortSlug;
    // this.orderedFilterListForCheck[]
    this.router.navigate(['/shops/search'], {queryParams: {ordering: xSortSlug}, queryParamsHandling: 'merge'});
  }

  // @ts-ignore
  sortInfo = {
    grocery: 1010000,
    'household-supplies': 1020000,
    'personal-care': 1030000,
    health: 1040000,
    baby: 1050000,
    'pet-supplies': 1060000,
    'office-supplies': 1070000,
    beverages: 1010100,
    'candy-gum-and-chocolate': 1010300,
    'breakfast-foods': 1010400,
    'soups-meals-and-side-dishes': 1010500,
    pantry: 1010600,
    'pasta-and-pasta-sauce': 1010700,
    'canned-and-jarred-food': 1010800,
    'cooking-and-baking-supplies': 1010900,
    'rice-beans-and-grains': 1011000,
    'international-food': 1011100,
    'paper-and-plastic-products': 1020100,
    laundry: 1020200,
    'cleaning-products': 1020300,
    'cleaning-tools': 1020400,
    'food-storage-and-trash-bags': 1020500,
    'home-fragrance': 1020600,
    'light-bulbs': 1020700,
    'insect-and-pest-control': 1020800,
    'oral-and-personal-care': 1030100,
    'tools-and-accessories': 1030200,
    'hair-care-products': 1030300,
    'hair-tools-and-accessories': 1030400,
    makeup: 1030500,
    'nail-care': 1030600,
    'skin-care': 1030700,
    'mens-essentials': 1030800,
    'medicine-cabinet': 1040100,
    'medical-supplies-and-equipment': 1040200,
    'sports-nutrition-and-diet': 1040300,
    'vitamins-and-dietary-supplements': 1040400,
    'baby-food-and-formula': 1050100,
    diapering: 1050200,
    'baby-gear': 1050300,
    'baby-gear-accessories': 1050400,
    'feeding-and-nursing': 1050500,
    babyproofing: 1050600,
    'baby-care': 1050700,
    'potty-training': 1050800,
    'baby-bathing': 1050900,
    'baby-gifts': 1051000,
    'dog-supplies': 1060100,
    'cat-supplies': 1060200,
    'pens-pencils-and-markers': 1070100,
    'tape-and-adhesives': 1070200,
    'office-paper': 1070300,
    'presentation-boards': 1070400,
    'workspace-organizers': 1070500,
    'staplers-and-punches': 1070600,
    'labels-indexes-and-stamps': 1070700,
    'filing-products': 1070800,
    'binders-and-binding-systems': 1070900,
    'scissors-cutters-and-measuring-devices': 1071000,
    'envelopes-and-shipping-supplies': 1071100,
    'calendars-and-planners': 1071200,
    stationary: 1071300,
    water: 1010101,
    'sports-and-energy-drinks': 1010102,
    'soft-drinks': 1010103,
    coffee: 1010104,
    tea: 1010105,
    milk: 1010106,
    'non-dairy-milk': 1010107,
    juice: 1010108,
    'applesauce-fruit-cups-and-squeezes': 1010201,
    'chips-and-pretzels': 1010202,
    cookies: 1010203,
    'bread-and-crackers': 1010204,
    'fruit-and-vegetable-snacks': 1010205,
    'protein-and-granola-bars': 1010206,
    'ice-cream-cones-and-toppings': 1010207,
    'jerky-and-dried-meats': 1010208,
    'nuts-seeds-and-trail-mix': 1010209,
    'popcorn-and-puffed-snacks': 1010210,
    'pudding-and-gelatin': 1010211,
    chocolate: 1010301,
    'chewing-gum': 1010302,
    candy: 1010303,
    'other-sweets': 1010304,
    'cold-cereals': 1010401,
    'hot-cereals-and-oats': 1010402,
    'toaster-pastries': 1010403,
    'granola-and-museli': 1010404,
    'meal-replacement-proein-and-granola-bars': 1010405,
    'macaroni-and-cheese': 1010501,
    soups: 1010502,
    broth: 1010503,
    'chilis-and-stews': 1010504,
    'asian-meals': 1010505,
    'italian-meals': 1010506,
    'mexican-meals-and-taco-kits': 1010507,
    'indian-meals': 1010508,
    'potatoes-and-stuffings': 1010509,
    'spices-and-seasonings': 1010601,
    'salt-and-pepper': 1010602,
    condiments: 1010603,
    oils: 1010604,
    vinegars: 1010605,
    'salad-dressings': 1010606,
    'salad-toppings': 1010607,
    'sauces-and-marinades': 1010608,
    'salsas-and-dips': 1010609,
    butters: 1010610,
    'jams-jellies-and-preserves': 1010611,
    'sweet-spreads': 1010612,
    'flours-and-meals': 1010906,
    'sugar-and-other-sweeteners': 1010909,
    'baking-ingredients': 1010902,
    'baking-mixes': 1010901,
    'honey-and-syrups': 1010910,
    'pasta-and-noodles': 1010701,
    'pasta-sauces': 1010702,
    'canned-beans': 1010801,
    'canned-fruit': 1010802,
    'canned-meat-and-seafood': 1010803,
    'canned-vegetables': 1010804,
    'canned-tomatoes-and-paste': 1010805,
    'pickled-vegetables-and-olives': 1010806,
    breadcrumbs: 1010903,
    'doughs-shells-and-crusts': 1010904,
    extracts: 1010905,
    'frosting-and-decoration': 1010907,
    marshmallows: 1010908,
    'dry-beans': 1011001,
    grains: 1011002,
    quinoa: 1011003,
    rice: 1011004,
    couscous: 1011005,
    'indian-cuisine': 1011101,
    'chinese-cuisine': 1011102,
    'japanese-cuisine': 1011103,
    'korean-cuisine': 1011104,
    'asian-cuisine': 1011105,
    'mexican-cuisine': 1011106,
    'latin-american-cuisine': 1011107,
    'australian-cuisine': 1011108,
    'european-cuisine': 1011109,
    'paper-towels': 1020101,
    'toilet-paper': 1020102,
    'facial-tissues': 1030208,
    'disposable-tableware': 1020104,
    'paper-napkins': 1020105,
    'disposable-coffee-filters': 1020106,
    'laundry-detergent': 1020201,
    'fabric-softener': 1020202,
    'dryer-sheets-and-balls': 1020203,
    'stain-removers': 1020204,
    'scent-boosters': 1020205,
    bleach: 1020303,
    'washing-machine-cleaners': 1020207,
    'other-laundry-care': 1020208,
    'all-purpose-cleaners': 1020301,
    'cleaning-wipes': 1020302,
    'sponges-and-brushes': 1020401,
    'dishwashing-detergent': 1020305,
    'dish-soap': 1020306,
    'bathroom-cleaners': 1020307,
    'kitchen-cleaners': 1020308,
    'produce-wash': 1020309,
    'drain-cleaners': 1020310,
    'floor-cleaners': 1020311,
    'specialty-cleaners': 1020312,
    'glass-cleaners': 1020313,
    'mops-and-accessories': 1020402,
    'dusting-tools-and-cloths': 1020403,
    'cleaning-gloves': 1020404,
    brooms: 1020405,
    'bowl-brushes-and-plungers': 1020406,
    dustbins: 1020407,
    'food-storage-bags': 1020501,
    foil: 1020502,
    'food-storage-containers': 1020503,
    'plastic-wrap': 1020504,
    'wax-and-parchment-paper': 1020505,
    'trash-bags': 1020506,
    'air-fresheners': 1020601,
    candles: 1020602,
    'fragrance-diffusers': 1020603,
    'indoor-pest-control': 1020801,
    'outdoor-pest-control': 1020802,
    'insect-repellent': 1020803,
    deodorant: 1030101,
    'ear-care': 1040114,
    'eye-care': 1040115,
    'feminine-care': 1030104,
    toothbrushes: 1030105,
    toothpaste: 1030106,
    mouthwash: 1030107,
    'dental-floss': 1030108,
    'manual-toothbrushes': 1030109,
    'electric-toothbrushes': 1030110,
    'other-oral-care': 1030111,
    razors: 1030112,
    'shaving-cream': 1030714,
    'waxing-and-hair-removal': 1030114,
    'safer-sex-and-contraceptives': 1030115,
    'cotton-balls-and-rounds': 1030204,
    incontinence: 1040108,
    'wet-shave': 1030118,
    'electric-shavers': 1030119,
    'bath-sponges-and-tools': 1030201,
    'eye-masks': 1030202,
    'beauty-and-spa-tools': 1030203,
    mirrors: 1030205,
    'toiletry-kits-and-cases': 1030206,
    tweezers: 1030207,
    'nail-care-tools': 1030602,
    'top-beauty-tools-and-accessories': 1030210,
    shampoos: 1030301,
    conditioners: 1030302,
    'styling-products': 1030303,
    'scalp-treatments': 1030304,
    'hair-color': 1030305,
    'hair-loss-products': 1030306,
    'hair-perms-and-texturizers': 1030307,
    'hair-relaxers-and-treatments': 1030308,
    'multicultural-hair-care-products': 1030309,
    'innovative-hair-care': 1030310,
    brushes: 1030401,
    'dryers-irons-and-diffusers': 1030402,
    'hair-rollers': 1030403,
    'hair-accessories': 1030404,
    'haircutting-tools': 1030405,
    combs: 1030406,
    'body-art-and-makeup': 1030501,
    'makeup-brushes': 1030502,
    'face-makeup': 1030503,
    'lip-makeup': 1030504,
    'makeup-sets': 1030505,
    'eyeliner-and-brow-pencils': 1030506,
    'mascara-and-lashes': 1030507,
    'eye-shadow': 1030508,
    'makeup-sponges': 1030509,
    'makeup-tools': 1030510,
    'cuticle-care': 1030601,
    'nail-polish': 1030603,
    'nail-polish-remover': 1030604,
    'bath-salts-and-bubbles': 1030701,
    'makeup-remover': 1030702,
    'hand-soap': 1030703,
    'lip-care': 1030704,
    suncare: 1030705,
    'toners-and-astringents': 1030706,
    'body-powder': 1030707,
    'body-moisturizers': 1030708,
    'massage-oil-and-aromatherapy': 1030709,
    'hand-sanitizers-and-wipes': 1030710,
    'facial-cleansers': 1030711,
    'facial-moisturizers-and-treatment': 1030712,
    'soap-and-body-wash': 1030713,
    'beard-and-shave': 1030801,
    body: 1030802,
    face: 1030803,
    hair: 1030804,
    cologne: 1030805,
    wellness: 1030806,
    'allergy-sinus-and-asthma': 1040101,
    'childrens-medicine': 1040102,
    'cold-sore-and-blister-treatments': 1040103,
    'cough-and-cold': 1040104,
    diabetes: 1040105,
    'digestion-and-nausea': 1040106,
    'foot-healthcare': 1040107,
    'pain-relievers': 1040109,
    'sleep-and-snoring': 1040110,
    'smoking-cessation': 1040111,
    'therapeutic-ointments-and-powders': 1040112,
    thermometers: 1040113,
    'pills-cases-and-splitters': 1040201,
    'bathroom-aids-and-safety': 1040202,
    'beds-and-accessories': 1040203,
    'braces-splints-and-slings': 1040204,
    'daily-living-aids': 1040205,
    'mobility-aids-and-equipment': 1040206,
    'occupational-and-physical-therapy-aids': 1040207,
    'pen-lights': 1040208,
    tests: 1040209,
    'first-aid': 1040210,
    dehumidifiers: 1040211,
    humidifiers: 1040212,
    'health-monitors': 1040213,
    'protein-and-meal-replacement': 1040301,
    'energy-and-endurance': 1040302,
    'weight-loss-supplements-and-cleanses': 1040303,
    'mass-gainers': 1040304,
    'amino-acids-and-creatine': 1040409,
    'on-the-go-nutrition': 1040306,
    'slimfast-campaign': 1040307,
    minerals: 1040401,
    supplements: 1040402,
    'letter-vitamins': 1040403,
    'fish-oils-and-omegas': 1040404,
    probiotics: 1040405,
    multivitamins: 1040406,
    'protein-and-meal-replacements': 1040407,
    'pill-cases-and-splitters': 1040408,
    'weight-loss-supplements': 1040410,
    'new-and-noteworthy-vitamins-and-supplements': 1040411,
    'herbs-and-homeopathy': 1040412,
    'baby-and-toddler-snacks': 1050101,
    'baby-food': 1050502,
    'baby-formula': 1050503,
    'toddler-juices-and-milk': 1050104,
    diapers: 1050201,
    'baby-wipes': 1050202,
    'baby-wipe-holders-and-warmers': 1050203,
    'changing-table-accessories': 1050204,
    'cloth-diapers': 1050205,
    'cloth-diaper-accessories': 1050206,
    'diaper-bags': 1050207,
    'diaper-cakes': 1050208,
    'diaper-changing-pads': 1050209,
    'diaper-creams-and-ointments': 1050210,
    'diaper-pails-and-refills': 1050211,
    'diaper-stackers-and-caddies': 1050212,
    'baby-monitors': 1050601,
    'baby-seats': 1050302,
    'bouncers-and-walkers': 1050303,
    'car-seats': 1050304,
    carriers: 1060202,
    'harnesses-and-leashes': 1050306,
    'play-mats-and-activity-gyms': 1050307,
    'playards-and-travel-beds': 1050308,
    strollers: 1050309,
    'car-seat-and-stroller-toys': 1050401,
    'car-seat-accessories': 1050402,
    'carrier-accessories': 1050403,
    'crib-netting': 1050404,
    'shopping-cart-covers': 1050405,
    'stroller-accessories': 1050406,
    'baby-bottles-and-accessories': 1050501,
    'bibs-and-burp-cloths': 1050504,
    'breast-pump': 1050505,
    'breast-pump-accessories': 1050506,
    'food-and-formula-prep': 1050507,
    'food-storage-and-on-the-go': 1050508,
    'highchairs-and-boosters': 1050509,
    'kids-tabletop': 1050510,
    'lunch-bags': 1050511,
    'nursing-accessories': 1050512,
    'pacifiers-and-teethers': 1050513,
    'sippys-and-cups': 1050514,
    'bath-safety': 1050602,
    'edge-and-corner-guards': 1050603,
    'electrical-safety': 1050604,
    'gates-and-rails': 1050605,
    'kitchen-safety': 1050606,
    'outdoor-safety': 1050607,
    'rails-and-rail-guards': 1050608,
    'sleep-positioners': 1050609,
    'baby-bubble-bath': 1050701,
    'baby-oil-and-lotion': 1050702,
    'baby-powder': 1050703,
    'baby-shampoo-and-wash': 1050704,
    potties: 1050801,
    'potty-training-aids': 1050802,
    'seat-covers': 1050803,
    'step-stools': 1050804,
    'training-pants': 1050805,
    'baby-bath-accessories': 1050901,
    'baby-grooming': 1050902,
    'baby-tubs': 1050903,
    'baby-washcloths-and-towels': 1050904,
    'bath-toys': 1050905,
    'baby-gift-sets-and-baskets': 1051001,
    'keepsakes-and-albums': 1051002,
    'new-mom-gifts': 1051003,
    'toy-banks': 1051004,
    'collars-harnesses-and-leashes': 1060215,
    'dog-apparel': 1060102,
    'dog-beds': 1060103,
    'dog-bowls-and-feeders': 1060104,
    'travel-supplies': 1060105,
    'cleaning-supplies': 1060203,
    'crates-and-kennels': 1060107,
    'flea-and-tick-control': 1060204,
    'dog-food': 1060109,
    grooming: 1060110,
    'dog-houses': 1060111,
    'medication-and-health-supplies': 1060112,
    'modern-furniture': 1060113,
    'dog-technology': 1060114,
    toys: 1060115,
    'training-and-behavior': 1060116,
    treats: 1060117,
    'gates-and-ramps': 1060118,
    'poop-bags-and-housebreaking': 1060119,
    'cat-beds': 1060201,
    'cat-food': 1060205,
    'cat-grooming': 1060206,
    'health-supplies': 1060207,
    litter: 1060208,
    'litter-boxes': 1060209,
    scratchers: 1060210,
    'cat-toys': 1060211,
    'training-and-behavior-aids': 1060212,
    'cat-treats': 1060213,
    'cat-trees-and-condos': 1060214,
    'feeding-and-watering-supplies': 1060216,
    skincare: 4010000,
    // @ts-ignore
    makeup: 4020000,
    'bath-and-body': 4060600,
    // @ts-ignore
    hair: 4060800,
    fragrance: 4050000,
    men: 4050200,
    'k-beauty': 4070000,
    'face-cleansers': 4010100,
    'face-moisturizers-and-treatments': 4060200,
    'exfoliators-and-scrubs': 4010300,
    'face-mask': 4010400,
    'eye-cream-and-treatments': 4010500,
    // @ts-ignore
    'lip-care': 4010600,
    'toners-and-mists': 4010700,
    'sun-care-and-sunscreens': 4010800,
    'tools-and-devices': 4010900,
    'gift-sets': 4040600,
    'top-brands': 4060900,
    // @ts-ignore
    face: 4020100,
    cheek: 4020200,
    eyes: 4020300,
    lip: 4020400,
    'makeup-brushes-and-applicators': 4020500,
    'lash-bar': 4020600,
    'body-wash-and-shower-gels': 4030100,
    'body-lotions-and-creams': 4030200,
    'body-oils': 4030300,
    'body-scrubs-and-exfoliants': 4030400,
    'hand-and-foot': 4030500,
    'bubble-bath': 4030600,
    'body-sun-care-and-sunscreens': 4030700,
    // @ts-ignore
    shampoos: 4040100,
    // @ts-ignore
    conditioners: 4040200,
    'hair-treatments': 4040300,
    'hair-styling': 4040400,
    // @ts-ignore
    'hair-tools-and-accessories': 4040500,
    women: 4050100,
    // @ts-ignore
    candles: 4050300,
    'fragrance-sets': 4050400,
    'travel-size': 4050500,
    'face-wash': 4060100,
    'eye-creams': 4060300,
    sunscreens: 4060400,
    shaving: 4060500,
    'deodorant-for-men': 4060700,
    combination: 4010101,
    dry: 4010102,
    normal: 4010103,
    moisturizers: 4010201,
    'night-creams': 4010202,
    serums: 4010203,
    'face-masks': 4010401,
    'sheet-masks': 4010402,
    'simply-moisture': 4010501,
    'fine-lines-wrinkles': 4010502,
    'dark-circles-puffness': 4010503,
    'lip-balms-and-treatments': 4010601,
    'lip-sunscreen': 4010602,
    toners: 4010701,
    mists: 4010702,
    foundation: 4020101,
    'face-primers': 4020102,
    'bb-and-cc-cream': 4020103,
    'tinted-moisturizer': 4020104,
    'setting-powder': 4020105,
    concealer: 4020106,
    blush: 4020201,
    bronzer: 4020202,
    contour: 4020203,
    highlighter: 4020204,
    'cheek-palettes': 4020205,
    eyeshadows: 4020301,
    mascara: 4020302,
    eyeliner: 4020303,
    eyebrow: 4020304,
    'eye-palettes': 4020305,
    'eye-sets': 4020306,
    lipstick: 4020401,
    'lip-gloss': 4020402,
    'lip-stain': 4020403,
    'lip-liner': 4020404,
    'lip-palettes': 4020405,
    'lip-sets': 4020406,
    'face-brushes': 4020501,
    'cheek-brushes': 4020502,
    'eye-brushes': 4020503,
    'lip-brushes': 4020504,
    'sponges-and-applicators': 4020505,
    'brush-cleaners': 4020506,
    'brush-sets': 4020507,
    'eyelash-curler': 4020601,
    'false-lashes': 4020602,
    'body-wash': 4030101,
    'shower-gels': 4030102,
    'bar-soaps': 4030103,
    'body-lotions': 4030201,
    'body-creams': 4030202,
    'hand-cream-and-lotion': 4030501,
    'foot-cream-and-lotion': 4030502,
    'hand-soaps': 4030503,
    moisturizing: 4040201,
    volumizing: 4040202,
    damaged: 4040203,
    thickening: 4040204,
    'dry-shampoos': 4040105,
    'leave-in-conditioners': 4040205,
    'hair-masques': 4040301,
    'hair-oils': 4040302,
    'hair-sprays-and-mousses': 4040401,
    'hair-creams-gels-and-oils': 4040402,
    'hair-waxes-and-pomades': 4040403,
    'hair-dryers-and-irons': 4040501,
    'hair-brushes-and-combs': 4040502,
    edp: 4050201,
    edt: 4050202,
    // @ts-ignore
    cologne: 4050203,
    citrus: 4050501,
    floral: 4050502,
    woody: 4050503,
    spicy: 4050504,
    'pre-shave': 4060501,
    'shaving-creams-gels': 4060502,
    'after-shave': 4060503,
    tools: 4060504
  }
}


