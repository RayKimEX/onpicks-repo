import {ChangeDetectorRef, Injectable, OnDestroy} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {SearchService} from '../../../../core/service/data-pages/search/search.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchInfiniteLoadService {
  /******* infinite loading ******/
  searchNextPageData$;
  searchNextPageRequest$ = new Subject();
  categoryNextPageData$;
  categoryNextPageRequest$ = new Subject();
  infiniteList = [];
  isLoading = false;
  totalPage;
  totalPageArray;
  totalCount;
  maxRow;
  infoList;
  currentPage = 1;
  normalizedCategoryInfoList;

  categoryList;
  normalizedCategoryCodeList;
  currentCategoryCode;
  filters;
  brandList;
  brandListForCheck;
  valueList;
  valueListForCheck;
  locationList;
  locationListForCheck;
  isShowMobileFilter = false;
  queryParams;
  state;
  sortList;
  searchState;
  currentSortSlug = 'most_popular';



  constructor(
    private searchService: SearchService,
    public router: Router,
  ) {
  }
}
