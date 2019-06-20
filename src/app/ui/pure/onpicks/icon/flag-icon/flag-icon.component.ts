import {Component, OnInit, ChangeDetectionStrategy, Inject, Input} from '@angular/core';
import {LOCATION_MAP} from '../../../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-flag-icon',
  templateUrl: './flag-icon.component.html',
  styleUrls: ['./flag-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagIconComponent implements OnInit {
  @Input() _data: any;

  constructor(
    @Inject( LOCATION_MAP ) public locationMap: any,

  ) { }

  ngOnInit() {
  }

}
