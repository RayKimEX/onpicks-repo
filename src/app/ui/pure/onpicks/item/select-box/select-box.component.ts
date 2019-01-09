import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input, OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'onpicks-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class SelectBoxComponent implements OnInit, OnChanges {
  @Input('scrollMin') scrollMin;
  @Input('selectedElement') set selectedElement (xSelectedElement) {

    this._selectedElement = xSelectedElement;
    console.log(  this._selectedElement );

    if ( this._selectedElement.title === null ) {
      if ( this._sortList.title === undefined ) {
        if( this._sortList.list === undefined ) { return ; }
        this._selectedElement = this._sortList.list[0];
      } else {
        this._selectedElement = {
          title : this._sortList.title,
          value : null
        };
      }

    } else {
      console.log(this._selectedElement);
      console.log(this._sortList)
      if ( this._selectedElement.value === null || this._sortList.list === undefined) {
        return ;
      }
      console.log('dddsfsdfdsfsdf');

      /* TODO : forEach말고 keyvalue로 indexing하는 방법으로 바꾸기*/
      this._sortList.list.forEach( v => {
        if ( v.value == this._selectedElement.value ) {
          this._selectedElement = v;
        }
      });
    }

    this.cd.markForCheck();
  }
  // changeEvent는 value만 들어감
  @Output('changeEvent') changeEvent = new EventEmitter();
  @ViewChild('HTMLdropDown') HTMLdropDown;

  @Input('sortList') set sortList(xData) {
    this._sortList = xData;

      if ( this._sortList.title === undefined ) {
        if( this._sortList.list === undefined ) { return ; }
        this._selectedElement = this._sortList.list[0];
      } else {
        this._selectedElement = {
          title : this._sortList.title,
          value : null
        };
      }

  }

  _selectedElement;
  _sortList;
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
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {

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

  clickSelectBoxElement(inputValue) {

    this._selectedElement = {
      title : inputValue.name,
      value : inputValue.value,
    }

    // this._selectedElement.value =
    // this._selectedElement.title = inputValue.name;
    this.isOpen = false;
    this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    this.changeEvent.emit({ value : inputValue.value, index : inputValue.dataset.index});
  }

}
