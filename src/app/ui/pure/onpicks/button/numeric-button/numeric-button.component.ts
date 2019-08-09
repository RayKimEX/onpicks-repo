import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'onpicks-numeric-button',
  templateUrl: './numeric-button.component.html',
  styleUrls: ['./numeric-button.component.scss']
})
export class NumericButtonComponent {
  @Input('type') type;
  @Input('active') active;

  constructor() { }
}
