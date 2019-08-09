import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {REGION_ID} from '../../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {

  constructor(
    @Inject(REGION_ID) public region: string,
  ) { }
}
