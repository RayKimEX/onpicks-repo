import {ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';
import {IMAGE_HOST} from '../../../../../../../../core/global-constant/app.config';

@Component({
  selector: 'onpicks-p-item-detail',
  templateUrl: './p-item-detail.component.html',
  styleUrls: ['./p-item-detail.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PItemDetailComponent implements OnInit {
  @Input('description') description;
  @Input('categoryInfo') categoryInfo;

  constructor(
    @Inject(IMAGE_HOST) public imageHost: string,
  ) { }

  ngOnInit() {
  }

}
