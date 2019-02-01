import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'onpicks-search-navigator-mobile-filter',
  templateUrl: './search-navigator-mobile-filter.component.html',
  styleUrls: ['./search-navigator-mobile-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchNavigatorMobileFilterComponent implements OnInit {

  @Input('categoryList') categoryList;
  @Input('currentCategory') currentCategory;
  @Input('orderedFilterList') orderedFilterList;
  @Input('brandList') brandList;
  @Input('brandListForCheck') brandListForCheck;
  @Input('valueList') valueList;
  @Input('valueListForCheck') valueListForCheck;
  @Input('locationList') locationList;
  @Input('locationListForCheck') locationListForCheck;
  @Input('isShowFilterModal') isShowFilterModal = false;
  @Input('queryParams') queryParams;
  @Output('exit') exitEvent = new EventEmitter();

  // 'menu'
  // 'category'
  // 'brand'
  // 'value'
  // 'ex-warehouse'
  state = 'menu';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }


  valueClicked(xValueSlug){
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


  categoryClicked( xCategoryCode ) {
    this.router.navigate( ['/shops/search'], {queryParams: {category: xCategoryCode}, queryParamsHandling: 'merge'});
  }
}
