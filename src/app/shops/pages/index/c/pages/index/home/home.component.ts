import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  constructor() { }
}
