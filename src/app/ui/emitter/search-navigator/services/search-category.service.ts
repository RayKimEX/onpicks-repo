import {Injectable, Renderer2} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DisplayAlertMessage} from '../../../../core/store/ui/ui.actions';
import {normalize, schema} from 'normalizr';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SearchCategoryService {
  currentCategoryCode = 0;
  categoryList;
  normalizedCategoryCodeList;
  normalizedCategoryInfoList;
  previous;
  currentSlug;
  currentCode;
  currentTitle;
  currentName = '';
  queryParams;
  searchState;
  brandListForCheck = {};
  locationListForCheck = {};
  valueListForCheck = {};
  currentParamList = {};

  currentSortSlug;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public renderer: Renderer2,
    public titleService: Title,

  ) { }

  categoryClicked( xCategoryCode ) {
    this.router.navigate( ['/shops/search'], { queryParams: {page : 1, category: xCategoryCode}, queryParamsHandling: 'merge'} );
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


    if ( this.searchState === 'search' ) {
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

    if ( this.searchState === 'search' ) {
      this.router.navigate(['/shops/search'], {
        queryParams: {page: null, location: this.queryParams.location.length === 0 ? null : this.queryParams.location},
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: {location: xLocationSlug}, queryParamsHandling: 'merge'} );
    }

  }

  sortClicked(xSortSlug) {
    this.currentSortSlug = xSortSlug;
    // this.orderedFilterListForCheck[]
    if ( this.searchState === 'search' ) {
      this.router.navigate(['/shops/search'], { queryParams: {page : 1, ordering: xSortSlug}, queryParamsHandling: 'merge'} );
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: {ordering: xSortSlug}, queryParamsHandling: 'merge'} );
    }
  }

  goBrandFilter(xBrand) {
    this.router.navigate(['/shops/search'], { queryParams: { page: 1, ordering: 'most_popular', brand: xBrand}, queryParamsHandling: 'merge'} );
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

    // this.queryParams

    if ( this.searchState === 'search' ) {
      this.router.navigate( ['/shops/search'], {queryParams: this.currentParamList});
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: this.currentParamList } );
    }
  }

  // TODO : 리뷰 검색, 브랜드 검색 2차 스콥때 하기


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

}
