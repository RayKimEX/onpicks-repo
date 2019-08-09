import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'onpicks-page-personal-care',
  templateUrl: './page-personal-care.component.html',
  styleUrls: ['./page-personal-care.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagePersonalCareComponent {

  constructor() { }
}
