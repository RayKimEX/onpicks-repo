import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectronicsComponent {

  constructor() { }
}

