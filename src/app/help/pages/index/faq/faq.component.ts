import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {REGION_ID} from '../../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {

  constructor(
    @Inject(REGION_ID) public region: string,
  ) {
  }

  ngOnInit() {
  }

}
