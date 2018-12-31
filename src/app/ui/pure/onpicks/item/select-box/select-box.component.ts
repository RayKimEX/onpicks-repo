import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input, OnChanges,
  OnInit,
  Output,
  Renderer2, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'onpicks-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class SelectBoxComponent implements OnInit, OnChanges {
  @ViewChild('HTMLdropDown') HTMLdropDown;
  @Input('sortList') sortList;
  @Input('scrollMin') scrollMin;
  @Input('selectedElement') selectedElement;

  @Output('changeEvent') changeEvent = new EventEmitter();

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
    private renderer: Renderer2
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {

    if ( this.selectedElement === undefined ) {
      if ( this.sortList.title === undefined ){
        this.selectedElement = this.sortList.list[0];
      } else {
        this.selectedElement = {
          title : this.sortList.title,
        };
      }

    } else {
      if ( this.selectedElement.value === null ) {
        return ;
      }

      /* TODO : forEach말고 keyvalue로 indexing하는 방법으로 바꾸기*/
      this.sortList.list.forEach( v => {
        if ( v.value == this.selectedElement.value ) {
          this.selectedElement = v;
        }
      });
    }
  }

  ngOnInit() {
    // const temp = [...this.sortList];
    // console.log(temp);
    // init시에 무조건 첫번째 Object를 가져옴
    // if ( this.sortList.title === undefined) {
    //   this.selectedElement = this.sortList.list[0];
    // } else {
    //   this.selectedElement = this.sortList;
    // }



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
      value : inputValue.value,
    }

    // this.selectedElement.value =
    // this.selectedElement.title = inputValue.name;
    this.isOpen = false;
    this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    this.changeEvent.emit(inputValue.value);
  }

}
