import {AfterViewInit, Component, HostListener, Input, OnInit, Renderer2, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'onpicks-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit, AfterViewInit {
  @Input('type') type;
  @Input('value') value;
  @Input('fontSize') fontSize;
  @Input('marginRight') marginRight;

  // TODO : CheckBox에 Input font-size를 추가해서, manipulate할 수 있게 수정
  @ViewChild('radioBoxView') radioBoxView;
  @ViewChild('checkBoxView') checkBoxView;
  view;
  // isChecked = false;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if ( this.type === 'checkbox') {
      this.view = this.checkBoxView;
    } else {
      this.view = this.radioBoxView;
    }

    console.log(this.view);
  }

  //
  // @HostListener('mouseover')
  // onMouseOver() {
  //   if (this.fView !== undefined) {
  //     this.isChecked = this.fView.nativeElement.checked;
  //   } else {
  //     this.isChecked = this.gView.nativeElement.checked;
  //   }
  //
  //   console.log('mouseover isChecked : ' + this.isChecked);
  // }
  //
  // deselectBox(ref) {
  //
  //   if ( this.isChecked === true ) {
  //     this.isChecked = false;
  //   } else {
  //     this.isChecked = true;
  //   }
  //
  //   console.log('deselectBox isChecked : ' + this.isChecked);
  // }

  clickBox(ref) {

    ref.checked = !ref.checked ;

  }

}
