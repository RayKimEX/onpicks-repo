import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input('width') width;
  @Input('type') type;
  @Input('size') size;
  @Input('text') text;
  @Input('marginLeft') marginLeft;
  @Input('padding') padding = true;

  constructor() {

  }

  ngOnInit() {
  }

}
