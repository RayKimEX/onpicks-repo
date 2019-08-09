import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-page-grocery',
  templateUrl: './page-grocery.component.html',
  styleUrls: ['./page-grocery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageGroceryComponent {

  constructor( ) { }
}
