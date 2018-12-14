import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../../../../core/service/data-pages/search/search.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'onpicks-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PageSearchComponent implements OnInit {


  searchData$;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
  ) {
    this.searchData$ = this.route.queryParams.pipe(
      switchMap((value) => {
        const param = this.router.url.substring(this.router.url.indexOf('?'), this.router.url.length);
        return this.searchService.search(param);
      })
    );
  }

  ngOnInit() {

  }
}
