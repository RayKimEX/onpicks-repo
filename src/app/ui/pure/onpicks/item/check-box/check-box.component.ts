import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
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
  @Input('value') value;
  @Input('fontSize') fontSize;
  @Input('marginRight') marginRight;
  @Input('isChecked') isChecked = false;

  // TODO : CheckBox에 Input font-size를 추가해서, manipulate할 수 있게 수정
  @ViewChild('radioBoxView') radioBoxView;
  @ViewChild('checkBoxView') checkBoxView;

  @Output('radioEvent') radioEvent = new EventEmitter<any>();
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
    this.radioEvent.emit(this.value);
  }

  handleChangeForCheckbox(ref) {
    // ref.checked = !ref.checked;

    this.isChecked = !this.isChecked;
  }

}
