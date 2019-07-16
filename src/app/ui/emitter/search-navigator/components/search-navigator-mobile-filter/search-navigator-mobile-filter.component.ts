import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Inject, LOCALE_ID} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../../../../core/service/data-pages/search/search.service';
import {SearchInfiniteLoadService} from '../../services/search-infinite-load.service';

@Component({
  selector: 'onpicks-search-navigator-mobile-filter',
  templateUrl: './search-navigator-mobile-filter.component.html',
  styleUrls: ['./search-navigator-mobile-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchNavigatorMobileFilterComponent implements OnInit {

  categoryList;
  @Input('categoryList') set _categoryList(xCategoryList) {
    console.log(xCategoryList);
    this.categoryList = xCategoryList;
  }

  normalizedCategoryCodeList;
  @Input('normalizedCategoryCodeList') set _normalizedCategoryCodeList(xData) {
    this.normalizedCategoryCodeList = xData;
    console.log(this.normalizedCategoryCodeList);
  };

  @Input('currentCategoryCode') currentCategoryCode;
  @Input('filters') filters;
  @Input('brandList') brandList;
  @Input('brandListForCheck') brandListForCheck;
  @Input('valueList') valueList;
  @Input('valueListForCheck') valueListForCheck;
  @Input('locationList') locationList;
  @Input('locationListForCheck') locationListForCheck;
  @Input('queryParams') queryParams;
  @Input('sortList') sortList;
  @Input('state') state;
  @Input('searchState') searchState;
  @Input('currentSortSlug') currentSortSlug;
  @Input('isShowMobileFilter') isShowMobileFilter;
  @Output('exit') exitEvent = new EventEmitter();

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private searchService: SearchService,
    public router: Router,
    private route: ActivatedRoute,
    private searchInfiniteLoadService: SearchInfiniteLoadService,
  ) {

  }

  ngOnInit() {
  }

  sortClicked(xSortSlug) {
    this.currentSortSlug = xSortSlug;
    console.log('@@@@@@ current sort @@@@@@');
    console.log(this.currentSortSlug);
    this.searchInfiniteLoadService.currentSortSlug = this.currentSortSlug;
    this.searchInfiniteLoadService.currentPage = 1;
    this.searchInfiniteLoadService.infiniteList = [];
    this.exitEvent.emit();
    // this.orderedFilterListForCheck[]
    if ( this.searchState === 'search' ) {
      this.router.navigate(['/shops/search'], { queryParams: {page : 1, ordering: xSortSlug}, queryParamsHandling: 'merge'} );
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: {ordering: xSortSlug}, queryParamsHandling: 'merge'} );
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
  }

  applyValueFilter() {
    this.searchInfiniteLoadService.currentPage = 1;
    this.searchInfiniteLoadService.infiniteList = [];

    if ( this.searchState === 'search') {
      this.router.navigate(['/shops/search'], {
        queryParams: { page: null, value: this.queryParams.value.length === 0 ? null : this.queryParams.value},
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: {value: this.queryParams.value}, queryParamsHandling: 'merge'} );
    }
    this.exitEvent.emit();
  }


  brandClicked(xBrandSlug) {

    if (this.brandListForCheck[xBrandSlug] === true) {
      this.brandListForCheck[xBrandSlug] = false;
      const index = this.queryParams.brand.indexOf(xBrandSlug);
      this.queryParams.brand.splice(index, 1);
    } else {
      this.queryParams.brand.push(xBrandSlug);
    }
  }

  applyBrandFilter() {
    this.searchInfiniteLoadService.currentPage = 1;
    this.searchInfiniteLoadService.infiniteList = [];

    if ( this.searchState === 'search' ) {

      this.router.navigate(['/shops/search'], {
        queryParams: {page: null, brand: this.queryParams.brand.length === 0 ? null : this.queryParams.brand},
        queryParamsHandling: 'merge'
      });
    } else {
      // category 일때
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: { brand: this.queryParams.brand}, queryParamsHandling: 'merge'} );
    }
    this.exitEvent.emit();
  }

  locationClicked(xLocationSlug) {
    this.searchInfiniteLoadService.currentPage = 1;
    this.searchInfiniteLoadService.infiniteList = [];

    this.exitEvent.emit();
    if (this.locationListForCheck[xLocationSlug] === true) {
      this.locationListForCheck[xLocationSlug] = false;
      const index = this.queryParams.location.indexOf(xLocationSlug);
      this.queryParams.location.splice(index, 1);
    } else {
      this.queryParams.location.push(xLocationSlug);
    }

    if( this.searchState === 'search') {
      this.router.navigate(['/shops/search'], {
        queryParams: {page: null, location: this.queryParams.location.length === 0 ? null : this.queryParams.location},
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['./'], { relativeTo: this.route, queryParams: {  location: xLocationSlug}, queryParamsHandling: 'merge'} );
    }
  }

  removeFilter(xState) {
    switch (xState) {
      case 'menu' :
        this.router.navigate(['/shops/search'], {queryParams: {brand: null, value: null, location : null}, queryParamsHandling: 'merge'});
        break;
      case 'category' :
        this.router.navigate(['/shops/search'], {queryParams: {category: null}, queryParamsHandling: 'merge'});
        break;
      case 'brand' :
        this.router.navigate(['/shops/search'], {queryParams: {brand: null}, queryParamsHandling: 'merge'});
        break;
      case 'value' :
        this.router.navigate(['/shops/search'], {queryParams: {value: null}, queryParamsHandling: 'merge'});
        break;
      case 'ex-warehouse' :
        this.router.navigate(['/shops/search'], {queryParams: {location: null}, queryParamsHandling: 'merge'});
        break;
    }
    this.exitEvent.emit();
    this.state = 'menu';
  }

  debugC() {
    this.state = 'category';
    console.log(this.categoryList);
  }


  categoryClicked( navigateUrlForCategory, xCategoryCode ) {
    // this.router.navigate( ['/shops/search'], {queryParams: {category: xCategoryCode}, queryParamsHandling: 'merge'});

    if ( this.searchState === 'search' ) {
      this.router.navigate( ['/shops/search'], {queryParams: {page : 1, category: xCategoryCode}, queryParamsHandling: 'merge'});
    } else {
      this.router.navigateByUrl(navigateUrlForCategory);
    }
    this.exitEvent.emit();
  }

}
