import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

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
  @Output('exit') exitEvent = new EventEmitter();

  // 'menu'
  // 'category'
  // 'brand'
  // 'value'
  // 'ex-warehouse'
  state = 'menu';

  constructor() { }

  ngOnInit() {

  }

}
