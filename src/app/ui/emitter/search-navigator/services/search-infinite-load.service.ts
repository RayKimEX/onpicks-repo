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
  infiniteList = [];
  isLoading = false;
  currentPage = 1;
  currentSortSlug = 'most_popular';
  constructor(
  ) {
  }
}
