import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'onpicks-circle-n-button',
  templateUrl: './circle-n-button.component.html',
  styleUrls: ['./circle-n-button.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CircleNButtonComponent {
  @Input('right') right;
  @Input('top') top;

  constructor() { }
}
