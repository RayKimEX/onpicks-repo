import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-page-baby',
  templateUrl: './page-baby.component.html',
  styleUrls: ['./page-baby.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PageBabyComponent {

  constructor() { }
}
