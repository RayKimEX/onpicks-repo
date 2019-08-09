import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-page-office-supplies',
  templateUrl: './page-office-supplies.component.html',
  styleUrls: ['./page-office-supplies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageOfficeSuppliesComponent {

  constructor() { }
}
