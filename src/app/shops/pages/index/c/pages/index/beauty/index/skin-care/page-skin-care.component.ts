import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'onpicks-skincare',
  templateUrl: './page-skin-care.component.html',
  styleUrls: ['./page-skin-care.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageSkinCareComponent {

  constructor() { }
}
