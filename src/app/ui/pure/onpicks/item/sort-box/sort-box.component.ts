import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';


@Component({
  selector: 'onpicks-sort-box',
  templateUrl: './sort-box.component.html',
  styleUrls: ['./sort-box.component.scss']
})
export class SortBoxComponent implements OnInit, AfterViewInit {
  @ViewChild('HTMLdropDown') HTMLdropDown;

  @Input('sortList') sortList;
  @Input('fontSize') fontSize;
  @Input('showBox') showBox;

  selectedElement;
  isOpen = false;

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
    private renderer: Renderer2  ) { }

  ngOnInit() {
    // const temp = [...this.sortList];
    // console.log(temp);
    // init시에 무조건 첫번째 Object를 가져옴
    this.selectedElement = this.sortList[0];
  }

  ngAfterViewInit() {

    if ( this.fontSize !== undefined ) {
      this.renderer.setStyle(this.eRef.nativeElement.getElementsByClassName('onpicks-sort-box__fore-button')[0], 'fontSize', this.fontSize);
    }

  }

  clickSortBox() {


    if ( this.isOpen === false ) {
      this.isOpen = true;
      if ( this.showBox === false ) { return; }
      this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'inline-block');
    } else {
      this.isOpen = false;
      if ( this.showBox === false ) { return; }
      this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    }
  }

  clickSortBoxElement(inputValue) {

    this.selectedElement = {
      title : inputValue.name,
      value : parseInt(inputValue.value, 10)
    }

    this.isOpen = false;
    this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
  }

}
