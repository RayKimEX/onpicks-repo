import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input
} from '@angular/core';
import {IMAGE_HOST} from '../../../../../../../../core/global-constant/app.config';

@Component({
  selector: 'p-item-detail',
  templateUrl: './p-item-detail.component.html',
  styleUrls: ['./p-item-detail.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PItemDetailComponent {
  @Input('description') description;
  @Input('categoryInfo') categoryInfo;

  constructor(
    @Inject(IMAGE_HOST) public imageHost: string,
  ) { }
}
