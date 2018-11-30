import {ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'onpicks-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class SelectBoxComponent implements OnInit {
  @ViewChild('HTMLdropDown') HTMLdropDown;
  @Input('sortList') sortList;
  @Input('scrollMin') scrollMin;

  selectedElement;
  isOpen = false;
  dropBoxItemHeight = 40;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.eRef.nativeElement.contains(event.target)) {
      // console.log('clicked inside');
    } else {
      this.isOpen = false;
      this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    }
  }

  constructor(
    private eRef: ElementRef,
    private renderer: Renderer2 ) {

  }

  ngOnInit() {
    // const temp = [...this.sortList];
    // console.log(temp);
    // init시에 무조건 첫번째 Object를 가져옴
    if ( this.sortList.title === undefined) {
      this.selectedElement = this.sortList.list[0];
    } else {
      this.selectedElement = this.sortList;
    }

  }

  clickSortBox() {
    if ( this.HTMLdropDown.nativeElement.style.display === 'none') {
      this.isOpen = true;
      this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'inline-block');
    } else {
      this.isOpen = false;
      this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    }
  }

  clickSortBoxElement(inputValue) {

    this.selectedElement = {
      title : inputValue.name,
      value : parseInt(inputValue.value, 10)
    }

    // this.selectedElement.value =
    // this.selectedElement.title = inputValue.name;
    this.isOpen = false;
    this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
  }
}


