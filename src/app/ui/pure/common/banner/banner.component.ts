import {Component, OnInit, ChangeDetectionStrategy, Input, Inject, LOCALE_ID} from '@angular/core';

@Component({
  selector: 'ui-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {

  @Input('bannerInfo') bannerInfo;

  constructor(
    @Inject( LOCALE_ID ) public locale: string,
  ) { }

  ngOnInit() {
  }

}
