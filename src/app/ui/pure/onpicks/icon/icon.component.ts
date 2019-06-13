import {Component, OnInit, ChangeDetectionStrategy, Inject, LOCALE_ID, Input} from '@angular/core';
import {LOCATION_MAP} from '../../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {

  constructor(
    @Inject( LOCATION_MAP ) public locationMap: any,
    @Inject( LOCALE_ID ) public locale: string,
  ) { }

  ngOnInit() {
  }

}
