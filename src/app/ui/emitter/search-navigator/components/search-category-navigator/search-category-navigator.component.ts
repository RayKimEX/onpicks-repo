import {Component, OnInit, ChangeDetectionStrategy, Input, Inject, LOCALE_ID, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Title} from '@angular/platform-browser';
import {SearchCategoryService} from '../../services/search-category.service';

@Component({
  selector: 'onpicks-search-category-navigator',
  templateUrl: './search-category-navigator.component.html',
  styleUrls: ['./search-category-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCategoryNavigatorComponent implements OnInit, OnDestroy {

  uiStore$;
  @Input('categoryList') categoryList;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    public router: Router,
    private store: Store<any>,
    private titleService: Title,
    private searchCategoryService: SearchCategoryService,

  ) {
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.uiStore$.unsubscribe();
  }


}
