import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-help-index',
  templateUrl: './help-index.component.html',
  styleUrls: ['./help-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpIndexComponent {

  constructor() { }
}
