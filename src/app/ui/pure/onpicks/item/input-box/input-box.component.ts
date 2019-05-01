import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'onpicks-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class InputBoxComponent implements OnInit {
  @Input('placeholder') placeholder;
  @Input('width') width;
  @Input('marginRight') marginRight;
  @Input('password') password;
  @Input('value') value;
  @Input('readonly') readonly = false;

  constructor() {
    this.value = '';
  }

  ngOnInit() {
  }

}
