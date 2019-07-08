import {Component, OnInit, ChangeDetectionStrategy, Input, Inject, LOCALE_ID, OnDestroy, Renderer2} from '@angular/core';
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
    renderer: Renderer2

  ) {
    searchCategoryService.renderer = renderer;
    this.uiStore$ = this.store.pipe(select(state => state.ui.currentCategoryList))
      .subscribe(val => {
        // this.categoryList = val;
        searchCategoryService.normalizedCategoryInfoList = val.entities;
        searchCategoryService.normalizedCategoryCodeList = val.result;
        searchCategoryService.previous = val.previous;
        searchCategoryService.currentSlug = val.currentSlug;
        searchCategoryService.currentCode = val.currentCode;
        searchCategoryService.currentCategoryCode = val.currentCode;

        searchCategoryService.currentName = val.currentName;
        searchCategoryService.currentTitle = val.currentTitle;

        if ( searchCategoryService.currentName !== undefined ) {
          searchCategoryService.titleService.setTitle(searchCategoryService.currentName[this.locale]);
        }
      });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.uiStore$.unsubscribe();
  }


}
