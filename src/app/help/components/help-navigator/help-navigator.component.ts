import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-help-navigator',
  templateUrl: './help-navigator.component.html',
  styleUrls: ['./help-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpNavigatorComponent {

  constructor() { }
}
