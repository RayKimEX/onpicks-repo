import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'onpicks-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CheckBoxComponent implements AfterViewInit {
  @Input('type') type;
  @Input('radioType') radioType = 'normal';
  @Input('value') value;
  @Input('fontSize') fontSize;
  @Input('marginRight') marginRight;
  @Input('isChecked') isChecked = false;
  @ViewChild('radioBoxView') radioBoxView;
  @ViewChild('checkBoxView') checkBoxView;

  @Output('boxEvent') boxEvent = new EventEmitter<any>();
  view;
  uuid;

  constructor() {
    this.uuid = uuid();
  }

  ngAfterViewInit() {
    if ( this.type === 'checkbox') {
      this.view = this.checkBoxView;
    } else {
      this.view = this.radioBoxView;
    }
  }

  handleChangeForRadio(evt) {
    this.boxEvent.emit(this.value);
  }

  handleChangeForCheckbox(ref) {
    this.boxEvent.emit(this.value);
    this.isChecked = !this.isChecked;
  }

}
