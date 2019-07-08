import {Component, OnInit, ChangeDetectionStrategy, Inject} from '@angular/core';
import {SearchCategoryService} from '../../services/search-category.service';

@Component({
  selector: 'onpicks-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFilterComponent implements OnInit {

  constructor(
    private searchCategoryService: SearchCategoryService,
  ) { }

  ngOnInit() {
  }

}
