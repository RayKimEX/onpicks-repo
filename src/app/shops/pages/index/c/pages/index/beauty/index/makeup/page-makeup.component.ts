import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'onpicks-makeup',
  templateUrl: './page-makeup.component.html',
  styleUrls: ['./page-makeup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMakeupComponent {

  constructor() { }
}
