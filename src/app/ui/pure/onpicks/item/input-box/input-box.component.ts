import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'onpicks-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class InputBoxComponent {
  @Input('placeholder') placeholder;
  @Input('width') width;
  @Input('marginRight') marginRight;
  @Input('password') password;
  @Input('value') value;
  @Input('errorEffect') errorEffect = false;
  // The maximum number of characters allowed in the <input> element. Default value is 524288
  @Input('maxlength') maxlength = 524288;
  @Input('readonly') readonly = false;

  constructor() {
    this.value = '';
  }
}
