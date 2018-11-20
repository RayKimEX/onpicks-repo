import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-plus-minus-icon',
  templateUrl: './plus-minus-icon.component.html',
  styleUrls: ['./plus-minus-icon.component.scss']
})
export class PlusMinusIconComponent implements OnInit {
  @Input('type') type;
  @Input('size') size;
  @Input('color') color;
  @Input('opacity') opacity;

  constructor() { }

  ngOnInit() {
  }

}
