import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-page-household-supplies',
  templateUrl: './page-household-supplies.component.html',
  styleUrls: ['./page-household-supplies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHouseholdSuppliesComponent {

  constructor() { }
}
