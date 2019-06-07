import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {REGION_ID} from '../../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyComponent implements OnInit {

  constructor(
    @Inject(REGION_ID) public region: string,
  ) {

  }

  ngOnInit() {
  }

}
