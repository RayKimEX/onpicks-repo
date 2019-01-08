import {
  ChangeDetectionStrategy, ChangeDetectorRef,
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
  _sortList;
  @Input('sortList') set sortList(xData) {
    this._sortList = xData;
    console.log(xData);
    console.log(this.selectedElement);
    if ( this.selectedElement.title === null ) {
      if ( this._sortList.title === undefined ) {
        if( this._sortList.list === undefined ) { return ; }
        this.selectedElement = this._sortList.list[0];
      } else {
        console.log('@@@@@@@@@');

        console.log(this._sortList.title);
        this.selectedElement = {
          title : this._sortList.title,
          value : null
        };
      }

    } else {
      if ( this.selectedElement.value === null || this._sortList.list === undefined) {
        return ;
      }

      /* TODO : forEach말고 keyvalue로 indexing하는 방법으로 바꾸기*/
      this._sortList.list.forEach( v => {
        if ( v.value == this.selectedElement.value ) {
          this.selectedElement = v;
        }
      });
    }


    console.log(this.sortList);
    this.cd.markForCheck();
  }
  @Input('scrollMin') scrollMin;
  @Input('selectedElement') selectedElement = { title : null, value : null };


  // changeEvent는 value만 들어감
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

    this.selectedElement = {
      title : inputValue.name,
      value : inputValue.value,
    }

    // this.selectedElement.value =
    // this.selectedElement.title = inputValue.name;
    this.isOpen = false;
    this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    this.changeEvent.emit({ value : inputValue.value, index : inputValue.dataset.index});
  }

}
