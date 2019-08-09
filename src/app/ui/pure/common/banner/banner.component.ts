import {Component, OnInit, ChangeDetectionStrategy, Input, Inject, LOCALE_ID} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ui-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  @Input('bannerInfo') bannerInfo;

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  navigateForCollection(xFilterSlug) {

    Object.keys(xFilterSlug).forEach( v => {
      if ( v === 'router' ) {
        this.router.navigate([xFilterSlug[v]]);
      } else {
        this.router.navigate(['/shops/search'], { relativeTo: this.route, queryParams: {  ordering : 'most_popular', [v] : xFilterSlug[v] }, queryParamsHandling : 'merge'});
      }
    });
  }

}
