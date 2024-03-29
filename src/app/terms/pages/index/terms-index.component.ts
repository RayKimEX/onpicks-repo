import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {REGION_ID} from '../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-terms-index',
  templateUrl: './terms-index.component.html',
  styleUrls: ['./terms-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsIndexComponent {

  constructor(
    @Inject(REGION_ID) public region: string,
  ) { }
}
