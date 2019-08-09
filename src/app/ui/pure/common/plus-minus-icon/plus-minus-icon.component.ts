import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-plus-minus-icon',
  templateUrl: './plus-minus-icon.component.html',
  styleUrls: ['./plus-minus-icon.component.scss']
})
export class PlusMinusIconComponent {
  @Input('type') type;
  @Input('size') size;
  @Input('borderColor') borderColor;
  @Input('opacity') opacity;

  constructor() { }
}
