import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener, Inject,
  Input, LOCALE_ID,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'onpicks-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class SelectBoxComponent {
  @Input('scrollMin') scrollMin;
  @Input('multiLanguage') multiLanguage = false;
  @Input('isNativeSelectBox') isNativeSelectBox = false;
  @Input('errorEffect') errorEffect = false;
  @Input('selectedElement') set selectedElement(xSelectedElement) {

    setTimeout( () => {
      this._selectedElement = xSelectedElement;

      if ( this._selectedElement.title === null ) {
        if ( this._sortList.title === undefined ) {
          if ( this._sortList.list === undefined ) { return ; }
          this._selectedElement = this._sortList.list[0];
        } else {
          this._selectedElement = {
            title : this._sortList.title,
            value : null
          };
        }

      } else {
        if ( this._sortList === undefined || this._sortList.list === undefined ) {
          return ;
        }
        if ( this._selectedElement.value === null ){
          this._selectedElement = {
            title : this._sortList.title,
            value : null
          };

        } else {
          /* TODO : forEach말고 keyvalue로 indexing하는 방법으로 바꾸기*/
          this._sortList.list.forEach( v => {
            if ( v.value == this._selectedElement.value ) {
              this._selectedElement = v;
            }
          });
        }
      }

      this.cd.markForCheck();
    }, 0 );

  }
  @Input('sortList') set sortList(xData) {
    this._sortList = xData;

    if ( this._sortList.title === undefined ) {
      if( this._sortList.list === undefined ) { return ; }
      this._selectedElement = this._sortList.list[0];

    } else {
      if ( this._selectedElement === undefined || this._selectedElement.value === null ) {
        this._selectedElement = {
          title : this._sortList.title,
          value : null
        };
      } else {
        // TODO : forEach말고 keyvalue로 indexing하는 방법으로 바꾸기
        this._sortList.list.forEach( v => {
          if ( v.value == this._selectedElement.value ) {
            this._selectedElement = v;
          }
        });
      }
    }
  }

  // changeEvent는 value만 들어감
  @Output('changeEvent') changeEvent = new EventEmitter();
  @ViewChild('HTMLdropDown') HTMLdropDown;

  _selectedElement;
  _sortList;
  isOpen = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.isNativeSelectBox ) { return; }
    if ( this.eRef.nativeElement.contains(event.target) ) {
    } else {
      this.isOpen = false;
      this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    }
  }

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private eRef: ElementRef,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) { }

  clickSortBox() {
    if ( this.HTMLdropDown.nativeElement.style.display === 'none') {
      this.isOpen = true;
      this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'inline-block');
    } else {
      this.isOpen = false;
      this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    }
  }

  clickNativeSelectBox(inputValue) {
    this.changeEvent.emit({ value : inputValue, index : null});
  }

  clickSelectBoxElement(inputValue) {
    this._selectedElement = {
      title : this.multiLanguage ? { [this.locale] : inputValue.name } : inputValue.name,
      value : inputValue.value,
    }
    this.isOpen = false;
    this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    this.changeEvent.emit({ value : inputValue.value, index : inputValue.dataset.index});
  }

}
