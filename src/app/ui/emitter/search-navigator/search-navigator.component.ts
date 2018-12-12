import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {UpdateCategory} from '../../../core/store/ui/ui.actions';
import {AddOrCreateToCart, AddToCart, SubtractFromCart, SubtractOrDeleteFromCart} from '../../../core/store/cart/cart.actions';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'emitter-search-navigator',
  templateUrl: './search-navigator.component.html',
  styleUrls: ['./search-navigator.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})

export class SearchNavigatorComponent implements OnInit, OnDestroy {
  // @Input('categoryList') categoryList;

  @Input() set inputInfoList(_infoList) {
    console.log('items', _infoList);
    /* async 데이터가 들어오는데, null이라면 return을 해줌 */
    this.currentList = null;
    if ( _infoList == null ) {  return; };
    this.wellBeingLabelList = _infoList.aggregation.values;
    this.forwardingPlaceList = _infoList.aggregation.locations;
    this.brandList = _infoList.aggregation.brands;
    this.infoList = _infoList.results;


    this.totalCount = this.infoList.length;
    this.totalPage = this.totalCount / this.maxRow;
    console.log(this.infoList);
    this.totalPageArray =  Array(parseInt(this.totalPage, 10));
    this.totalPageArray.push(this.totalPageArray.length + 1);

    this.currentList = this.infoList.slice( 0, this.maxRow);
  }


  get inputInfoList() {
    return this.infoList;
  }

  wellBeingLabelList;
  forwardingPlaceList;
  brandList;
  infoList;

  objectKeys = Object.keys;

  result;

  categoryList;
  previous;
  currentSlug;


  imageIndex = 0;

  itemListArray;

  ///////////////////////
  totalCount;
  totalPage;

  totalPageArray = [];
  maxRow = 18;

  currentList = [];
  currentPage = 1;


  // subscribe
  cartStore$;
  uiStore$;
  queryParams$;

  // subscribe value
  queryParams: { term } = { term : ''};
  cartStore;

  constructor(
    private renderer: Renderer2,
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,

  ) {
    this.uiStore$ = this.store.pipe(select('ui')).subscribe(val => {
      this.categoryList = val.currentCategoryList.entities;
      this.result = val.currentCategoryList.result;
      this.previous = val.currentCategoryList.previous;
      this.currentSlug = val.currentCategoryList.currentSlug;
    });

    this.cartStore$ = this.store.pipe(select( state => state.cart)).subscribe( val => {
      this.cartStore = val;
      this.cd.markForCheck();
    })

    this.queryParams$ = this.route.queryParams.subscribe( (val: {term}) => {
      this.currentList = null;
      this.cd.markForCheck();
      console.log(this.currentList);
      this.queryParams = val;
    });

    const url = this.router.url.split('/');
  }

  ngOnDestroy() {
    console.log('destroyed navigator')
    this.uiStore$.unsubscribe();
    this.queryParams$.unsubscribe();
    this.cartStore$.unsubscribe();
  }

  ngOnInit() {

  }

  addToCart(xAmount, xProductSlug) {

    xAmount++;

    // 만약 카트 아이디가. 카트스토어 카트리스트에 있다면, increase cart를 하고, create cart를 하지 않는다.
    //
    this.store.dispatch( new AddOrCreateToCart( { productSlug : xProductSlug, amount : xAmount, increaseOrCreate : xProductSlug in this.cartStore.cartList }) );
  }

  subtractFromCart(xAmount, xProductSlug) {
    xAmount--;
    this.store.dispatch( new SubtractOrDeleteFromCart( { productSlug : xProductSlug, amount : xAmount, subtractOrDelete : xAmount !== 0 ? true : false }) );
  }

  paginate(pageIndex) {
    this.currentPage = pageIndex;
    this.currentList = this.infoList.slice(  (this.currentPage - 1 ) * this.maxRow , this.currentPage * this.maxRow )
  }

  numberArray(n: number): any[] {
    return Array(n);
  }

  updateSecondCategory(index, slug) {
    const url = this.router.url.split('/');
    if (url[url.length - 1] === slug) { return; };

    this.store.dispatch(new UpdateCategory({ secondSortKey : slug }));
    this.router.navigate( ['/shops/c/pantry-and-household/' + slug], {relativeTo : this.route});
  }

  updateThirdCategory(index, secondSlug, thirdSlug) {
    const url = this.router.url.split('/')
    console.log(url.length);
    // if (url[url.length - 1] === slug) { return; };

    this.store.dispatch(new UpdateCategory({ secondSortKey : secondSlug, thirdSortKey: thirdSlug }));
    // this.store.dispatch(new UpdateThirdCategory({secondSortBy : index}));
    this.router.navigate( ['/shops/c/pantry-and-household/' + secondSlug + '/' + thirdSlug], {relativeTo : this.route});
  }

  onedepthFold( dom, label ) {
    if ( dom.style.maxHeight === '3500px' ) {

      this.renderer.setStyle(label , 'transform', 'rotate(0deg)');
      this.renderer.setStyle(dom, 'opacity', '0');
      this.renderer.setStyle(dom, 'max-height', '0px');

    } else {

      this.renderer.setStyle(label , 'transform', 'rotate(-180deg)');
      this.renderer.setStyle(dom, 'opacity', '1');
      this.renderer.setStyle(dom, 'max-height', '3500px');
    }
  }

  twodepthFold( dom, label ) {
    if ( dom.style.maxHeight === '700px' ) {
      this.renderer.setStyle(label , 'transform', 'rotate(0deg)');
      this.renderer.setStyle(dom, 'opacity', '0');
      this.renderer.setStyle(dom, 'max-height', '0px');

    } else {
      this.renderer.setStyle(label , 'transform', 'rotate(-180deg)');
      this.renderer.setStyle(dom, 'opacity', '1');
      this.renderer.setStyle(dom, 'max-height', '700px');

    }
  }

  nonCompareFunction( a, b ) {
    return 0;
  }

}
