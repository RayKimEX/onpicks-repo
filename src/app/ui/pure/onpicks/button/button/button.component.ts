import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('width') width;
  @Input('type') type;
  @Input('size') size;
  @Input('text') text;
  @Input('marginLeft') marginLeft;

  constructor() {

  }

  ngOnInit() {
  }

}
