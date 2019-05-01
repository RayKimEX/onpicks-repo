import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef, EventEmitter,
  HostListener, Inject,
  Input, LOCALE_ID,
  OnInit, Output,
  Renderer2,
  ViewChild
} from '@angular/core';


@Component({
  selector: 'onpicks-sort-box',
  templateUrl: './sort-box.component.html',
  styleUrls: ['./sort-box.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class SortBoxComponent implements OnInit, AfterViewInit {
  @ViewChild('HTMLdropDown') HTMLdropDown;
  @Input('multiLanguage') multiLanguage = false;
  @Input('sortList') sortList;
  @Input('fontSize') fontSize;
  @Input('showBox') showBox;
  @Input('selectedElement') selectedElement;

  @Output('changeEvent') changeEvent = new EventEmitter();

  isOpen = false;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.eRef.nativeElement.contains(event.target)) {
    } else {
      this.isOpen = false;
      this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    }
  }

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private eRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // init시에 무조건 첫번째 Object를 가져옴
    console.log(this.selectedElement);

    if ( this.selectedElement === undefined ) {
      this.selectedElement = this.sortList[0];
    } else {
      if ( this.selectedElement.value === undefined ) {
        this.selectedElement = this.sortList[0];
      } else {
        this.sortList.forEach( v => {
          if ( v.value === this.selectedElement.value ) {
            this.selectedElement = v;
          }
        });
      }
    }
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
    console.log(inputValue.name)
    this.selectedElement = {
      title : { [this.locale] : inputValue.name },
      value : inputValue.value
    }

    this.isOpen = false;
    this.renderer.setStyle( this.HTMLdropDown.nativeElement, 'display', 'none');
    this.changeEvent.emit(inputValue.value);
  }
}
