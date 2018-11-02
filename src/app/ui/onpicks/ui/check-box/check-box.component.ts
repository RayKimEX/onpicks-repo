import {AfterViewInit, Component, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'onpicks-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit, AfterViewInit {
  @Input('labelName') labelName;
  @Input('value') value;
  @Input('fontSize') fontSize;

  // TODO : CheckBox에 Input font-size를 추가해서, manipulate할 수 있게 수정

  @ViewChild('labelNameView') labelNameView;
  @ViewChild('f') f;

  isChecked = false;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.renderer.setProperty(this.labelNameView.nativeElement, 'innerHTML', this.labelName);
  }


  @HostListener('mouseover')
  onMouseOver() {
    this.isChecked = this.f.nativeElement.checked;
  }

  deselectRadio(f) {

    if ( this.isChecked === true ) {
      f.checked = false;
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
  }

}
