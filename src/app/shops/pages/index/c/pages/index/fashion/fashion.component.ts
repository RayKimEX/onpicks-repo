import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FashionComponent {

  constructor() { }
}
