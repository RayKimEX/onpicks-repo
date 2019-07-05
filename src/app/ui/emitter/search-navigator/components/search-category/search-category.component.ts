import {Component, OnInit, ChangeDetectionStrategy, Input, Inject, LOCALE_ID} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Title} from '@angular/platform-browser';
import {SearchCategoryService} from '../../services/search-category.service';

@Component({
  selector: 'onpicks-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCategoryComponent implements OnInit {
  @Input('categoryList') categoryList;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    public router: Router,
    public route: ActivatedRoute,
    public store: Store<any>,
    public searchCategoryService: SearchCategoryService,

  ) { }

  ngOnInit() {
  }

}
