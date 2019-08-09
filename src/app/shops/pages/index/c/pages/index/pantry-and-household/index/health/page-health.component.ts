import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-page-health',
  templateUrl: './page-health.component.html',
  styleUrls: ['./page-health.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHealthComponent {

  constructor() { }
}
