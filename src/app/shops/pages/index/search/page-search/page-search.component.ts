import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class PageSearchComponent {

  constructor() { }
}
