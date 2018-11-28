import {AfterViewInit, Component, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'onpicks-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  @Input('type') type;
  @Input('value') value;
  @Input('fontSize') fontSize;
  @Input('marginRight') marginRight;

  // TODO : CheckBox에 Input font-size를 추가해서, manipulate할 수 있게 수정
  @ViewChild('f') fView;

  isChecked = false;

  constructor() { }

  ngOnInit() {
    console.log(this.type);
  }


  @HostListener('mouseover')
  onMouseOver() {
    this.isChecked = this.fView.nativeElement.checked;
  }

  deselectRadio(fView) {

    if ( this.isChecked === true ) {
      fView.checked = false;
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
  }

}
