import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'onpicks-fragrance',
  templateUrl: './page-fragrance.component.html',
  styleUrls: ['./page-fragrance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFragranceComponent {

  constructor() { }
}
