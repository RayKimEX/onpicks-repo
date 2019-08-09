import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input
} from '@angular/core';
import {IMAGE_HOST} from '../../../../../../../../core/global-constant/app.config';

@Component({
  selector: 'p-description',
  templateUrl: './p-description.component.html',
  styleUrls: ['./p-description.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PDescriptionComponent {
  @Input('description') description;
  @Input('location') location;

  constructor(
    @Inject(IMAGE_HOST) public imageHost: string,
  ) { }
}
